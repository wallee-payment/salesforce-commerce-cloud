"use strict";
jQuery(function ($) {
    var WalleeCheckout = {
        active_payment_tab: '.tab-pane.active',
        customer_address: '#dwfrm_billing > fieldset.billing-address-block > fieldset.billing-address, #dwfrm_shipping > div.shipping-address > fieldset.shipping-address-block',
        submit_payment: '#checkout-main button.btn.btn-primary.btn-block.submit-payment',
        place_order: '#checkout-main button.btn.btn-primary.btn-block.place-order',
        available_payment_methods_tabs: 'a.wallee-tab',
        first_available: '#dwfrm_billing div.form-nav.billing-nav.payment-information > ul > li > a',
        payment_handler: '[name=WALLEE_handler]',
        /**
         * Initialize plugin
         */
        init: function () {
            $(window).on('popstate', this.disableValidation);
            $(this.customer_address).on('mouseleave', this.addressUpdatePaymentMethods);
            $(this.submit_payment).on('click', this.submitPayment);
            $(this.place_order).on('click', this.placeOrder);
            $(this.available_payment_methods_tabs).on('click', this.getIframe);
            $('.submit-shipping').on('click', function () {
                $('#dwfrm_billing div.form-nav.billing-nav.payment-information > ul > li > a').first().trigger('click');
                $(".tab-pane.wallee-content").removeAttr("style");
            });
            $(window).on("load", function () {
                $('#dwfrm_billing div.form-nav.billing-nav.payment-information > ul > li > a').first().trigger('click');
                $(".tab-pane.wallee-content").removeAttr("style");
            });
            window.WalleeCheckout = this;
        },
        /**
         * Disable validation when user clicks back button
         */
        disableValidation: function () {
            $(this.active_payment_tab).attr('validation', false);
        },
        /**
         * Update payment methods on address change
         */
        addressUpdatePaymentMethods: function () {
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
        },
        /**
         * Submit payment
         * @param event
         */
        submitPayment: function (event) {
            var activeTabId = $(WalleeCheckout.active_payment_tab).data('id');
            if (activeTabId) {
                var activeTabValid = $(WalleeCheckout.active_payment_tab).attr('validation');
                if (activeTabValid) {
                    if ($(WalleeCheckout.payment_handler).val() !== '') {
                        return true;
                    }
                }
                event.preventDefault();
                window['WALLEE_handler' + activeTabId].validate();
                return false;
            }
        },
        /**
         * Place order
         */
        placeOrder: function (event) {
            var activeTabId = $(WalleeCheckout.active_payment_tab).data('id');
            if (activeTabId !== '') {
                var activeTabValid = $(WalleeCheckout.active_payment_tab).attr('validation');
                if (activeTabValid) {
                    var handlerName_1 = $(WalleeCheckout.payment_handler).val();
                    if ((handlerName_1) && (window[handlerName_1] !== undefined)) {
                        // disable the placeOrder button here
                        $('body').trigger('checkout:disableButton', '.next-step-button button');
                        $.ajax({
                            url: $('.place-order').data('action'),
                            method: 'POST',
                            success: function (data) {
                                if (data.error) {
                                    // enable the placeOrder button here
                                    $('body').trigger('checkout:enableButton', '.next-step-button button');
                                    if (data.cartError) {
                                        window.location.href = data.redirectUrl;
                                    }
                                }
                                else {
                                    window[handlerName_1].submit();
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
        },
        /**
         * Get iframe
         * @param event
         */
        getIframe: function (event) {
            var value = $(this).data('id');
            var payment_handler_name = 'WALLEE_handler' + value;
            if ($('#wallee-form-' + value).children().length === 0) { // iframe has not been loaded yet
                window[payment_handler_name] = window.IframeCheckoutHandler(value);
                window[payment_handler_name].setValidationCallback(function (validationResult) {
                    WalleeCheckout.validationCallBack(payment_handler_name, validationResult);
                });
                window[payment_handler_name].create('wallee-form-' + value);
            }
            return true;
        },
        /**
         * validation callback
         * @param payment_handler_name
         * @param validationResult
         */
        validationCallBack: function (payment_handler_name, validationResult) {
            if (validationResult.success) {
                $(WalleeCheckout.active_payment_tab).attr('validation', true);
                $(WalleeCheckout.payment_handler).val(payment_handler_name);
                $('#checkout-main button.btn.btn-primary.btn-block.submit-payment').trigger('click');
            }
            else {
                $(WalleeCheckout.active_payment_tab).attr('validation', false);
                $(WalleeCheckout.payment_handler).val('');
            }
        }
    };
    WalleeCheckout.init();
});
