"use strict";
exports.__esModule = true;
/* global dw empty */
var ObjectSerializer = require("../serializers/ObjectSerializer");
// @ts-ignore
var ClientError = require("../models/ClientError");
// @ts-ignore
var MetricUsage = require("../models/MetricUsage");
// @ts-ignore
var ServerError = require("../models/ServerError");
var MerticUsageService = /** @class */ (function () {
    function MerticUsageService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * Calculates the consumed resources for the given space and time range.
    * @summary Calculate
    * @param { number } spaceId spaceId
    * @param { Date } start start The start date from which on the consumed units should be returned from.
    * @param { Date } end end The end date to which the consumed units should be returned to. The end date is not included in the result.
    * @param {*} [options] Override http request options.
    * @return {  Array<MetricUsage>  }
    */
    MerticUsageService.prototype.calculate = function (spaceId, start, end, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling calculate.");
        }
        // verify required parameter 'start' is not null or undefined
        if (start === null || start === undefined) {
            throw new Error("Required parameter start was null or undefined when calling calculate.");
        }
        // verify required parameter 'end' is not null or undefined
        if (end === null || end === undefined) {
            throw new Error("Required parameter end was null or undefined when calling calculate.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (start !== undefined) {
            localVarQueryParameters["start"] = ObjectSerializer.serialize(start, "Date");
        }
        if (end !== undefined) {
            localVarQueryParameters["end"] = ObjectSerializer.serialize(end, "Date");
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
            path: "/mertic-usage/calculate",
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
            if (ObjectSerializer.primitives.indexOf("Array<MetricUsage>".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Array<MetricUsage>");
            }
            catch (e) {
                dw.system.Logger.error("wallee > MerticUsageService > calculate > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > MerticUsageService > calculate > " + error.type + " > " + JSON.stringify(error));
        }
    };
    return MerticUsageService;
}());
exports.MerticUsageService = MerticUsageService;
module.exports = MerticUsageService;
