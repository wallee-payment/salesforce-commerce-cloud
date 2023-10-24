"use strict";

/* global dw empty */
var ObjectSerializer = require("../serializers/ObjectSerializer");
// @ts-ignore
var AuthenticatedCardDataCreate = require("../models/AuthenticatedCardDataCreate");
// @ts-ignore
var ClientError = require("../models/ClientError");
// @ts-ignore
var ServerError = require("../models/ServerError");
// @ts-ignore
var TokenizedCardDataCreate = require("../models/TokenizedCardDataCreate");
// @ts-ignore
var Transaction = require("../models/Transaction");
var CardProcessingService = /** @class */ (function () {
    function CardProcessingService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * The process method will process the transaction with the given card details without using 3-D secure.
    * @summary Process
    * @param { number } spaceId spaceId
    * @param { number } transactionId transactionId The ID of the transaction which should be processed.
    * @param { number } paymentMethodConfigurationId paymentMethodConfigurationId The payment method configuration ID which is applied to the transaction.
    * @param { AuthenticatedCardDataCreate } cardData cardData The card details as JSON in plain which should be used to authorize the payment.
    * @param {*} [options] Override http request options.
    * @return {  Transaction  }
    */
    CardProcessingService.prototype.process = function (spaceId, transactionId, paymentMethodConfigurationId, cardData, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling process.");
        }
        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error("Required parameter transactionId was null or undefined when calling process.");
        }
        // verify required parameter 'paymentMethodConfigurationId' is not null or undefined
        if (paymentMethodConfigurationId === null || paymentMethodConfigurationId === undefined) {
            throw new Error("Required parameter paymentMethodConfigurationId was null or undefined when calling process.");
        }
        // verify required parameter 'cardData' is not null or undefined
        if (cardData === null || cardData === undefined) {
            throw new Error("Required parameter cardData was null or undefined when calling process.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (transactionId !== undefined) {
            localVarQueryParameters["transactionId"] = ObjectSerializer.serialize(transactionId, "number");
        }
        if (paymentMethodConfigurationId !== undefined) {
            localVarQueryParameters["paymentMethodConfigurationId"] = ObjectSerializer.serialize(paymentMethodConfigurationId, "number");
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
            path: "/card-processing/process",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(cardData, "AuthenticatedCardDataCreate")),
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
                dw.system.Logger.error("wallee > CardProcessingService > process > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > CardProcessingService > process > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * The process method will process the transaction with the given card details by eventually using 3-D secure. The buyer has to be redirect to the URL returned by this method.
    * @summary Process With 3-D Secure
    * @param { number } spaceId spaceId
    * @param { number } transactionId transactionId The ID of the transaction which should be processed.
    * @param { number } paymentMethodConfigurationId paymentMethodConfigurationId The payment method configuration ID which is applied to the transaction.
    * @param { TokenizedCardDataCreate } cardData cardData The card details as JSON in plain which should be used to authorize the payment.
    * @param {*} [options] Override http request options.
    * @return {  string  }
    */
    CardProcessingService.prototype.processWith3DSecure = function (spaceId, transactionId, paymentMethodConfigurationId, cardData, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling processWith3DSecure.");
        }
        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error("Required parameter transactionId was null or undefined when calling processWith3DSecure.");
        }
        // verify required parameter 'paymentMethodConfigurationId' is not null or undefined
        if (paymentMethodConfigurationId === null || paymentMethodConfigurationId === undefined) {
            throw new Error("Required parameter paymentMethodConfigurationId was null or undefined when calling processWith3DSecure.");
        }
        // verify required parameter 'cardData' is not null or undefined
        if (cardData === null || cardData === undefined) {
            throw new Error("Required parameter cardData was null or undefined when calling processWith3DSecure.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (transactionId !== undefined) {
            localVarQueryParameters["transactionId"] = ObjectSerializer.serialize(transactionId, "number");
        }
        if (paymentMethodConfigurationId !== undefined) {
            localVarQueryParameters["paymentMethodConfigurationId"] = ObjectSerializer.serialize(paymentMethodConfigurationId, "number");
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
            path: "/card-processing/processWith3DSecure",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(cardData, "TokenizedCardDataCreate")),
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
                dw.system.Logger.error("wallee > CardProcessingService > processWith3DSecure > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > CardProcessingService > processWith3DSecure > " + error.type + " > " + JSON.stringify(error));
        }
    };
    return CardProcessingService;
}());
exports.CardProcessingService = CardProcessingService;
module.exports = CardProcessingService;
