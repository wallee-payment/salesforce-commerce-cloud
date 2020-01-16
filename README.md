# Salesforce Commerce Cloud Wallee Cartridge

Wallee provides LINK cartridges to integrate with Salesforce Commerce Cloud (SFCC). These cartridges enable a SFRA storefront to use the Wallee payment service. These cartridges support SFRA version 4.x.x.

## Requirements

It is required to have an Wallee account to use these cartridges. Please signup [here](https://app-wallee.com/user/signup).

## Integration
Our cartridges integrate the checkout process with Wallee. Each of the steps below are required to get your Wallee integration working. You need admin rights to the instance you are uploading these cartridges to.

### 1. Upload cartridge

_To import the cartridges please use Commerce Cloud UX-studio._

1. Upload these cartridges to your site 

2. Administration >  Sites >  Manage Sites > *YourSite* > Settings : Add `int_wallee:` to the beginning of the __Cartridges:__ string and apply

3. Administration >  Sites >  Manage Sites > Business Manager  > Settings : Add `bm_wallee:int_wallee:` to the beginning of the __Cartridges:__ string and apply. Please do this for each of the sites.

4. Administration >  Organization >  Roles > Administrator - Business Manager Modules : Enable `Wallee` for each of the users you would like to be able to configure `Wallee`.

### 2. Add wallee payment method
* Merchant Tools >  Ordering >  Payment Methods : Verify that `WALLEE` is the only payment method enabled. Optionally you can leave `CREDIT_CARD` enabled also.

### 3. Add wallee payment processor

* Merchant Tools >  Ordering >  Payment Processors > Verify that a processor with ID: `WALLEE` exists.

### 4. Upload metadata
Please rename the folder `yourSiteId` to the name of your site, and please replicate the folder for each of your sites before zipiping.
1. `zip metadata`
2. Administration >  Site Development >  Site Import & Export > Import > metadata.zip

### 5. Apply credentials
Have your Wallee credentials handy.

* Merchant Tools > Site Preferences > Wallee

If the path `Merchant Tools > Site Preferences > Wallee`. 


### 6. Profit
Congratulations! You are now integrated with Wallee.

## Installation, Usage and Configuration

Installation, Usage and Configuration is explained in Wallee's [online documentation](https://plugin-documentation.wallee.com/wallee-payment).

## Support

For further questions regarding the integration to Wallee, contact the [Wallee Support](https://app-wallee.com/space/select?target=/support).

## License

Please see the [license file](https://github.com/wallee-payment/wallee-salesforce-commerce-cloud/blob/master/LICENSE) for more information.