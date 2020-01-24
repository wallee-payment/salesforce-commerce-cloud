"use strict";

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
var Subscription = require("../models/Subscription");
// @ts-ignore
var SubscriptionChangeRequest = require("../models/SubscriptionChangeRequest");
// @ts-ignore
var SubscriptionCharge = require("../models/SubscriptionCharge");
// @ts-ignore
var SubscriptionCreateRequest = require("../models/SubscriptionCreateRequest");
// @ts-ignore
var SubscriptionVersion = require("../models/SubscriptionVersion");
// @ts-ignore
var TransactionInvoice = require("../models/TransactionInvoice");
var SubscriptionService = /** @class */ (function () {
    function SubscriptionService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * This operation allows to apply changes on a subscription.
    * @summary apply changes
    * @param { number } spaceId spaceId
    * @param { SubscriptionChangeRequest } request request
    * @param {*} [options] Override http request options.
    * @return {  SubscriptionVersion  }
    */
    SubscriptionService.prototype.applyChanges = function (spaceId, request, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling applyChanges.");
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error("Required parameter request was null or undefined when calling applyChanges.");
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
            path: "/subscription/applyChanges",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(request, "SubscriptionChangeRequest")),
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
            if (ObjectSerializer.primitives.indexOf("SubscriptionVersion".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "SubscriptionVersion");
            }
            catch (e) {
                dw.system.Logger.error("wallee > SubscriptionService > applyChanges > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > SubscriptionService > applyChanges > " + error.type + " > " + JSON.stringify(error));
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
    SubscriptionService.prototype.count = function (spaceId, filter, options) {
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
            path: "/subscription/count",
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
                dw.system.Logger.error("wallee > SubscriptionService > count > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > SubscriptionService > count > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * The create operation creates a new subscription and a corresponding subscription version.
    * @summary Create
    * @param { number } spaceId spaceId
    * @param { SubscriptionCreateRequest } createRequest createRequest
    * @param {*} [options] Override http request options.
    * @return {  SubscriptionVersion  }
    */
    SubscriptionService.prototype.create = function (spaceId, createRequest, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling create.");
        }
        // verify required parameter 'createRequest' is not null or undefined
        if (createRequest === null || createRequest === undefined) {
            throw new Error("Required parameter createRequest was null or undefined when calling create.");
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
            path: "/subscription/create",
            contentType: "application/json",
            body: JSON.stringify(ObjectSerializer.serialize(createRequest, "SubscriptionCreateRequest")),
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
            if (ObjectSerializer.primitives.indexOf("SubscriptionVersion".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "SubscriptionVersion");
            }
            catch (e) {
                dw.system.Logger.error("wallee > SubscriptionService > create > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > SubscriptionService > create > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * The initialize operation initializes a subscription. This method uses charge flows to carry out the transaction.
    * @summary initialize
    * @param { number } spaceId spaceId
    * @param { number } subscriptionId subscriptionId The provided subscription id will be used to lookup the subscription which should be initialized.
    * @param {*} [options] Override http request options.
    * @return {  SubscriptionCharge  }
    */
    SubscriptionService.prototype.initialize = function (spaceId, subscriptionId, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling initialize.");
        }
        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error("Required parameter subscriptionId was null or undefined when calling initialize.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (subscriptionId !== undefined) {
            localVarQueryParameters["subscriptionId"] = ObjectSerializer.serialize(subscriptionId, "number");
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
            path: "/subscription/initialize",
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
            if (ObjectSerializer.primitives.indexOf("SubscriptionCharge".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "SubscriptionCharge");
            }
            catch (e) {
                dw.system.Logger.error("wallee > SubscriptionService > initialize > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > SubscriptionService > initialize > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * The initialize operation initializes a subscription when the subscriber is present. The method will initialize a transaction which has to be completed by using the transaction service.
    * @summary initializeSubscriberPresent
    * @param { number } spaceId spaceId
    * @param { number } subscriptionId subscriptionId
    * @param { string } successUrl successUrl The subscriber will be redirected to the success URL when the transaction is successful.
    * @param { string } failedUrl failedUrl The subscriber will be redirected to the fail URL when the transaction fails.
    * @param {*} [options] Override http request options.
    * @return {  SubscriptionCharge  }
    */
    SubscriptionService.prototype.initializeSubscriberPresent = function (spaceId, subscriptionId, successUrl, failedUrl, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling initializeSubscriberPresent.");
        }
        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error("Required parameter subscriptionId was null or undefined when calling initializeSubscriberPresent.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (subscriptionId !== undefined) {
            localVarQueryParameters["subscriptionId"] = ObjectSerializer.serialize(subscriptionId, "number");
        }
        if (successUrl !== undefined) {
            localVarQueryParameters["successUrl"] = ObjectSerializer.serialize(successUrl, "string");
        }
        if (failedUrl !== undefined) {
            localVarQueryParameters["failedUrl"] = ObjectSerializer.serialize(failedUrl, "string");
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
            path: "/subscription/initializeSubscriberPresent",
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
            if (ObjectSerializer.primitives.indexOf("SubscriptionCharge".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "SubscriptionCharge");
            }
            catch (e) {
                dw.system.Logger.error("wallee > SubscriptionService > initializeSubscriberPresent > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > SubscriptionService > initializeSubscriberPresent > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param { number } spaceId spaceId
    * @param { number } id id The id of the subscription which should be returned.
    * @param {*} [options] Override http request options.
    * @return {  Subscription  }
    */
    SubscriptionService.prototype.read = function (spaceId, id, options) {
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
            path: "/subscription/read",
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
            if (ObjectSerializer.primitives.indexOf("Subscription".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Subscription");
            }
            catch (e) {
                dw.system.Logger.error("wallee > SubscriptionService > read > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > SubscriptionService > read > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param { number } spaceId spaceId
    * @param { EntityQuery } query query The query restricts the subscriptions which are returned by the search.
    * @param {*} [options] Override http request options.
    * @return {  Array<Subscription>  }
    */
    SubscriptionService.prototype.search = function (spaceId, query, options) {
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
            path: "/subscription/search",
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
            if (ObjectSerializer.primitives.indexOf("Array<Subscription>".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Array<Subscription>");
            }
            catch (e) {
                dw.system.Logger.error("wallee > SubscriptionService > search > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > SubscriptionService > search > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation allows to search for subscription invoices.
    * @summary Search Subscription Invoices
    * @param { number } spaceId spaceId
    * @param { number } subscriptionId subscriptionId The id of the subscription for which the invoices should be searched for.
    * @param { EntityQuery } query query The query restricts the invoices which are returned by the search.
    * @param {*} [options] Override http request options.
    * @return {  Array<TransactionInvoice>  }
    */
    SubscriptionService.prototype.searchSubscriptionInvoices = function (spaceId, subscriptionId, query, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling searchSubscriptionInvoices.");
        }
        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error("Required parameter subscriptionId was null or undefined when calling searchSubscriptionInvoices.");
        }
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error("Required parameter query was null or undefined when calling searchSubscriptionInvoices.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (subscriptionId !== undefined) {
            localVarQueryParameters["subscriptionId"] = ObjectSerializer.serialize(subscriptionId, "number");
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
            path: "/subscription/searchSubscriptionInvoices",
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
            if (ObjectSerializer.primitives.indexOf("Array<TransactionInvoice>".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Array<TransactionInvoice>");
            }
            catch (e) {
                dw.system.Logger.error("wallee > SubscriptionService > searchSubscriptionInvoices > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > SubscriptionService > searchSubscriptionInvoices > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * This operation allows to terminate a subscription.
    * @summary terminate
    * @param { number } spaceId spaceId
    * @param { number } subscriptionId subscriptionId The subscription id identifies the subscription which should be terminated.
    * @param { boolean } respectTerminationPeriod respectTerminationPeriod The respect termination period controls whether the termination period configured on the product version should be respected or if the operation should take effect immediately.
    * @param {*} [options] Override http request options.
    * @return {  any  }
    */
    SubscriptionService.prototype.terminate = function (spaceId, subscriptionId, respectTerminationPeriod, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling terminate.");
        }
        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error("Required parameter subscriptionId was null or undefined when calling terminate.");
        }
        // verify required parameter 'respectTerminationPeriod' is not null or undefined
        if (respectTerminationPeriod === null || respectTerminationPeriod === undefined) {
            throw new Error("Required parameter respectTerminationPeriod was null or undefined when calling terminate.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (subscriptionId !== undefined) {
            localVarQueryParameters["subscriptionId"] = ObjectSerializer.serialize(subscriptionId, "number");
        }
        if (respectTerminationPeriod !== undefined) {
            localVarQueryParameters["respectTerminationPeriod"] = ObjectSerializer.serialize(respectTerminationPeriod, "boolean");
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
            path: "/subscription/terminate",
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
                dw.system.Logger.error("wallee > SubscriptionService > terminate > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > SubscriptionService > terminate > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * The update product version operation updates the product version of the subscription to the latest active product version.
    * @summary update product version
    * @param { number } spaceId spaceId
    * @param { number } subscriptionId subscriptionId The subscription id identifies the subscription which should be updated to the latest version.
    * @param { boolean } respectTerminationPeriod respectTerminationPeriod The subscription version may be retired. The respect termination period controls whether the termination period configured on the product version should be respected or if the operation should take effect immediately.
    * @param {*} [options] Override http request options.
    * @return {  SubscriptionVersion  }
    */
    SubscriptionService.prototype.updateProductVersion = function (spaceId, subscriptionId, respectTerminationPeriod, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling updateProductVersion.");
        }
        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error("Required parameter subscriptionId was null or undefined when calling updateProductVersion.");
        }
        // verify required parameter 'respectTerminationPeriod' is not null or undefined
        if (respectTerminationPeriod === null || respectTerminationPeriod === undefined) {
            throw new Error("Required parameter respectTerminationPeriod was null or undefined when calling updateProductVersion.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (subscriptionId !== undefined) {
            localVarQueryParameters["subscriptionId"] = ObjectSerializer.serialize(subscriptionId, "number");
        }
        if (respectTerminationPeriod !== undefined) {
            localVarQueryParameters["respectTerminationPeriod"] = ObjectSerializer.serialize(respectTerminationPeriod, "boolean");
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
            path: "/subscription/updateProductVersion",
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
            if (ObjectSerializer.primitives.indexOf("SubscriptionVersion".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "SubscriptionVersion");
            }
            catch (e) {
                dw.system.Logger.error("wallee > SubscriptionService > updateProductVersion > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > SubscriptionService > updateProductVersion > " + error.type + " > " + JSON.stringify(error));
        }
    };
    return SubscriptionService;
}());
exports.SubscriptionService = SubscriptionService;
module.exports = SubscriptionService;
