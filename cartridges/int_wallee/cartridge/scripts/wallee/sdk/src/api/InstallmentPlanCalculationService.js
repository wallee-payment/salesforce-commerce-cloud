"use strict";

exports.InstallmentPlanCalculationService = void 0;
/* global dw empty */
var ObjectSerializer = require("../serializers/ObjectSerializer");
// @ts-ignore
var ClientError = require("../models/ClientError");
// @ts-ignore
var InstallmentCalculatedPlan = require("../models/InstallmentCalculatedPlan");
// @ts-ignore
var ServerError = require("../models/ServerError");
var InstallmentPlanCalculationService = /** @class */ (function () {
    function InstallmentPlanCalculationService(httpService) {
        this.basePath = "https://app-wallee.com:443/api";
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.httpService = {};
        this.httpService = httpService;
    }
    /**
    * This operation allows to calculate all plans for the given transaction. The transaction will not be changed in any way.
    * @summary Calculate Plans
    * @param { number } spaceId spaceId
    * @param { number } transactionId transactionId The transaction for which the plans should be calculated for.
    * @param {*} [options] Override http request options.
    * @return {  Array<InstallmentCalculatedPlan>  }
    */
    InstallmentPlanCalculationService.prototype.calculatePlans = function (spaceId, transactionId, options) {
        if (options === void 0) { options = {}; }
        var localVarQueryParameters = {};
        var localVarHeaderParams = {};
        var localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error("Required parameter spaceId was null or undefined when calling calculatePlans.");
        }
        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error("Required parameter transactionId was null or undefined when calling calculatePlans.");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters["spaceId"] = ObjectSerializer.serialize(spaceId, "number");
        }
        if (transactionId !== undefined) {
            localVarQueryParameters["transactionId"] = ObjectSerializer.serialize(transactionId, "number");
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
            path: "/installment-plan-calculation/calculatePlans",
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
            if (ObjectSerializer.primitives.indexOf("Array<InstallmentCalculatedPlan>".toLowerCase()) !== -1) {
                return body;
            }
            try {
                body = JSON.parse(body);
                body = ObjectSerializer.deserialize(body, "Array<InstallmentCalculatedPlan>");
            }
            catch (e) {
                dw.system.Logger.error("wallee > InstallmentPlanCalculationService > calculatePlans > unable to parse JSON > " + JSON.stringify({ message: e.message, fileName: e.fileName, lineNumber: e.lineNumber }));
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
            throw new Error("wallee > InstallmentPlanCalculationService > calculatePlans > " + error.type + " > " + JSON.stringify(error));
        }
    };
    return InstallmentPlanCalculationService;
}());
exports.InstallmentPlanCalculationService = InstallmentPlanCalculationService;
module.exports = InstallmentPlanCalculationService;
