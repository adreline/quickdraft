const { BrowserWindow, session } = require('electron');
const url = require('url');
const axios = require('axios');
const { promises: Fs } = require('fs');

const request = axios.create({
    baseURL: 'https://login.eveonline.com/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'login.eveonline.com'
    }
});
/**
 * App permissions scopes 
 * @type {*} */
const scope = [
    'esi-mail.organize_mail.v1',
    'esi-mail.read_mail.v1',
    'esi-mail.send_mail.v1',
    'esi-corporations.read_corporation_membership.v1',
    'esi-characters.read_corporation_roles.v1',
    'esi-corporations.track_members.v1'
];
/** 
 * callback path, defined in the app at eve developer portal 
 * @type {*} */
const sso_callback = 'https://localhost/eveauth/callback';
/** 
 * Will contain app id and app secret in b64 sha 256 format
 * @type {*} */
let settings = {};
const base = 'https://login.eveonline.com/v2/oauth/authorize/';

const sso_response_target = 'v2/oauth/token';
/**
 * Generates sso OAuth link
 *
 * @return {*} 
 */
function getSSOLink() {
    return encodeURI(`${base}?response_type=code&redirect_uri=${sso_callback}&client_id=${settings.app.id}&scope=${scope.join(' ')}&state=hehe`);
}
/**
 * Captures callback GET request from ESI OAuth 
 *
 * @param {*} url
 * @return {*} 
 */
function isSSORedirect(url) {
    let ex = /^https\:\/\/localhost\/eveauth\/callback\?code\=[\d\w_-]+\&state\=hehe/m;
    return ex.test(url)
}
/**
 * Executes the last step at ESI OAuth and returns the Promise of a final auth token
 *
 * @param {*} code
 * @return {*} 
 */
function sendSSOAuthRequest(code) {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('client_id', settings.app.id);
    params.append('code_verifier', settings.app.b64_sha_secret);

    return request.post(sso_response_target, params);
}
/**
 * Refreshes the SSO Token
 *
 * @param {*} refresh_token
 * @return {*} 
 */
function refreshSSOToken(refresh_token) {
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', refresh_token);
    params.append('client_id', settings.app.id);

    return request.post(sso_response_target, params);
}
/**
 * Listens to web requests the app makes until it detects the ESI callback route
 * Returns Promise of verification code
 *
 * @return {*} 
 */
function getSSOVerificationCode() {
    return new Promise((resolve, reject) => {
        session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
            if (isSSORedirect(details.url)) {
                callback({ cancel: true })
                let url = new URL(details.url);
                resolve(url.searchParams.get('code'), url.searchParams.get('state'))
            } else {
                callback({})
            }
        })
    })
}
/**
 * Displays the SSO login page and returns a Promise of SSO token
 *
 * @param {*} env
 * @return {*} 
 */
function showSSOLogin() { 
    return new Promise((resolve, reject) => {
        const win = new BrowserWindow({})
        win.loadURL(getSSOLink())

        getSSOVerificationCode(session)
            .then((code, state) => {
                sendSSOAuthRequest(code)
                    .then(response => {
                        win.close()
                        resolve(response.data)
                    })
                    .catch(e => {
                        win.close()
                        reject(e)
                    })
            })
    })
}

/**
 * Promises to refresh the sso token or reject if refreshing is not needed
 *
 * @param {*} sso
 * @return {*} 
 */
function refreshIfExpired(sso){

    return new Promise((resolve, reject) => {
        console.log(`[sso.js] current token will expire on ${sso.expires_at}`);
        let diff = sso.expires_at - (Date.now() + 10000)

        if(diff < 0){
            // the token has expired or will expire in less then 10s
            refreshSSOToken(sso.refresh_token)
            .then( response => {
                resolve(response.data)
            })
            .catch( e => {
                console.log('[sso.js] refreshing token failed');
                console.log(e);
                resolve(sso)
            })
        }else{
            // the token is valid and not stale
            reject()
        }
    
    })

}

/**
 * Creates a futore timestamp with given offset
 *
 * @param {*} offset
 * @return {*} 
 */
function getExpiryTimestamp(offset){
    return expires_at = Date.now() + (offset * 1000)
}

/**
 * Promises to return a valid and fresh SSO token
 *
 * @return {*} 
 */
function ssoAuthorize(){

    return new Promise((resolve, reject) => {
        Fs.access('./env.json')
        .then(() => {
            console.log('[sso.js] env.json detected, reading');
            return Fs.readFile('./env.json', { encoding: 'utf8' })
        })
        .catch(() => {
            console.log('[sso.js] env is not set, cannot perform authorization');
            reject()
        })
        .then(data => {
            console.log('[sso.js] env received');
            settings = JSON.parse(data)
            return Fs.access('./token.json')
        })
        .then(() => {
            console.log('[sso.js] sso token present, reading');
            return Fs.readFile('./token.json', { encoding: 'utf8' })    
        })
        .catch(() => {
            console.log('[sso.js] sso token not found, asking for login');
            return showSSOLogin()
        })
        .then((data) => {
            console.log('[sso.js] received sso token');
            if(typeof data === 'string'){
              console.log('[sso.js] received token via file');
              sso = JSON.parse(data)
              refreshIfExpired(sso)
              .then( new_sso => {
                console.log('[sso.js] token was refreshed');
                sso.access_token = new_sso.access_token
                sso.refresh_token = new_sso.refresh_token
                sso.expires_at = getExpiryTimestamp(new_sso.expires_in)
                Fs.writeFile('./token.json', JSON.stringify(sso))
                resolve(sso)
              })
              .catch(() => {
                console.log('[sso.js] refreshing the token was not necessary');
                resolve(sso)
              })
              
            }else{
              console.log('[sso.js] received token via sso login');
              data.expires_at = getExpiryTimestamp(data.expires_in)
              Fs.writeFile('./token.json', JSON.stringify(data))
              resolve(data)
            }
        })

    })
}

exports.getSSO = ssoAuthorize;