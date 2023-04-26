/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.17
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.31
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetCharactersCharacterIdFwStatsOk', 'model/GetCorporationsCorporationIdFwStatsOk', 'model/GetFwLeaderboardsCharactersOk', 'model/GetFwLeaderboardsCorporationsOk', 'model/GetFwLeaderboardsOk', 'model/GetFwStats200Ok', 'model/GetFwSystems200Ok', 'model/GetFwWars200Ok', 'model/InternalServerError', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetCharactersCharacterIdFwStatsOk'), require('../model/GetCorporationsCorporationIdFwStatsOk'), require('../model/GetFwLeaderboardsCharactersOk'), require('../model/GetFwLeaderboardsCorporationsOk'), require('../model/GetFwLeaderboardsOk'), require('../model/GetFwStats200Ok'), require('../model/GetFwSystems200Ok'), require('../model/GetFwWars200Ok'), require('../model/InternalServerError'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.FactionWarfareApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetCharactersCharacterIdFwStatsOk, root.EveSwaggerInterface.GetCorporationsCorporationIdFwStatsOk, root.EveSwaggerInterface.GetFwLeaderboardsCharactersOk, root.EveSwaggerInterface.GetFwLeaderboardsCorporationsOk, root.EveSwaggerInterface.GetFwLeaderboardsOk, root.EveSwaggerInterface.GetFwStats200Ok, root.EveSwaggerInterface.GetFwSystems200Ok, root.EveSwaggerInterface.GetFwWars200Ok, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.ServiceUnavailable, root.EveSwaggerInterface.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetCharactersCharacterIdFwStatsOk, GetCorporationsCorporationIdFwStatsOk, GetFwLeaderboardsCharactersOk, GetFwLeaderboardsCorporationsOk, GetFwLeaderboardsOk, GetFwStats200Ok, GetFwSystems200Ok, GetFwWars200Ok, InternalServerError, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * FactionWarfare service.
   * @module api/FactionWarfareApi
   * @version 1.17
   */

  /**
   * Constructs a new FactionWarfareApi. 
   * @alias module:api/FactionWarfareApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdFwStats operation.
     * @callback module:api/FactionWarfareApi~getCharactersCharacterIdFwStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdFwStatsOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Overview of a character involved in faction warfare
     * Statistical overview of a character involved in faction warfare  --- Alternate route: `/dev/characters/{character_id}/fw/stats/`  Alternate route: `/legacy/characters/{character_id}/fw/stats/`  Alternate route: `/v1/characters/{character_id}/fw/stats/`  Alternate route: `/v2/characters/{character_id}/fw/stats/`  --- This route expires daily at 11:05
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/FactionWarfareApi~getCharactersCharacterIdFwStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdFwStatsOk}
     */
    this.getCharactersCharacterIdFwStats = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdFwStats");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetCharactersCharacterIdFwStatsOk;

      return this.apiClient.callApi(
        '/characters/{character_id}/fw/stats/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdFwStats operation.
     * @callback module:api/FactionWarfareApi~getCorporationsCorporationIdFwStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCorporationsCorporationIdFwStatsOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Overview of a corporation involved in faction warfare
     * Statistics about a corporation involved in faction warfare  --- Alternate route: `/dev/corporations/{corporation_id}/fw/stats/`  Alternate route: `/legacy/corporations/{corporation_id}/fw/stats/`  Alternate route: `/v1/corporations/{corporation_id}/fw/stats/`  Alternate route: `/v2/corporations/{corporation_id}/fw/stats/`  --- This route expires daily at 11:05
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/FactionWarfareApi~getCorporationsCorporationIdFwStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCorporationsCorporationIdFwStatsOk}
     */
    this.getCorporationsCorporationIdFwStats = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdFwStats");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetCorporationsCorporationIdFwStatsOk;

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/fw/stats/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFwLeaderboards operation.
     * @callback module:api/FactionWarfareApi~getFwLeaderboardsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFwLeaderboardsOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of the top factions in faction warfare
     * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday  --- Alternate route: `/dev/fw/leaderboards/`  Alternate route: `/legacy/fw/leaderboards/`  Alternate route: `/v1/fw/leaderboards/`  Alternate route: `/v2/fw/leaderboards/`  --- This route expires daily at 11:05
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/FactionWarfareApi~getFwLeaderboardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFwLeaderboardsOk}
     */
    this.getFwLeaderboards = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetFwLeaderboardsOk;

      return this.apiClient.callApi(
        '/fw/leaderboards/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFwLeaderboardsCharacters operation.
     * @callback module:api/FactionWarfareApi~getFwLeaderboardsCharactersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFwLeaderboardsCharactersOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of the top pilots in faction warfare
     * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday  --- Alternate route: `/dev/fw/leaderboards/characters/`  Alternate route: `/legacy/fw/leaderboards/characters/`  Alternate route: `/v1/fw/leaderboards/characters/`  Alternate route: `/v2/fw/leaderboards/characters/`  --- This route expires daily at 11:05
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/FactionWarfareApi~getFwLeaderboardsCharactersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFwLeaderboardsCharactersOk}
     */
    this.getFwLeaderboardsCharacters = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetFwLeaderboardsCharactersOk;

      return this.apiClient.callApi(
        '/fw/leaderboards/characters/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFwLeaderboardsCorporations operation.
     * @callback module:api/FactionWarfareApi~getFwLeaderboardsCorporationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFwLeaderboardsCorporationsOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of the top corporations in faction warfare
     * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday  --- Alternate route: `/dev/fw/leaderboards/corporations/`  Alternate route: `/legacy/fw/leaderboards/corporations/`  Alternate route: `/v1/fw/leaderboards/corporations/`  Alternate route: `/v2/fw/leaderboards/corporations/`  --- This route expires daily at 11:05
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/FactionWarfareApi~getFwLeaderboardsCorporationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFwLeaderboardsCorporationsOk}
     */
    this.getFwLeaderboardsCorporations = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetFwLeaderboardsCorporationsOk;

      return this.apiClient.callApi(
        '/fw/leaderboards/corporations/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFwStats operation.
     * @callback module:api/FactionWarfareApi~getFwStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetFwStats200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * An overview of statistics about factions involved in faction warfare
     * Statistical overviews of factions involved in faction warfare  --- Alternate route: `/dev/fw/stats/`  Alternate route: `/legacy/fw/stats/`  Alternate route: `/v1/fw/stats/`  Alternate route: `/v2/fw/stats/`  --- This route expires daily at 11:05
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/FactionWarfareApi~getFwStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetFwStats200Ok>}
     */
    this.getFwStats = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetFwStats200Ok];

      return this.apiClient.callApi(
        '/fw/stats/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFwSystems operation.
     * @callback module:api/FactionWarfareApi~getFwSystemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetFwSystems200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ownership of faction warfare systems
     * An overview of the current ownership of faction warfare solar systems  --- Alternate route: `/dev/fw/systems/`  Alternate route: `/legacy/fw/systems/`  Alternate route: `/v2/fw/systems/`  Alternate route: `/v3/fw/systems/`  --- This route is cached for up to 1800 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/FactionWarfareApi~getFwSystemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetFwSystems200Ok>}
     */
    this.getFwSystems = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetFwSystems200Ok];

      return this.apiClient.callApi(
        '/fw/systems/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFwWars operation.
     * @callback module:api/FactionWarfareApi~getFwWarsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetFwWars200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Data about which NPC factions are at war
     * Data about which NPC factions are at war  --- Alternate route: `/dev/fw/wars/`  Alternate route: `/legacy/fw/wars/`  Alternate route: `/v1/fw/wars/`  Alternate route: `/v2/fw/wars/`  --- This route expires daily at 11:05
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/FactionWarfareApi~getFwWarsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetFwWars200Ok>}
     */
    this.getFwWars = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetFwWars200Ok];

      return this.apiClient.callApi(
        '/fw/wars/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));