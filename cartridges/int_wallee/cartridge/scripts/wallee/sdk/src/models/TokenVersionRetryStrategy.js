"use strict";

exports.TokenVersionRetryStrategy = void 0;
var TokenVersionRetryStrategy;
(function (TokenVersionRetryStrategy) {
    TokenVersionRetryStrategy["NO_RETRY"] = "NO_RETRY";
    TokenVersionRetryStrategy["RETRY_LATER"] = "RETRY_LATER";
    TokenVersionRetryStrategy["REFRESH_TOKEN"] = "REFRESH_TOKEN";
})(TokenVersionRetryStrategy = exports.TokenVersionRetryStrategy || (exports.TokenVersionRetryStrategy = {}));
module.exports = TokenVersionRetryStrategy;
