"use strict";

/**
 * Mac Auth class
 */
var Auth = /** @class */ (function () {
    /**
     * Constructor
     */
    function Auth() {
        /**
         * Base API path
         */
        this.basePath = "https://app-wallee.com/api";
        this.config = this.getConfigs();
    }
    /**
     * Get configs
     * @return {*} preferences
     */
    Auth.prototype.getConfigs = function () {
        return require("~/cartridge/config/wallee/preferences");
    };
    /**
     *
     * @param {string} method HTTP method name
     * @param {string} resourcePath full URL
     * @param {Object} queryParams query parameters
     * @returns { HeaderAuthType } headers
     */
    Auth.prototype.getHeaders = function (method, resourcePath, queryParams) {
        if (Object.keys(queryParams).length > 0) {
            resourcePath += "?" + Object.keys(queryParams).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(queryParams[key]);
            }).join("&");
        }
        resourcePath = "/api" + resourcePath;
        var timestamp = Math.floor(+new Date / 1000);
        return {
            "x-mac-userid": this.config.userId,
            "x-mac-version": this.config.macVersion,
            "x-mac-timestamp": timestamp,
            "x-mac-value": this.getSignature(method, resourcePath, timestamp),
        };
    };
    /**
     * Get encoded signature
     *
     * @param {string} method HTTP method name
     * @param {string} resourcePath full URL
     * @param {number} timestamp UNIX time
     * @returns {string} x-mac-value
     */
    Auth.prototype.getSignature = function (method, resourcePath, timestamp) {
        var data = [
            this.config.macVersion,
            this.config.userId,
            timestamp,
            method,
            resourcePath,
        ].join("|");
        // @ts-ignore
        var mac = new dw.crypto.Mac(dw.crypto.Mac.HMAC_SHA_512);
        return dw.crypto.Encoding.toBase64(mac.digest(data, dw.crypto.Encoding.fromBase64(this.config.apiSecret)));
    };
    return Auth;
}());
exports.Auth = Auth;
module.exports = Auth;
