"use strict";
/* global dw empty session */

var Wallee = require("~/cartridge/scripts/wallee/sdk/index");
/**
 * Transaction Helper
 */
var Refund = /** @class */ (function () {
    /**
     * Constructor
     * @param { dw.order.Basket | dw.order.LineItemCtnr } currentBasket
     */
    function Refund(currentBasket) {
        this.UtilityHelper = new (require("~/cartridge/scripts/wallee/helpers/Utility"));
        this.spaceId = this.UtilityHelper.getConfigs().spaceId;
        this.ApiClient = new (require("~/cartridge/scripts/wallee/helpers/ApiClient"));
        this.PaymentMethodConfigurationService = new Wallee.api.PaymentMethodConfigurationService(this.ApiClient);
        this.TransactionIframeService = new Wallee.api.TransactionIframeService(this.ApiClient);
        this.TransactionService = new Wallee.api.TransactionService(this.ApiClient);
        this.RefundService = new Wallee.api.RefundService(this.ApiClient);
        this.currentBasket = currentBasket;
    }
    /**
     * Get Wallee.model.Refund by id
     *
     * @param { number } spaceId
     * @param { number } refundId
     * @return { Wallee.model.Refund }
     */
    Refund.prototype.getRefundById = function (spaceId, refundId) {
        return this.RefundService.read(spaceId, refundId);
    };
    return Refund;
}());
exports.Refund = Refund;
module.exports = Refund;
