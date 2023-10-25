"use strict";

exports.TransactionTerminalService = void 0;
/* global dw empty */
var ObjectSerializer = require("../serializers/ObjectSerializer");
// @ts-ignore
var ClientError = require("../models/ClientError");
// @ts-ignore
var RenderedTerminalReceipt = require("../models/RenderedTerminalReceipt");
// @ts-ignore
var ServerError = require("../models/ServerError");
// @ts-ignore
var TerminalReceiptFetchRequest = require("../models/TerminalReceiptFetchRequest");
var TransactionTerminalService = /** @class */ (function () {
    function TransactionTerminalService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * Returns all receipts for the requested terminal transaction.
    * @summary Fetch Receipts
    * @param { number } spaceId spaceId
    * @param { TerminalReceiptFetchRequest } request request
    * @param {*} [options] Override http request options.
    * @return {  Array<RenderedTerminalReceipt>  }
    */
    TransactionTerminalService.prototype.fetchReceipts = function (spaceId, request, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling fetchReceipts.");
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error("Required parameter request was null or undefined when calling fetchReceipts.");
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
            path: "/transaction-terminal/fetch-receipts",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(request, "TerminalReceiptFetchRequest")),
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
            if (ObjectSerializer.primitives.indexOf("Array<RenderedTerminalReceipt>".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Array<RenderedTerminalReceipt>");
            }
            catch (e) {
                dw.system.Logger.error("wallee > TransactionTerminalService > fetchReceipts > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > TransactionTerminalService > fetchReceipts > " + error.type + " > " + JSON.stringify(error));
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
