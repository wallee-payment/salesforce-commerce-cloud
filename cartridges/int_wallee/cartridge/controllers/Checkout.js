"use strict";

// @ts-ignore
var page = module.superModule;
var server = require("server");
server.extend(page);
var TransactionHelperImport = require("~/cartridge/scripts/wallee/helpers/Transaction");
server.append("Login", function (req, res, next) {
    // TODO There must be a better way to register web hook
    var transactionHelper = new TransactionHelperImport(null);
    transactionHelper.getWebHook();
    return next();
});
server.append("Begin", function (req, res, next) {
    var currentBasket = dw.order.BasketMgr.getCurrentBasket();
    if (!currentBasket) {
        next();
        return;
    }
    var viewData = res.getViewData();
    var transactionHelper = new TransactionHelperImport(currentBasket);
    viewData.wallee = transactionHelper.handleTransaction();
    res.setViewData(viewData);
    return next();
});
module.exports = server.exports();
