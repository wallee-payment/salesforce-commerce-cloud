"use strict";

exports.TerminalReceiptFetchRequest = void 0;
var TerminalReceiptFetchRequest = /** @class */ (function () {
    function TerminalReceiptFetchRequest() {
    }
    TerminalReceiptFetchRequest.getAttributeTypeMap = function () {
        return TerminalReceiptFetchRequest.attributeTypeMap;
    };
    TerminalReceiptFetchRequest.discriminator = undefined;
    TerminalReceiptFetchRequest.attributeTypeMap = [
        {
            "name": "format",
            "baseName": "format",
            "type": "TerminalReceiptFormat"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        }
    ];
    return TerminalReceiptFetchRequest;
}());
exports.TerminalReceiptFetchRequest = TerminalReceiptFetchRequest;
module.exports = TerminalReceiptFetchRequest;
