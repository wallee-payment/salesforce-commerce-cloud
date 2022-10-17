"use strict";

/* global dw empty */
var ObjectSerializer = require("../serializers/ObjectSerializer");
// @ts-ignore
var ClientError = require("../models/ClientError");
// @ts-ignore
var ServerError = require("../models/ServerError");
// @ts-ignore
var Transaction = require("../models/Transaction");
var PaymentTerminalTillService = /** @class */ (function () {
    function PaymentTerminalTillService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * Starts a payment terminal transaction and waits for its completion. If the call returns with a long polling timeout status, you may try again. The processing of the transaction will be picked up where it was left off.
    * @summary Perform Payment Terminal Transaction
    * @param { number } spaceId spaceId
    * @param { number } transactionId transactionId The ID of the transaction which is used to process with the terminal.
    * @param { number } terminalId terminalId The ID of the terminal which should be used to process the transaction.
    * @param { string } language language The language in which the messages should be rendered in.
    * @param {*} [options] Override http request options.
    * @return {  Transaction  }
    */
    PaymentTerminalTillService.prototype.performTransaction = function (spaceId, transactionId, terminalId, language, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling performTransaction.");
        }
        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error("Required parameter transactionId was null or undefined when calling performTransaction.");
        }
        // verify required parameter 'terminalId' is not null or undefined
        if (terminalId === null || terminalId === undefined) {
            throw new Error("Required parameter terminalId was null or undefined when calling performTransaction.");
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
            method: "GET",
            queryString: localVarQueryParameters,
            headers: localVarHeaderParams,
            useQuerystring: this._useQuerystring,
            url: this.basePath,
            path: "/payment-terminal-till/perform-transaction",
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
            if (ObjectSerializer.primitives.indexOf("Transaction".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Transaction");
            }
            catch (e) {
                dw.system.Logger.error("wallee > PaymentTerminalTillService > performTransaction > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > PaymentTerminalTillService > performTransaction > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * Starts a payment terminal transaction and waits for its completion. If the call returns with a long polling timeout status, you may try again. The processing of the transaction will be picked up where it was left off.
    * @summary Perform Payment Terminal Transaction (using TID)
    * @param { number } spaceId spaceId
    * @param { number } transactionId transactionId The ID of the transaction which is used to process with the terminal.
    * @param { string } terminalIdentifier terminalIdentifier The identifier (aka TID) of the terminal which should be used to process the transaction.
    * @param { string } language language The language in which the messages should be rendered in.
    * @param {*} [options] Override http request options.
    * @return {  Transaction  }
    */
    PaymentTerminalTillService.prototype.performTransactionByIdentifier = function (spaceId, transactionId, terminalIdentifier, language, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling performTransactionByIdentifier.");
        }
        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error("Required parameter transactionId was null or undefined when calling performTransactionByIdentifier.");
        }
        // verify required parameter 'terminalIdentifier' is not null or undefined
        if (terminalIdentifier === null || terminalIdentifier === undefined) {
            throw new Error("Required parameter terminalIdentifier was null or undefined when calling performTransactionByIdentifier.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (transactionId !== undefined) {
            localVarQueryParameters["transactionId"] = ObjectSerializer.serialize(transactionId, "number");
        }
        if (terminalIdentifier !== undefined) {
            localVarQueryParameters["terminalIdentifier"] = ObjectSerializer.serialize(terminalIdentifier, "string");
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
            method: "GET",
            queryString: localVarQueryParameters,
            headers: localVarHeaderParams,
            useQuerystring: this._useQuerystring,
            url: this.basePath,
            path: "/payment-terminal-till/perform-transaction-by-identifier",
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
            if (ObjectSerializer.primitives.indexOf("Transaction".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Transaction");
            }
            catch (e) {
                dw.system.Logger.error("wallee > PaymentTerminalTillService > performTransactionByIdentifier > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > PaymentTerminalTillService > performTransactionByIdentifier > " + error.type + " > " + JSON.stringify(error));
        }
    };
    return PaymentTerminalTillService;
}());
exports.PaymentTerminalTillService = PaymentTerminalTillService;
module.exports = PaymentTerminalTillService;
