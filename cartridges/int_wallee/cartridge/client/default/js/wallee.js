"use strict";
window.onload = function () {
    // reset validation when back button press
    $(window).on('popstate', function () { $('.tab-pane.active').attr('validation', 'false'); });
    // Listen to changes on billing and shipping forms and update the payment methods accordingly
    $('#dwfrm_billing > fieldset.billing-address-block > fieldset.billing-address, #dwfrm_shipping > div.shipping-address > fieldset.shipping-address-block').on('mouseleave', function () {
        var data = $(this).serializeArray();
        // @ts-ignore
        $.ajax({
            method: "POST",
            url: $("[name=WALLEE_url]").first().val(),
            data: data,
            success: function (result) {
                if (result && result.wallee && result.wallee.possiblePaymentMethodsArray) {
                    result.wallee.possiblePaymentMethodsArray.forEach(function (value) {
                        $('.WALLEE-nav-item-' + value + ', .wallee-content-' + value).show();
                    });
                }
            }
        });
    });
    // Validate selected WALLEE paymentmethod
    $('#checkout-main button.btn.btn-primary.btn-block.submit-payment').on('click', function (e) {
        var activeTabId = $('.tab-pane.active').data('id');
        if (activeTabId) {
            var activeTabValid = $('.tab-pane.active').attr('validation');
            if (activeTabValid && (activeTabValid === 'true')) {
                if ($('[name="WALLEE_handler"]').val() !== '') {
                    return true;
                }
            }
            e.preventDefault();
            window['WALLEE_handler' + activeTabId].validate();
            return false;
        }
    });
    // Submit selected WALLEE payment method and place order
    $('#checkout-main button.btn.btn-primary.btn-block.place-order').on('click', function (e) {
        var activeTabId = $('.tab-pane.active').data('id');
        if (activeTabId !== '') {
            var activeTabValid = $('.tab-pane.active').attr('validation');
            if (activeTabValid === 'true') {
                var handlerName = $('[name="WALLEE_handler"]').val();
                if ((handlerName) && (window[handlerName] !== undefined)) {
                    // disable the placeOrder button here
                    $('body').trigger('checkout:disableButton', '.next-step-button button');
                    $.ajax({
                        url: $('.place-order').data('action'),
                        method: 'POST',
                        success: function (data) {
                            // enable the placeOrder button here
                            $('body').trigger('checkout:enableButton', '.next-step-button button');
                            if (data.error) {
                                if (data.cartError) {
                                    window.location.href = data.redirectUrl;
                                }
                            }
                            else {
                                var continueUrl = data.continueUrl;
                                var urlParams = {
                                    ID: data.orderID,
                                    token: data.orderToken
                                };
                                continueUrl += (continueUrl.indexOf('?') !== -1 ? '&' : '?') +
                                    Object.keys(urlParams).map(function (key) {
                                        // @ts-ignore
                                        return key + '=' + encodeURIComponent(urlParams[key]);
                                    }).join('&');
                                window[handlerName].submit();
                                //window.location.href = continueUrl;
                            }
                        },
                        error: function () {
                            // enable the placeOrder button here
                            $('body').trigger('checkout:enableButton', $('.next-step-button button'));
                        }
                    });
                }
            }
            return false;
        }
        return true;
    });
    // Bind available payment methods and fetch iframe
    $('a.wallee-tab').on('click', function (e) {
        var value = $(this).data('id');
        if ($('#wallee-form-' + value).children().length === 0) { // iframe has not been loaded yet
            window['WALLEE_handler' + value] = window.IframeCheckoutHandler(value);
            window['WALLEE_handler' + value].create('wallee-form-' + value);
            window['WALLEE_handler' + value].setValidationCallback(function (validationResult) {
                if (validationResult.success) {
                    $('.tab-pane.active').attr('validation', 'true');
                    $('#checkout-main button.btn.btn-primary.btn-block.submit-payment').click();
                    $('[name="WALLEE_handler"]').val('WALLEE_handler' + value);
                }
                else {
                    $('.tab-pane.active').attr('validation', 'false');
                    $('[name="WALLEE_handler"]').val('');
                }
            });
        }
        return true;
    });
    // Click on the first payment method
    $('#dwfrm_billing div.form-nav.billing-nav.payment-information > ul > li > a').first().click();
};
