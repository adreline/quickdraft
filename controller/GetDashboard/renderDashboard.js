var DateTime = luxon.DateTime;
const pic = document.getElementById('character-picture')
const characterName = document.getElementById('character-name')
const filter_mode = document.getElementById('filter-mode')
const btn_filter = document.getElementById('btn-filter')
const date_picker_y = document.getElementById('date-picker-youngest')
const date_picker_o = document.getElementById('date-picker-oldest')
const table = document.getElementById('member-table')
const table_body = document.getElementById('member-table-body')
const select_all_box = document.getElementById('select-all')
const btn_logout = document.getElementById('btn-logout')
btn_logout.addEventListener('click', () => { dashboard.logout() })
const filter_list_by_names = document.getElementById('filter-list-by-names')
const name_paste_area = document.getElementById('name-paste-area')

let current_date_y = DateTime.now()
let current_date_o = DateTime.fromMillis(0)
/**
 * Selects all characters with checked checkboxes
 * and returns it as an array to the main process
 *
 * @return {Array} 
 */
function getSelectedMembers(){
    let boxes = document.getElementsByName('selected-members')
    return Array.from(boxes).filter( elem => elem.checked ).map( elem => {
        let tmp = elem.value.split(':')
        return { name: tmp[0], id: tmp[1] }
    })
}
/**
 * Applies given state to all checkboxes
 * apart from 'select all' box
 *
 * @param {boolean} state
 */
function selectAll(state){
 let boxes = document.getElementsByName('selected-members')
 boxes.forEach(box => {
    box.checked = state
 })
 enableButton()
}
/**
 * Send button will only appear if at least one recipient is selected
 *
 */
function enableButton(){
    let boxes = document.getElementsByName('selected-members')
    let send = document.getElementById('send-mail-button')
    let any =  Array.from(boxes).find( elem => elem.checked )
    if(any === undefined){
        send.setAttribute('disabled', 'disabled')
        send.classList.add('is-hidden')
    }else{
        send.removeAttribute('disabled')
        send.classList.remove('is-hidden')
    }
}
/**
 * Steers the filtering system
 * 
 * @todo so far it is very convolted and could use a rewrite
 */
function handleFilters(){
    filter_mode.addEventListener('change', event => {
        let now = DateTime.now()
        if(event.target.value === '-1'){
            date_picker_y.classList.add(['is-hidden'])
            date_picker_o.classList.add(['is-hidden'])
            filter_list_by_names.classList.add(['is-hidden'])
            current_date_y = now
            current_date_o = DateTime.fromMillis(0)
        }
        if(event.target.value === '0'){
            date_picker_y.classList.remove(['is-hidden'])
            date_picker_o.classList.add(['is-hidden'])
            filter_list_by_names.classList.add(['is-hidden'])
            current_date_y = DateTime.fromMillis(0)
            current_date_o = DateTime.fromMillis(0)
            date_picker_y.value = ''
        }
        if(event.target.value === '1'){
            date_picker_y.classList.add(['is-hidden'])
            date_picker_o.classList.add(['is-hidden'])
            filter_list_by_names.classList.add(['is-hidden'])
            current_date_y = now.minus({months: 3})
            current_date_o = now.minus({months: 6})
        }
        if(event.target.value === '2'){
            date_picker_y.classList.add(['is-hidden'])
            date_picker_o.classList.add(['is-hidden'])
            filter_list_by_names.classList.add(['is-hidden'])

            current_date_y = now.minus({months: 6})
            current_date_o = DateTime.fromMillis(0)
        }
        if(event.target.value === '3'){
            date_picker_y.classList.add(['is-hidden'])
            date_picker_o.classList.add(['is-hidden'])
            filter_list_by_names.classList.remove(['is-hidden'])
            
        }

    })
    date_picker_y.addEventListener('change', event => {
        current_date_y = DateTime.fromISO(event.target.value)
    })

}
/**
 * Filters the members array
 *
 * @param {Array} members
 * @param {number} time_oldest
 * @param {number} time_youngest
 * @return {Array} 
 */
function applyFilter(members, time_oldest, time_youngest){
    if(filter_mode.value === '3'){
        let list = name_paste_area.value.trim().split("\n").map(item => item.trim())
        console.log(list)
        list.forEach(item => console.log(item))
        return members.filter(member => {
            return list.includes(member.characterName)
        })
    }else{
        return members.filter(member => {
            let last_online = DateTime.fromJSDate(member.logonDate)
            console.log(`${last_online} > ${time_oldest} && ${last_online} < ${time_youngest}`);
            return (last_online > time_oldest && last_online < time_youngest)
        })
    }
}
/**
 * Writes the content of the members array on the ui
 *
 * @param {Array} members
 */
function populateTable(members){
    table.classList.add('is-hidden')

        let l_members = clone(members)
        l_members = localiseDates([ "logonDate", "startDate" ], l_members)

    let prototype = [
        { tag: "input", type: "checkbox" },
        { key: "characterName", tag: "td" },
        { key: "characterId", tag: "td" },
        { key: "logonDate", tag: "td" },
        { key: "startDate", tag: "td" },
    ]
    for(i in l_members){
        prototype[0].name = "selected-members"
        prototype[0].value = `${l_members[i].characterName}:${l_members[i].characterId}`
        table_body.appendChild(constructTableRow(l_members[i],prototype))
    }

    table.classList.remove('is-hidden')

}
/**
 * Each checkbox lisstens to click events
 *
 */
function attachListeners(){
    document.getElementsByName('selected-members').forEach( elem => { 
        elem.addEventListener('change', event => { enableButton() }) 
    })
}
/**
 * Deletes all ui table content
 *
 */
function clearTable(){
    document.getElementById('member-table-body').replaceChildren()
}

dashboard.getCharacter()
.then(character => {
    pic.src = `${character.picture}`
    characterName.innerText = character.name
    return dashboard.getCorpMembers()
})
.then( members => {
    console.log(typeof members[0].logoffDate);
    populateTable(members)
    attachListeners()
    select_all_box.addEventListener('change', event => { 
        selectAll(event.currentTarget.checked) 
    }) 
    document.getElementById('send-mail-button').addEventListener('click', event => { 
        window.dashboard.putSelectedMembers(getSelectedMembers()) 
    })
    document.getElementById('open-templates-list').addEventListener('click', event => {
        window.dashboard.openTemplatesList()
    })
    handleFilters()
    btn_filter.addEventListener('click', event => {
        // this applies the filtering logic
        let filtered_members = applyFilter(members, current_date_o, current_date_y)
        clearTable()
        populateTable(filtered_members)
        attachListeners()
    })
})
.catch( error => {
    const msg = document.getElementById('warning-message')
    const body = document.getElementById('warning-message-body')
    body.innerText = error
    msg.classList.remove('is-hidden')
    console.log(error)
})