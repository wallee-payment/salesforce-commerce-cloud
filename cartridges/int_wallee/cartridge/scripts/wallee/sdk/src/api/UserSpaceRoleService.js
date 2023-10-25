"use strict";

exports.UserSpaceRoleService = void 0;
/* global dw empty */
var ObjectSerializer = require("../serializers/ObjectSerializer");
// @ts-ignore
var ClientError = require("../models/ClientError");
// @ts-ignore
var ServerError = require("../models/ServerError");
// @ts-ignore
var UserSpaceRole = require("../models/UserSpaceRole");
var UserSpaceRoleService = /** @class */ (function () {
    function UserSpaceRoleService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * This operation grants the given role to the user in the given space.
    * @summary Add Role
    * @param { number } userId userId The id of the user to whom the role is assigned.
    * @param { number } spaceId spaceId The space to which the role is mapped.
    * @param { number } roleId roleId The role which is mapped to the user and space.
    * @param {*} [options] Override http request options.
    * @return {  UserSpaceRole  }
    */
    UserSpaceRoleService.prototype.addRole = function (userId, spaceId, roleId, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error("Required parameter userId was null or undefined when calling addRole.");
        }
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling addRole.");
        }
        // verify required parameter 'roleId' is not null or undefined
        if (roleId === null || roleId === undefined) {
            throw new Error("Required parameter roleId was null or undefined when calling addRole.");
        }
        if (userId !== undefined) {
            localVarQueryParameters["userId"] = ObjectSerializer.serialize(userId, "number");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (roleId !== undefined) {
            localVarQueryParameters["roleId"] = ObjectSerializer.serialize(roleId, "number");
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
            path: "/user-space-role/addRole",
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
            if (ObjectSerializer.primitives.indexOf("UserSpaceRole".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "UserSpaceRole");
            }
            catch (e) {
                dw.system.Logger.error("wallee > UserSpaceRoleService > addRole > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > UserSpaceRoleService > addRole > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * List all the roles that are assigned to the given user in the given space.
    * @summary List Roles
    * @param { number } userId userId The id of the user to whom the role is assigned.
    * @param { number } spaceId spaceId The space to which the role is mapped.
    * @param {*} [options] Override http request options.
    * @return {  Array<UserSpaceRole>  }
    */
    UserSpaceRoleService.prototype.list = function (userId, spaceId, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error("Required parameter userId was null or undefined when calling list.");
        }
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling list.");
        }
        if (userId !== undefined) {
            localVarQueryParameters["userId"] = ObjectSerializer.serialize(userId, "number");
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
            path: "/user-space-role/list",
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
            if (ObjectSerializer.primitives.indexOf("Array<UserSpaceRole>".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Array<UserSpaceRole>");
            }
            catch (e) {
                dw.system.Logger.error("wallee > UserSpaceRoleService > list > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > UserSpaceRoleService > list > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation removes the specified user space role.
    * @summary Remove Role
    * @param { number } id id The id of user space role which should be removed
    * @param {*} [options] Override http request options.
    * @return {  any  }
    */
    UserSpaceRoleService.prototype.removeRole = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error("Required parameter id was null or undefined when calling removeRole.");
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
            method: "POST",
            queryString: localVarQueryParameters,
            headers: localVarHeaderParams,
            useQuerystring: this._useQuerystring,
            url: this.basePath,
            path: "/user-space-role/removeRole",
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
            try {
                body = JSON.parse(body);
            }
            catch (e) {
                dw.system.Logger.error("wallee > UserSpaceRoleService > removeRole > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > UserSpaceRoleService > removeRole > " + error.type + " > " + JSON.stringify(error));
        }
    };
    return UserSpaceRoleService;
}());
exports.UserSpaceRoleService = UserSpaceRoleService;
module.exports = UserSpaceRoleService;
