"use strict";

var server = require("server");
// @ts-ignore
server.extend(module.superModule);
var Resource = require('dw/web/Resource');
var URLUtils = require('dw/web/URLUtils');
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
server.get('WalleeConfirm', consentTracking.consent, server.middleware.https, csrfProtection.generateToken, function (req, res, next) {
    var reportingUrlsHelper = require('*/cartridge/scripts/reportingUrls');
    var OrderMgr = require('dw/order/OrderMgr');
    var OrderModel = require('*/cartridge/models/order');
    var Locale = require('dw/util/Locale');
    var order;
    var params = req.httpParameterMap;
    if (!params.get('token') || !params.get('ID')) {
        res.render('/error', {
            message: Resource.msg('error.confirmation.error', 'confirmation', null)
        });
        return next();
    }
    order = OrderMgr.getOrder(params.get('ID'), params.get('token'));
    if (!order || order.customer.ID !== req.currentCustomer.raw.ID) {
        res.render('/error', {
            message: Resource.msg('error.confirmation.error', 'confirmation', null)
        });
        return next();
    }
    var lastOrderID = Object.prototype.hasOwnProperty.call(req.session.raw.custom, 'orderID') ? req.session.raw.custom.orderID : null;
    if (lastOrderID === req.querystring.ID) {
        res.redirect(URLUtils.url('Home-Show'));
        return next();
    }
    var config = {
        numberOfLineItems: '*'
    };
    var currentLocale = Locale.getLocale(req.locale.id);
    var orderModel = new OrderModel(order, { config: config, countryCode: currentLocale.country, containerView: 'order' });
    var passwordForm;
    var reportingURLs = reportingUrlsHelper.getOrderReportingURLs(order);
    if (!req.currentCustomer.profile) {
        passwordForm = server.forms.getForm('newPasswords');
        passwordForm.clear();
        res.render('checkout/confirmation/confirmation', {
            order: orderModel,
            returningCustomer: false,
            passwordForm: passwordForm,
            reportingURLs: reportingURLs,
            orderUUID: order.getUUID()
        });
    }
    else {
        res.render('checkout/confirmation/confirmation', {
            order: orderModel,
            returningCustomer: true,
            reportingURLs: reportingURLs,
            orderUUID: order.getUUID()
        });
    }
    req.session.raw.custom.orderID = req.querystring.ID;
    return next();
});
server.get('WalleeFail', consentTracking.consent, server.middleware.https, csrfProtection.generateToken, function (req, res, next) {
    res.render('/error', {
        message: Resource.msg('Payment failed. Please try another payment method', 'confirmation', null)
    });
    req.session.raw.custom.orderID = null;
    req.session.raw.custom.WalleeTransactionId = null;
    return next();
});
module.exports = server.exports();
