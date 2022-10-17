"use strict";

/* global dw empty this request */
/**
 * Configure WebHooks
 */
function start() {
    try {
        var customPreferences = dw.object.CustomObjectMgr.getCustomObject("Wallee_Common", "wallee_common");
        var data = {
            customPreferences: customPreferences.custom
        };
        dw.template.ISML.renderTemplate("extensions/wallee.isml", data);
    }
    catch (e) {
        throw new Error("Please import metadata first. Custom object Wallee_Common is missing.");
    }
}
/**
 * Save Store configs
 */
function saveConfiguration() {
    // @ts-ignore
    if (dw.web.CSRFProtection.validateRequest()) {
        var params_1 = request.httpParameterMap;
        var customPreferences_1 = dw.object.CustomObjectMgr.getCustomObject("Wallee_Common", "wallee_common");
        /**
         * Save API Settings
         */
        dw.system.Transaction.wrap(function () {
            customPreferences_1.custom.spaceId = params_1.spaceId.intValue;
            customPreferences_1.custom.userId = params_1.userId.intValue;
            customPreferences_1.custom.apiSecret = params_1.apiSecret.stringValue;
        });
        var WebHookHelper = new (require("../../../int_wallee/cartridge/scripts/wallee/helpers/WebHook"));
        try {
            var data_1 = WebHookHelper.getTransactionListener();
            dw.system.Transaction.wrap(function () {
                customPreferences_1.custom.webHookContent = JSON.stringify(data_1);
                customPreferences_1.custom.webHookIsEnabled = true;
            });
        }
        catch (e) {
            var errorMessage = "Site \"" + dw.system.Site.getCurrent().getName() + "\" Transaction webhook was not created - already exists.";
            dw.system.Logger.warn(errorMessage);
        }
        try {
            WebHookHelper.getRefundListener();
        }
        catch (e) {
            var errorMessage = "Site \"" + dw.system.Site.getCurrent().getName() + "\" Refund webhook was not created - already exists.";
            dw.system.Logger.warn(errorMessage);
        }
    }
    start();
}
start.public = true;
saveConfiguration.public = true;
exports.Start = start;
exports.SaveConfiguration = saveConfiguration;
