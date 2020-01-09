# Salesforce Commerce Cloud Wallee Cartridge

Wallee provides a LINK cartridge to integrate with Salesforce Commerce Cloud (SFCC). This cartridge enables a SFRA storefront to use the Wallee payment service. This cartridge supports SFRA version 4.x.x.

## Integration
The cartridge integrates the checkout process with Wallee.

### 1. Upload cartridge

_To import the cartridge please use Commerce Cloud UX-studio._

1. Upload this cartridge to your site 

2. Administration >  Sites >  Manage Sites > *YourSite* > Settings

3. Add `int_wallee:` to the beginning of the __Cartridges:__ string and apply

### 2. Add wallee payment method
1. Merchant Tools >  Ordering >  Import & Export : Click upload
2. Merchant Tools >  Ordering >  Import & Export > Manage Import Files : upload the file `wallee-payment-methods.xml`
3. Merchant Tools >  Ordering >  Payment Methods : Check that `WALLEE` is the only payment method enabled. Optionally you can leave `CREDIT_CARD` enabled also.

### 3. Add wallee payment processor
1. Merchant Tools >  Ordering >  Payment Processors : Click new
2. Merchant Tools >  Ordering >  Payment Processors > Create Payment Processor : ID: `WALLEE` Description: `WALLEE`

### 4. Upload metadata
1. `zip metadata`
2. Administration >  Site Development >  Site Import & Export > Import > metadata.zip

### 5. Apply credentials

Merchant Tools > Site Preferences > Custom Preferences > wallee

## Requirements

It is required to have an Wallee account to use the cartridge. Please signup [here](https://app-wallee.com/user/signup).

## Installation, Usage and Configuration

Installation, Usage and Configuration is explained in Wallee's [online documentation](https://plugin-documentation.wallee.com/wallee-payment).

## Support

For further questions regarding the integration to Wallee, contact the [Wallee Support](https://app-wallee.com/space/select?target=/support).

## License

Please see the [license file](https://github.com/wallee-payment/wallee-salesforce-commerce-cloud/blob/master/LICENSE) for more information.