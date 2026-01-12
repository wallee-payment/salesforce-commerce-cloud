"use strict";

exports.RenderedTerminalTransactionSummary = void 0;
var RenderedTerminalTransactionSummary = /** @class */ (function () {
    function RenderedTerminalTransactionSummary() {
    }
    RenderedTerminalTransactionSummary.getAttributeTypeMap = function () {
        return RenderedTerminalTransactionSummary.attributeTypeMap;
    };
    RenderedTerminalTransactionSummary.discriminator = undefined;
    RenderedTerminalTransactionSummary.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string"
        }
    ];
    return RenderedTerminalTransactionSummary;
}());
exports.RenderedTerminalTransactionSummary = RenderedTerminalTransactionSummary;
module.exports = RenderedTerminalTransactionSummary;
