"use strict";

exports.TransactionLightboxService = void 0;
/* global dw empty */
var ObjectSerializer = require("../serializers/ObjectSerializer");
// @ts-ignore
var ClientError = require("../models/ClientError");
// @ts-ignore
var ServerError = require("../models/ServerError");
var TransactionLightboxService = /** @class */ (function () {
    function TransactionLightboxService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * This operation creates the URL which can be used to embed the JavaScript for handling the Lightbox checkout flow.
    * @summary Build JavaScript URL
    * @param { number } spaceId spaceId
    * @param { number } id id The id of the transaction which should be returned.
    * @param {*} [options] Override http request options.
    * @return {  string  }
    */
    TransactionLightboxService.prototype.javascriptUrl = function (spaceId, id, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling javascriptUrl.");
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error("Required parameter id was null or undefined when calling javascriptUrl.");
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
            path: "/transaction-lightbox/javascript-url",
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
            if (ObjectSerializer.primitives.indexOf("string".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "string");
            }
            catch (e) {
                dw.system.Logger.error("wallee > TransactionLightboxService > javascriptUrl > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > TransactionLightboxService > javascriptUrl > " + error.type + " > " + JSON.stringify(error));
        }
    };
    return TransactionLightboxService;
}());
exports.TransactionLightboxService = TransactionLightboxService;
module.exports = TransactionLightboxService;
