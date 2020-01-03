"use strict";
exports.__esModule = true;
/* global dw empty */
var ObjectSerializer = require("../serializers/ObjectSerializer");
// @ts-ignore
var ClientError = require("../models/ClientError");
// @ts-ignore
var RenderedTerminalReceipt = require("../models/RenderedTerminalReceipt");
// @ts-ignore
var ServerError = require("../models/ServerError");
var TransactionTerminalService = /** @class */ (function () {
    function TransactionTerminalService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * Returns the PDF document for the requested terminal receipt with the given page width.
    * @summary getTerminalReceipt
    * @param { number } spaceId spaceId
    * @param { number } transactionId transactionId The ID of the transaction to get the receipt for.
    * @param { number } typeId typeId
    * @param { number } width width
    * @param {*} [options] Override http request options.
    * @return {  RenderedTerminalReceipt  }
    */
    TransactionTerminalService.prototype.receipt = function (spaceId, transactionId, typeId, width, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling receipt.");
        }
        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error("Required parameter transactionId was null or undefined when calling receipt.");
        }
        // verify required parameter 'typeId' is not null or undefined
        if (typeId === null || typeId === undefined) {
            throw new Error("Required parameter typeId was null or undefined when calling receipt.");
        }
        // verify required parameter 'width' is not null or undefined
        if (width === null || width === undefined) {
            throw new Error("Required parameter width was null or undefined when calling receipt.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (transactionId !== undefined) {
            localVarQueryParameters["transactionId"] = ObjectSerializer.serialize(transactionId, "number");
        }
        if (typeId !== undefined) {
            localVarQueryParameters["typeId"] = ObjectSerializer.serialize(typeId, "number");
        }
        if (width !== undefined) {
            localVarQueryParameters["width"] = ObjectSerializer.serialize(width, "number");
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
            path: "/transaction-terminal/receipt",
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
            if (ObjectSerializer.primitives.indexOf("RenderedTerminalReceipt".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "RenderedTerminalReceipt");
            }
            catch (e) {
                dw.system.Logger.error("wallee > TransactionTerminalService > receipt > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > TransactionTerminalService > receipt > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation creates a set of credentials to use within the WebSocket.
    * @summary Create Till Connection Credentials
    * @param { number } spaceId spaceId
    * @param { number } transactionId transactionId The ID of the transaction which is used to process with the terminal.
    * @param { number } terminalId terminalId The ID of the terminal which should be used to process the transaction.
    * @param { string } language language The language in which the messages should be rendered in.
    * @param {*} [options] Override http request options.
    * @return {  string  }
    */
    TransactionTerminalService.prototype.tillConnectionCredentials = function (spaceId, transactionId, terminalId, language, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling tillConnectionCredentials.");
        }
        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error("Required parameter transactionId was null or undefined when calling tillConnectionCredentials.");
        }
        // verify required parameter 'terminalId' is not null or undefined
        if (terminalId === null || terminalId === undefined) {
            throw new Error("Required parameter terminalId was null or undefined when calling tillConnectionCredentials.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (transactionId !== undefined) {
            localVarQueryParameters["transactionId"] = ObjectSerializer.serialize(transactionId, "number");
        }
        if (terminalId !== undefined) {
            localVarQueryParameters["terminalId"] = ObjectSerializer.serialize(terminalId, "number");
        }
        if (language !== undefined) {
            localVarQueryParameters["language"] = ObjectSerializer.serialize(language, "string");
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
            path: "/transaction-terminal/till-connection-credentials",
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
                dw.system.Logger.error("wallee > TransactionTerminalService > tillConnectionCredentials > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > TransactionTerminalService > tillConnectionCredentials > " + error.type + " > " + JSON.stringify(error));
        }
    };
    return TransactionTerminalService;
}());
exports.TransactionTerminalService = TransactionTerminalService;
module.exports = TransactionTerminalService;
