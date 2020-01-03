"use strict";
exports.__esModule = true;
/* global dw empty */
var ObjectSerializer = require("../serializers/ObjectSerializer");
// @ts-ignore
var ClientError = require("../models/ClientError");
// @ts-ignore
var EntityQuery = require("../models/EntityQuery");
// @ts-ignore
var EntityQueryFilter = require("../models/EntityQueryFilter");
// @ts-ignore
var ServerError = require("../models/ServerError");
// @ts-ignore
var WebhookListener = require("../models/WebhookListener");
// @ts-ignore
var WebhookListenerCreate = require("../models/WebhookListenerCreate");
// @ts-ignore
var WebhookListenerUpdate = require("../models/WebhookListenerUpdate");
var WebhookListenerService = /** @class */ (function () {
    function WebhookListenerService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * Deletes the entity with the given id.
    * @summary Delete
    * @param { number } spaceId spaceId
    * @param { number } id id
    * @param {*} [options] Override http request options.
    * @return {  any  }
    */
    WebhookListenerService.prototype._delete = function (spaceId, id, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling _delete.");
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error("Required parameter id was null or undefined when calling _delete.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        for (var optionsHeadersKey in options.headers) {
            if (options.headers.hasOwnProperty(optionsHeadersKey)) {
                localVarHeaderParams[optionsHeadersKey] = options.headers[optionsHeadersKey];
            }
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: "POST",
            queryString: localVarQueryParameters,
            headers: localVarHeaderParams,
            useQuerystring: this._useQuerystring,
            url: this.basePath,
            path: "/webhook-listener/delete",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(id, "number")),
            form: {},
            formData: {}
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        // dw.net.HTTPClient
        var response = this.httpService.callApi(localVarRequestOptions);
        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            var body = response.text;
            try {
                body = JSON.parse(body);
            }
            catch (e) {
                dw.system.Logger.error("wallee > WebhookListenerService > _delete > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
            }
            return body;
        }
        else {
            var error = {
                type: "Unknown",
                date: (new Date()).toUTCString(),
                statusCode: response.statusCode,
                statusMessage: response.statusMessage,
                errorText: response.errorText
            };
            if (response.statusCode && response.statusCode >= 400 && response.statusCode <= 499) {
                error.type = "ClientError";
            }
            else if (response.statusCode && response.statusCode >= 500 && response.statusCode <= 599) {
                error.type = "ServerError";
            }
            throw new Error("wallee > WebhookListenerService > _delete > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param { number } spaceId spaceId
    * @param { EntityQueryFilter } filter filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    * @return {  number  }
    */
    WebhookListenerService.prototype.count = function (spaceId, filter, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling count.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        for (var optionsHeadersKey in options.headers) {
            if (options.headers.hasOwnProperty(optionsHeadersKey)) {
                localVarHeaderParams[optionsHeadersKey] = options.headers[optionsHeadersKey];
            }
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: "POST",
            queryString: localVarQueryParameters,
            headers: localVarHeaderParams,
            useQuerystring: this._useQuerystring,
            url: this.basePath,
            path: "/webhook-listener/count",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(filter, "EntityQueryFilter")),
            form: {},
            formData: {}
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        // dw.net.HTTPClient
        var response = this.httpService.callApi(localVarRequestOptions);
        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            var body = response.text;
            if (ObjectSerializer.primitives.indexOf("number".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "number");
            }
            catch (e) {
                dw.system.Logger.error("wallee > WebhookListenerService > count > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
            }
            return body;
        }
        else {
            var error = {
                type: "Unknown",
                date: (new Date()).toUTCString(),
                statusCode: response.statusCode,
                statusMessage: response.statusMessage,
                errorText: response.errorText
            };
            if (response.statusCode && response.statusCode >= 400 && response.statusCode <= 499) {
                error.type = "ClientError";
            }
            else if (response.statusCode && response.statusCode >= 500 && response.statusCode <= 599) {
                error.type = "ServerError";
            }
            throw new Error("wallee > WebhookListenerService > count > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * Creates the entity with the given properties.
    * @summary Create
    * @param { number } spaceId spaceId
    * @param { WebhookListenerCreate } entity entity The webhook listener object with the properties which should be created.
    * @param {*} [options] Override http request options.
    * @return {  WebhookListener  }
    */
    WebhookListenerService.prototype.create = function (spaceId, entity, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling create.");
        }
        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new Error("Required parameter entity was null or undefined when calling create.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        for (var optionsHeadersKey in options.headers) {
            if (options.headers.hasOwnProperty(optionsHeadersKey)) {
                localVarHeaderParams[optionsHeadersKey] = options.headers[optionsHeadersKey];
            }
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: "POST",
            queryString: localVarQueryParameters,
            headers: localVarHeaderParams,
            useQuerystring: this._useQuerystring,
            url: this.basePath,
            path: "/webhook-listener/create",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(entity, "WebhookListenerCreate")),
            form: {},
            formData: {}
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        // dw.net.HTTPClient
        var response = this.httpService.callApi(localVarRequestOptions);
        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            var body = response.text;
            if (ObjectSerializer.primitives.indexOf("WebhookListener".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "WebhookListener");
            }
            catch (e) {
                dw.system.Logger.error("wallee > WebhookListenerService > create > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
            }
            return body;
        }
        else {
            var error = {
                type: "Unknown",
                date: (new Date()).toUTCString(),
                statusCode: response.statusCode,
                statusMessage: response.statusMessage,
                errorText: response.errorText
            };
            if (response.statusCode && response.statusCode >= 400 && response.statusCode <= 499) {
                error.type = "ClientError";
            }
            else if (response.statusCode && response.statusCode >= 500 && response.statusCode <= 599) {
                error.type = "ServerError";
            }
            throw new Error("wallee > WebhookListenerService > create > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param { number } spaceId spaceId
    * @param { number } id id The id of the webhook listener which should be returned.
    * @param {*} [options] Override http request options.
    * @return {  WebhookListener  }
    */
    WebhookListenerService.prototype.read = function (spaceId, id, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling read.");
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error("Required parameter id was null or undefined when calling read.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (id !== undefined) {
            localVarQueryParameters["id"] = ObjectSerializer.serialize(id, "number");
        }
        for (var optionsHeadersKey in options.headers) {
            if (options.headers.hasOwnProperty(optionsHeadersKey)) {
                localVarHeaderParams[optionsHeadersKey] = options.headers[optionsHeadersKey];
            }
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: "GET",
            queryString: localVarQueryParameters,
            headers: localVarHeaderParams,
            useQuerystring: this._useQuerystring,
            url: this.basePath,
            path: "/webhook-listener/read",
            contentType: "application/json",
            form: {},
            formData: {}
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        // dw.net.HTTPClient
        var response = this.httpService.callApi(localVarRequestOptions);
        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            var body = response.text;
            if (ObjectSerializer.primitives.indexOf("WebhookListener".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "WebhookListener");
            }
            catch (e) {
                dw.system.Logger.error("wallee > WebhookListenerService > read > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
            }
            return body;
        }
        else {
            var error = {
                type: "Unknown",
                date: (new Date()).toUTCString(),
                statusCode: response.statusCode,
                statusMessage: response.statusMessage,
                errorText: response.errorText
            };
            if (response.statusCode && response.statusCode >= 400 && response.statusCode <= 499) {
                error.type = "ClientError";
            }
            else if (response.statusCode && response.statusCode >= 500 && response.statusCode <= 599) {
                error.type = "ServerError";
            }
            throw new Error("wallee > WebhookListenerService > read > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param { number } spaceId spaceId
    * @param { EntityQuery } query query The query restricts the webhook listeners which are returned by the search.
    * @param {*} [options] Override http request options.
    * @return {  Array<WebhookListener>  }
    */
    WebhookListenerService.prototype.search = function (spaceId, query, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling search.");
        }
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error("Required parameter query was null or undefined when calling search.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        for (var optionsHeadersKey in options.headers) {
            if (options.headers.hasOwnProperty(optionsHeadersKey)) {
                localVarHeaderParams[optionsHeadersKey] = options.headers[optionsHeadersKey];
            }
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: "POST",
            queryString: localVarQueryParameters,
            headers: localVarHeaderParams,
            useQuerystring: this._useQuerystring,
            url: this.basePath,
            path: "/webhook-listener/search",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(query, "EntityQuery")),
            form: {},
            formData: {}
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        // dw.net.HTTPClient
        var response = this.httpService.callApi(localVarRequestOptions);
        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            var body = response.text;
            if (ObjectSerializer.primitives.indexOf("Array<WebhookListener>".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Array<WebhookListener>");
            }
            catch (e) {
                dw.system.Logger.error("wallee > WebhookListenerService > search > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
            }
            return body;
        }
        else {
            var error = {
                type: "Unknown",
                date: (new Date()).toUTCString(),
                statusCode: response.statusCode,
                statusMessage: response.statusMessage,
                errorText: response.errorText
            };
            if (response.statusCode && response.statusCode >= 400 && response.statusCode <= 499) {
                error.type = "ClientError";
            }
            else if (response.statusCode && response.statusCode >= 500 && response.statusCode <= 599) {
                error.type = "ServerError";
            }
            throw new Error("wallee > WebhookListenerService > search > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This updates the entity with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the entity.
    * @summary Update
    * @param { number } spaceId spaceId
    * @param { WebhookListenerUpdate } entity entity The webhook listener object with all the properties which should be updated. The id and the version are required properties.
    * @param {*} [options] Override http request options.
    * @return {  WebhookListener  }
    */
    WebhookListenerService.prototype.update = function (spaceId, entity, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling update.");
        }
        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new Error("Required parameter entity was null or undefined when calling update.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        for (var optionsHeadersKey in options.headers) {
            if (options.headers.hasOwnProperty(optionsHeadersKey)) {
                localVarHeaderParams[optionsHeadersKey] = options.headers[optionsHeadersKey];
            }
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: "POST",
            queryString: localVarQueryParameters,
            headers: localVarHeaderParams,
            useQuerystring: this._useQuerystring,
            url: this.basePath,
            path: "/webhook-listener/update",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(entity, "WebhookListenerUpdate")),
            form: {},
            formData: {}
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        // dw.net.HTTPClient
        var response = this.httpService.callApi(localVarRequestOptions);
        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            var body = response.text;
            if (ObjectSerializer.primitives.indexOf("WebhookListener".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "WebhookListener");
            }
            catch (e) {
                dw.system.Logger.error("wallee > WebhookListenerService > update > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
            }
            return body;
        }
        else {
            var error = {
                type: "Unknown",
                date: (new Date()).toUTCString(),
                statusCode: response.statusCode,
                statusMessage: response.statusMessage,
                errorText: response.errorText
            };
            if (response.statusCode && response.statusCode >= 400 && response.statusCode <= 499) {
                error.type = "ClientError";
            }
            else if (response.statusCode && response.statusCode >= 500 && response.statusCode <= 599) {
                error.type = "ServerError";
            }
            throw new Error("wallee > WebhookListenerService > update > " + error.type + " > " + JSON.stringify(error));
        }
    };
    return WebhookListenerService;
}());
exports.WebhookListenerService = WebhookListenerService;
module.exports = WebhookListenerService;
