"use strict";

/* global dw empty */
var ObjectSerializer = require("../serializers/ObjectSerializer");
// @ts-ignore
var ChargeAttempt = require("../models/ChargeAttempt");
// @ts-ignore
var ClientError = require("../models/ClientError");
// @ts-ignore
var PaymentAppChargeAttemptUpdateRequest = require("../models/PaymentAppChargeAttemptUpdateRequest");
// @ts-ignore
var PaymentAppCompletionUpdateRequest = require("../models/PaymentAppCompletionUpdateRequest");
// @ts-ignore
var PaymentAppConnector = require("../models/PaymentAppConnector");
// @ts-ignore
var PaymentAppConnectorCreationRequest = require("../models/PaymentAppConnectorCreationRequest");
// @ts-ignore
var PaymentAppProcessor = require("../models/PaymentAppProcessor");
// @ts-ignore
var PaymentAppProcessorCreationRequest = require("../models/PaymentAppProcessorCreationRequest");
// @ts-ignore
var PaymentAppRefundUpdateRequest = require("../models/PaymentAppRefundUpdateRequest");
// @ts-ignore
var PaymentAppVoidUpdateRequest = require("../models/PaymentAppVoidUpdateRequest");
// @ts-ignore
var Refund = require("../models/Refund");
// @ts-ignore
var ServerError = require("../models/ServerError");
// @ts-ignore
var TransactionCompletion = require("../models/TransactionCompletion");
// @ts-ignore
var TransactionVoid = require("../models/TransactionVoid");
var PaymentWebAppService = /** @class */ (function () {
    function PaymentWebAppService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * This operation marks the processor to be usable within the production environment.
    * @summary Activate Processor for Production
    * @param { number } spaceId spaceId The space ID identifies the space in which the processor is installed in.
    * @param { string } externalId externalId The external ID identifies the processor. The external ID corresponds to the ID provided during inserting of the processor.
    * @param {*} [options] Override http request options.
    * @return {  PaymentAppProcessor  }
    */
    PaymentWebAppService.prototype.activateProcessorForProduction = function (spaceId, externalId, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling activateProcessorForProduction.");
        }
        // verify required parameter 'externalId' is not null or undefined
        if (externalId === null || externalId === undefined) {
            throw new Error("Required parameter externalId was null or undefined when calling activateProcessorForProduction.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (externalId !== undefined) {
            localVarQueryParameters["externalId"] = ObjectSerializer.serialize(externalId, "string");
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
            path: "/payment-web-app/activate-processor-for-production",
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
            if (ObjectSerializer.primitives.indexOf("PaymentAppProcessor".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "PaymentAppProcessor");
            }
            catch (e) {
                dw.system.Logger.error("wallee > PaymentWebAppService > activateProcessorForProduction > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > PaymentWebAppService > activateProcessorForProduction > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation removes the web app payment connector from the given space.
    * @summary Delete Connector
    * @param { number } spaceId spaceId The space ID identifies the space in which the connector is installed in.
    * @param { string } externalId externalId The external ID identifies the connector. The external ID corresponds to the ID provided during inserting of the connector.
    * @param {*} [options] Override http request options.
    * @return {  any  }
    */
    PaymentWebAppService.prototype.deleteConnector = function (spaceId, externalId, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling deleteConnector.");
        }
        // verify required parameter 'externalId' is not null or undefined
        if (externalId === null || externalId === undefined) {
            throw new Error("Required parameter externalId was null or undefined when calling deleteConnector.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (externalId !== undefined) {
            localVarQueryParameters["externalId"] = ObjectSerializer.serialize(externalId, "string");
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
            path: "/payment-web-app/delete-connector",
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
                dw.system.Logger.error("wallee > PaymentWebAppService > deleteConnector > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > PaymentWebAppService > deleteConnector > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation removes the web app payment processor and its connectors from the given space.
    * @summary Delete Processor
    * @param { number } spaceId spaceId The space ID identifies the space in which the processor is installed in.
    * @param { string } externalId externalId The external ID identifies the processor. The external ID corresponds to the ID provided during inserting of the processor.
    * @param {*} [options] Override http request options.
    * @return {  any  }
    */
    PaymentWebAppService.prototype.deleteProcessor = function (spaceId, externalId, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling deleteProcessor.");
        }
        // verify required parameter 'externalId' is not null or undefined
        if (externalId === null || externalId === undefined) {
            throw new Error("Required parameter externalId was null or undefined when calling deleteProcessor.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (externalId !== undefined) {
            localVarQueryParameters["externalId"] = ObjectSerializer.serialize(externalId, "string");
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
            path: "/payment-web-app/delete-processor",
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
                dw.system.Logger.error("wallee > PaymentWebAppService > deleteProcessor > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > PaymentWebAppService > deleteProcessor > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation inserts or updates a web app payment connector.
    * @summary Insert or Update Connector
    * @param { number } spaceId spaceId The space ID identifies the space into which the connector should be inserted into.
    * @param { PaymentAppConnectorCreationRequest } request request The connector object contains all the details required to create or update a web app connector.
    * @param {*} [options] Override http request options.
    * @return {  PaymentAppConnector  }
    */
    PaymentWebAppService.prototype.insertOrUpdateConnector = function (spaceId, request, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling insertOrUpdateConnector.");
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error("Required parameter request was null or undefined when calling insertOrUpdateConnector.");
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
            path: "/payment-web-app/insert-or-update-connector",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(request, "PaymentAppConnectorCreationRequest")),
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
            if (ObjectSerializer.primitives.indexOf("PaymentAppConnector".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "PaymentAppConnector");
            }
            catch (e) {
                dw.system.Logger.error("wallee > PaymentWebAppService > insertOrUpdateConnector > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > PaymentWebAppService > insertOrUpdateConnector > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation inserts or updates a web app payment processor.
    * @summary Insert or Update Processor
    * @param { number } spaceId spaceId The space ID identifies the space into which the processor should be inserted into.
    * @param { PaymentAppProcessorCreationRequest } request request The processor object contains all the details required to create or update a web app processor.
    * @param {*} [options] Override http request options.
    * @return {  PaymentAppProcessor  }
    */
    PaymentWebAppService.prototype.insertOrUpdateProcessor = function (spaceId, request, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling insertOrUpdateProcessor.");
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error("Required parameter request was null or undefined when calling insertOrUpdateProcessor.");
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
            path: "/payment-web-app/insert-or-update-processor",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(request, "PaymentAppProcessorCreationRequest")),
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
            if (ObjectSerializer.primitives.indexOf("PaymentAppProcessor".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "PaymentAppProcessor");
            }
            catch (e) {
                dw.system.Logger.error("wallee > PaymentWebAppService > insertOrUpdateProcessor > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > PaymentWebAppService > insertOrUpdateProcessor > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation updates the state of the charge attempt. This method can be invoked for transactions originally created with a processor associated with the web app that invokes this operation. The returned charge attempt corresponds to the charge attempt indicated in the request.
    * @summary Update Charge Attempt
    * @param { number } spaceId spaceId This is the ID of the space in which the charge attempt is located in.
    * @param { PaymentAppChargeAttemptUpdateRequest } request request The charge attempt update request allows to update the state of a charge attempt.
    * @param {*} [options] Override http request options.
    * @return {  ChargeAttempt  }
    */
    PaymentWebAppService.prototype.updateChargeAttempt = function (spaceId, request, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling updateChargeAttempt.");
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error("Required parameter request was null or undefined when calling updateChargeAttempt.");
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
            path: "/payment-web-app/update-charge-attempt",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(request, "PaymentAppChargeAttemptUpdateRequest")),
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
            if (ObjectSerializer.primitives.indexOf("ChargeAttempt".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "ChargeAttempt");
            }
            catch (e) {
                dw.system.Logger.error("wallee > PaymentWebAppService > updateChargeAttempt > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > PaymentWebAppService > updateChargeAttempt > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation updates the state of the transaction completion. This method can be invoked for transactions originally created with a processor associated with the web app that invokes this operation. The returned completion corresponds to the completion indicated in the request.
    * @summary Update Completion
    * @param { number } spaceId spaceId This is the ID of the space in which the completion is located in.
    * @param { PaymentAppCompletionUpdateRequest } request request The completion update request allows to update the state of a completion.
    * @param {*} [options] Override http request options.
    * @return {  TransactionCompletion  }
    */
    PaymentWebAppService.prototype.updateCompletion = function (spaceId, request, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling updateCompletion.");
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error("Required parameter request was null or undefined when calling updateCompletion.");
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
            path: "/payment-web-app/update-completion",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(request, "PaymentAppCompletionUpdateRequest")),
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
            if (ObjectSerializer.primitives.indexOf("TransactionCompletion".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "TransactionCompletion");
            }
            catch (e) {
                dw.system.Logger.error("wallee > PaymentWebAppService > updateCompletion > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > PaymentWebAppService > updateCompletion > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation updates the state of the refund. This method can be invoked for transactions originally created with a processor associated with the web app that invokes this operation. The returned refund corresponds to the refund indicated in the request.
    * @summary Update Refund
    * @param { number } spaceId spaceId This is the ID of the space in which the refund is located in.
    * @param { PaymentAppRefundUpdateRequest } request request The refund update request allows to update the state of a refund.
    * @param {*} [options] Override http request options.
    * @return {  Refund  }
    */
    PaymentWebAppService.prototype.updateRefund = function (spaceId, request, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling updateRefund.");
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error("Required parameter request was null or undefined when calling updateRefund.");
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
            path: "/payment-web-app/update-refund",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(request, "PaymentAppRefundUpdateRequest")),
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
            if (ObjectSerializer.primitives.indexOf("Refund".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Refund");
            }
            catch (e) {
                dw.system.Logger.error("wallee > PaymentWebAppService > updateRefund > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > PaymentWebAppService > updateRefund > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation updates the state of the transaction void. This method can be invoked for transactions originally created with a processor associated with the web app that invokes this operation. The returned void corresponds to the void indicated in the request.
    * @summary Update Void
    * @param { number } spaceId spaceId This is the ID of the space in which the void is located in.
    * @param { PaymentAppVoidUpdateRequest } request request The void update request allows to update the state of a void.
    * @param {*} [options] Override http request options.
    * @return {  TransactionVoid  }
    */
    PaymentWebAppService.prototype.updateVoid = function (spaceId, request, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling updateVoid.");
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error("Required parameter request was null or undefined when calling updateVoid.");
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
            path: "/payment-web-app/update-void",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(request, "PaymentAppVoidUpdateRequest")),
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
            if (ObjectSerializer.primitives.indexOf("TransactionVoid".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "TransactionVoid");
            }
            catch (e) {
                dw.system.Logger.error("wallee > PaymentWebAppService > updateVoid > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > PaymentWebAppService > updateVoid > " + error.type + " > " + JSON.stringify(error));
        }
    };
    return PaymentWebAppService;
}());
exports.PaymentWebAppService = PaymentWebAppService;
module.exports = PaymentWebAppService;
