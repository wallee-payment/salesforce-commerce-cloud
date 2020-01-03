"use strict";
/* global dw empty session */

var Wallee = require("~/cartridge/scripts/wallee/sdk/index");
/**
 * WebHook class
 */
var WebHook = /** @class */ (function () {
    /**
     * Constructor
     */
    function WebHook() {
        /**
         * WebHook configs
         */
        this.WebHookEntity = {
            /**
             * Transaction WebHook Entity Id
             * @link https://app-wallee.com/doc/api/webhook-entity/view/1472041829003
             */
            Transaction: {
                id: 1472041829003,
                name: "SalesForce::WebHook::Transaction",
                url: dw.web.URLUtils.abs("Wallee-WebHookTransaction").toString()
            },
            /**
             * Transaction WebHook Entity Id
             * @link https://app-wallee.com/doc/api/webhook-entity/view/1472041829003
             */
            Refund: {
                id: 1472041839405,
                name: "SalesForce::WebHook::Refund",
                url: dw.web.URLUtils.abs("Wallee-WebHookRefund").toString()
            }
        };
        this.UtilityHelper = new (require("~/cartridge/scripts/wallee/helpers/Utility"));
        this.spaceId = this.UtilityHelper.getConfigs().spaceId;
        this.ApiClient = new (require("~/cartridge/scripts/wallee/helpers/ApiClient"));
        this.WebHookListenerService = new Wallee.api.WebhookListenerService(this.ApiClient);
        this.WebHookUrlService = new Wallee.api.WebhookUrlService(this.ApiClient);
    }
    /**
     * Create WebHook URL
     *
     * @param { { id: number, name: string, url: string } } WebHookConfig
     * @return { Wallee.model.WebhookUrl }
     */
    WebHook.prototype.getUrl = function (WebHookConfig) {
        var webHookUrl;
        var entityQueryFilter = new Wallee.model.EntityQueryFilter();
        entityQueryFilter.fieldName = "name";
        entityQueryFilter.value = WebHookConfig.name;
        entityQueryFilter.type = Wallee.model.EntityQueryFilterType.LEAF;
        entityQueryFilter.operator = Wallee.model.CriteriaOperator.EQUALS;
        var query = new Wallee.model.EntityQuery();
        query.filter = entityQueryFilter;
        var webHookUrls = this.WebHookUrlService.search(this.spaceId, query);
        if (webHookUrls.length > 0) {
            webHookUrl = webHookUrls[0];
        }
        else {
            var entity = new Wallee.model.WebhookUrlCreate();
            entity.name = WebHookConfig.name;
            entity.url = WebHookConfig.url;
            entity.state = Wallee.model.CreationEntityState.CREATE;
            webHookUrl = this.WebHookUrlService.create(this.spaceId, entity);
        }
        return webHookUrl;
    };
    /**
     * Get Transaction WebHook Listener
     *
     * @return { Wallee.model.WebhookListener }
     */
    WebHook.prototype.getTransactionListener = function () {
        var webHookListener;
        var entityQueryFilter = new Wallee.model.EntityQueryFilter();
        entityQueryFilter.fieldName = "name";
        entityQueryFilter.value = this.WebHookEntity.Transaction.name;
        entityQueryFilter.type = Wallee.model.EntityQueryFilterType.LEAF;
        entityQueryFilter.operator = Wallee.model.CriteriaOperator.EQUALS;
        var query = new Wallee.model.EntityQuery();
        query.filter = entityQueryFilter;
        var webHookListeners = this.WebHookListenerService.search(this.spaceId, query);
        if (webHookListeners.length > 0) {
            webHookListener = webHookListeners[0];
        }
        else {
            var entity = new Wallee.model.WebhookListenerCreate();
            entity.name = this.WebHookEntity.Transaction.name;
            entity.entity = this.WebHookEntity.Transaction.id;
            entity.notifyEveryChange = false;
            entity.state = Wallee.model.CreationEntityState.CREATE;
            entity.entityStates = [
                Wallee.model.TransactionState.CONFIRMED,
                Wallee.model.TransactionState.AUTHORIZED,
                Wallee.model.TransactionState.DECLINE,
                Wallee.model.TransactionState.FAILED,
                Wallee.model.TransactionState.FULFILL,
                Wallee.model.TransactionState.VOIDED,
                Wallee.model.TransactionState.COMPLETED,
                Wallee.model.TransactionState.PROCESSING,
            ];
            entity.url = this.getUrl(this.WebHookEntity.Transaction).id;
            webHookListener = this.WebHookListenerService.create(this.spaceId, entity);
        }
        return webHookListener;
    };
    /**
     * Get WebHook Listener
     *
     * @return { Wallee.model.WebhookListener }
     */
    WebHook.prototype.getRefundListener = function () {
        var webHookListener;
        var entityQueryFilter = new Wallee.model.EntityQueryFilter();
        entityQueryFilter.fieldName = "name";
        entityQueryFilter.value = this.WebHookEntity.Refund.name;
        entityQueryFilter.type = Wallee.model.EntityQueryFilterType.LEAF;
        entityQueryFilter.operator = Wallee.model.CriteriaOperator.EQUALS;
        var query = new Wallee.model.EntityQuery();
        query.filter = entityQueryFilter;
        var webHookListeners = this.WebHookListenerService.search(this.spaceId, query);
        if (webHookListeners.length > 0) {
            webHookListener = webHookListeners[0];
        }
        else {
            var entity = new Wallee.model.WebhookListenerCreate();
            entity.name = this.WebHookEntity.Refund.name;
            entity.entity = this.WebHookEntity.Refund.id;
            entity.notifyEveryChange = false;
            entity.state = Wallee.model.CreationEntityState.CREATE;
            entity.entityStates = [
                Wallee.model.RefundState.FAILED,
                Wallee.model.RefundState.SUCCESSFUL,
            ];
            entity.url = this.getUrl(this.WebHookEntity.Refund).id;
            webHookListener = this.WebHookListenerService.create(this.spaceId, entity);
        }
        return webHookListener;
    };
    return WebHook;
}());
exports.WebHook = WebHook;
module.exports = WebHook;
