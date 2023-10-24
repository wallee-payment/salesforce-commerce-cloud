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
var InvoiceReconciliationRecordInvoiceLink = require("../models/InvoiceReconciliationRecordInvoiceLink");
// @ts-ignore
var ServerError = require("../models/ServerError");
var InvoiceReconciliationRecordInvoiceLinkService = /** @class */ (function () {
    function InvoiceReconciliationRecordInvoiceLinkService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param { number } spaceId spaceId
    * @param { EntityQueryFilter } filter filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    * @return {  number  }
    */
    InvoiceReconciliationRecordInvoiceLinkService.prototype.count = function (spaceId, filter, options) {
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
            path: "/invoice-reconciliation-record-invoice-link-service/count",
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
                dw.system.Logger.error("wallee > InvoiceReconciliationRecordInvoiceLinkService > count > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > InvoiceReconciliationRecordInvoiceLinkService > count > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * Links the invoice reconciliation record with the provided invoice.
    * @summary Link Invoice
    * @param { number } spaceId spaceId
    * @param { number } recordId recordId The ID of the invoice reconciliation record which should be linked.
    * @param { number } completionId completionId The ID of the completion which should be linked.
    * @param { number } amount amount The amount of the invoice reconciliation record linked completion which should be changed.
    * @param {*} [options] Override http request options.
    * @return {  InvoiceReconciliationRecordInvoiceLink  }
    */
    InvoiceReconciliationRecordInvoiceLinkService.prototype.link = function (spaceId, recordId, completionId, amount, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling link.");
        }
        // verify required parameter 'recordId' is not null or undefined
        if (recordId === null || recordId === undefined) {
            throw new Error("Required parameter recordId was null or undefined when calling link.");
        }
        // verify required parameter 'completionId' is not null or undefined
        if (completionId === null || completionId === undefined) {
            throw new Error("Required parameter completionId was null or undefined when calling link.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (recordId !== undefined) {
            localVarQueryParameters["recordId"] = ObjectSerializer.serialize(recordId, "number");
        }
        if (completionId !== undefined) {
            localVarQueryParameters["completionId"] = ObjectSerializer.serialize(completionId, "number");
        }
        if (amount !== undefined) {
            localVarQueryParameters["amount"] = ObjectSerializer.serialize(amount, "number");
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
            path: "/invoice-reconciliation-record-invoice-link-service/link",
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
            if (ObjectSerializer.primitives.indexOf("InvoiceReconciliationRecordInvoiceLink".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "InvoiceReconciliationRecordInvoiceLink");
            }
            catch (e) {
                dw.system.Logger.error("wallee > InvoiceReconciliationRecordInvoiceLinkService > link > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > InvoiceReconciliationRecordInvoiceLinkService > link > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param { number } spaceId spaceId
    * @param { number } id id The ID of the invoice reconciliation record invoice link which should be returned.
    * @param {*} [options] Override http request options.
    * @return {  InvoiceReconciliationRecordInvoiceLink  }
    */
    InvoiceReconciliationRecordInvoiceLinkService.prototype.read = function (spaceId, id, options) {
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
            path: "/invoice-reconciliation-record-invoice-link-service/read",
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
            if (ObjectSerializer.primitives.indexOf("InvoiceReconciliationRecordInvoiceLink".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "InvoiceReconciliationRecordInvoiceLink");
            }
            catch (e) {
                dw.system.Logger.error("wallee > InvoiceReconciliationRecordInvoiceLinkService > read > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > InvoiceReconciliationRecordInvoiceLinkService > read > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param { number } spaceId spaceId
    * @param { EntityQuery } query query The query restricts the invoice reconciliation record invoice link which are returned by the search.
    * @param {*} [options] Override http request options.
    * @return {  Array<InvoiceReconciliationRecordInvoiceLink>  }
    */
    InvoiceReconciliationRecordInvoiceLinkService.prototype.search = function (spaceId, query, options) {
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
            path: "/invoice-reconciliation-record-invoice-link-service/search",
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
            if (ObjectSerializer.primitives.indexOf("Array<InvoiceReconciliationRecordInvoiceLink>".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Array<InvoiceReconciliationRecordInvoiceLink>");
            }
            catch (e) {
                dw.system.Logger.error("wallee > InvoiceReconciliationRecordInvoiceLinkService > search > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > InvoiceReconciliationRecordInvoiceLinkService > search > " + error.type + " > " + JSON.stringify(error));
        }
    };
    /**
    * Unlinks the invoice reconciliation record from the provided invoice.
    * @summary Unlink Invoice
    * @param { number } spaceId spaceId
    * @param { number } recordId recordId The ID of the invoice reconciliation record which should be unlinked.
    * @param { number } completionId completionId The ID of the completion which should be unlinked.
    * @param {*} [options] Override http request options.
    * @return {  any  }
    */
    InvoiceReconciliationRecordInvoiceLinkService.prototype.unlinkTransaction = function (spaceId, recordId, completionId, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling unlinkTransaction.");
        }
        // verify required parameter 'recordId' is not null or undefined
        if (recordId === null || recordId === undefined) {
            throw new Error("Required parameter recordId was null or undefined when calling unlinkTransaction.");
        }
        // verify required parameter 'completionId' is not null or undefined
        if (completionId === null || completionId === undefined) {
            throw new Error("Required parameter completionId was null or undefined when calling unlinkTransaction.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (recordId !== undefined) {
            localVarQueryParameters["recordId"] = ObjectSerializer.serialize(recordId, "number");
        }
        if (completionId !== undefined) {
            localVarQueryParameters["completionId"] = ObjectSerializer.serialize(completionId, "number");
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
            path: "/invoice-reconciliation-record-invoice-link-service/unlink-transaction",
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
                dw.system.Logger.error("wallee > InvoiceReconciliationRecordInvoiceLinkService > unlinkTransaction > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > InvoiceReconciliationRecordInvoiceLinkService > unlinkTransaction > " + error.type + " > " + JSON.stringify(error));
        }
    };
    return InvoiceReconciliationRecordInvoiceLinkService;
}());
exports.InvoiceReconciliationRecordInvoiceLinkService = InvoiceReconciliationRecordInvoiceLinkService;
module.exports = InvoiceReconciliationRecordInvoiceLinkService;
