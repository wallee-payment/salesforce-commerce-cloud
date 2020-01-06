"use strict";
exports.__esModule = true;
var WalleeModule = {
    model: {
        AbstractAccountUpdate: require("./src/models/AbstractAccountUpdate"),
        AbstractApplicationUserUpdate: require("./src/models/AbstractApplicationUserUpdate"),
        AbstractCustomerActive: require("./src/models/AbstractCustomerActive"),
        AbstractCustomerAddressActive: require("./src/models/AbstractCustomerAddressActive"),
        AbstractCustomerCommentActive: require("./src/models/AbstractCustomerCommentActive"),
        AbstractDebtCollectionCaseUpdate: require("./src/models/AbstractDebtCollectionCaseUpdate"),
        AbstractHumanUserUpdate: require("./src/models/AbstractHumanUserUpdate"),
        AbstractPaymentLinkUpdate: require("./src/models/AbstractPaymentLinkUpdate"),
        AbstractRefundCommentActive: require("./src/models/AbstractRefundCommentActive"),
        AbstractSpaceUpdate: require("./src/models/AbstractSpaceUpdate"),
        AbstractSubscriberUpdate: require("./src/models/AbstractSubscriberUpdate"),
        AbstractSubscriptionAffiliateUpdate: require("./src/models/AbstractSubscriptionAffiliateUpdate"),
        AbstractSubscriptionMetricUpdate: require("./src/models/AbstractSubscriptionMetricUpdate"),
        AbstractSubscriptionProductActive: require("./src/models/AbstractSubscriptionProductActive"),
        AbstractTokenUpdate: require("./src/models/AbstractTokenUpdate"),
        AbstractTransactionCommentActive: require("./src/models/AbstractTransactionCommentActive"),
        AbstractTransactionInvoiceCommentActive: require("./src/models/AbstractTransactionInvoiceCommentActive"),
        AbstractTransactionPending: require("./src/models/AbstractTransactionPending"),
        AbstractWebhookListenerUpdate: require("./src/models/AbstractWebhookListenerUpdate"),
        AbstractWebhookUrlUpdate: require("./src/models/AbstractWebhookUrlUpdate"),
        Account: require("./src/models/Account"),
        AccountState: require("./src/models/AccountState"),
        AccountType: require("./src/models/AccountType"),
        Address: require("./src/models/Address"),
        AddressCreate: require("./src/models/AddressCreate"),
        ChargeAttemptEnvironment: require("./src/models/ChargeAttemptEnvironment"),
        ChargeAttemptState: require("./src/models/ChargeAttemptState"),
        ChargeFlow: require("./src/models/ChargeFlow"),
        ChargeFlowLevelConfiguration: require("./src/models/ChargeFlowLevelConfiguration"),
        ChargeFlowLevelConfigurationType: require("./src/models/ChargeFlowLevelConfigurationType"),
        ChargeFlowLevelState: require("./src/models/ChargeFlowLevelState"),
        ChargeState: require("./src/models/ChargeState"),
        ChargeType: require("./src/models/ChargeType"),
        ClientError: require("./src/models/ClientError"),
        ClientErrorType: require("./src/models/ClientErrorType"),
        CompletionLineItem: require("./src/models/CompletionLineItem"),
        CompletionLineItemCreate: require("./src/models/CompletionLineItemCreate"),
        Condition: require("./src/models/Condition"),
        ConditionType: require("./src/models/ConditionType"),
        ConnectorInvocationStage: require("./src/models/ConnectorInvocationStage"),
        CreationEntityState: require("./src/models/CreationEntityState"),
        CriteriaOperator: require("./src/models/CriteriaOperator"),
        Customer: require("./src/models/Customer"),
        CustomerAddress: require("./src/models/CustomerAddress"),
        CustomerAddressType: require("./src/models/CustomerAddressType"),
        CustomerComment: require("./src/models/CustomerComment"),
        CustomerPostalAddress: require("./src/models/CustomerPostalAddress"),
        CustomerPostalAddressCreate: require("./src/models/CustomerPostalAddressCreate"),
        CustomersPresence: require("./src/models/CustomersPresence"),
        DataCollectionType: require("./src/models/DataCollectionType"),
        DatabaseTranslatedString: require("./src/models/DatabaseTranslatedString"),
        DatabaseTranslatedStringCreate: require("./src/models/DatabaseTranslatedStringCreate"),
        DatabaseTranslatedStringItem: require("./src/models/DatabaseTranslatedStringItem"),
        DatabaseTranslatedStringItemCreate: require("./src/models/DatabaseTranslatedStringItemCreate"),
        DebtCollectionCase: require("./src/models/DebtCollectionCase"),
        DebtCollectionCaseDocument: require("./src/models/DebtCollectionCaseDocument"),
        DebtCollectionCaseSource: require("./src/models/DebtCollectionCaseSource"),
        DebtCollectionCaseState: require("./src/models/DebtCollectionCaseState"),
        DebtCollectionEnvironment: require("./src/models/DebtCollectionEnvironment"),
        DebtCollectionReceipt: require("./src/models/DebtCollectionReceipt"),
        DebtCollectionReceiptSource: require("./src/models/DebtCollectionReceiptSource"),
        DebtCollector: require("./src/models/DebtCollector"),
        DebtCollectorCondition: require("./src/models/DebtCollectorCondition"),
        DebtCollectorConditionType: require("./src/models/DebtCollectorConditionType"),
        DebtCollectorConfiguration: require("./src/models/DebtCollectorConfiguration"),
        DeliveryIndicationDecisionReason: require("./src/models/DeliveryIndicationDecisionReason"),
        DeliveryIndicationState: require("./src/models/DeliveryIndicationState"),
        DocumentTemplate: require("./src/models/DocumentTemplate"),
        DocumentTemplateType: require("./src/models/DocumentTemplateType"),
        DocumentTemplateTypeGroup: require("./src/models/DocumentTemplateTypeGroup"),
        EntityExportRequest: require("./src/models/EntityExportRequest"),
        EntityQuery: require("./src/models/EntityQuery"),
        EntityQueryFilter: require("./src/models/EntityQueryFilter"),
        EntityQueryFilterType: require("./src/models/EntityQueryFilterType"),
        EntityQueryOrderBy: require("./src/models/EntityQueryOrderBy"),
        EntityQueryOrderByType: require("./src/models/EntityQueryOrderByType"),
        Environment: require("./src/models/Environment"),
        FailureCategory: require("./src/models/FailureCategory"),
        FailureReason: require("./src/models/FailureReason"),
        Feature: require("./src/models/Feature"),
        Gender: require("./src/models/Gender"),
        HumanUser: require("./src/models/HumanUser"),
        InstallmentCalculatedPlan: require("./src/models/InstallmentCalculatedPlan"),
        InstallmentCalculatedSlice: require("./src/models/InstallmentCalculatedSlice"),
        InstallmentPayment: require("./src/models/InstallmentPayment"),
        InstallmentPaymentSliceState: require("./src/models/InstallmentPaymentSliceState"),
        InstallmentPaymentState: require("./src/models/InstallmentPaymentState"),
        InstallmentPlanConfiguration: require("./src/models/InstallmentPlanConfiguration"),
        InstallmentPlanSliceConfiguration: require("./src/models/InstallmentPlanSliceConfiguration"),
        Label: require("./src/models/Label"),
        LabelDescriptor: require("./src/models/LabelDescriptor"),
        LabelDescriptorCategory: require("./src/models/LabelDescriptorCategory"),
        LabelDescriptorGroup: require("./src/models/LabelDescriptorGroup"),
        LabelDescriptorType: require("./src/models/LabelDescriptorType"),
        LegalOrganizationForm: require("./src/models/LegalOrganizationForm"),
        LineItem: require("./src/models/LineItem"),
        LineItemAttribute: require("./src/models/LineItemAttribute"),
        LineItemAttributeCreate: require("./src/models/LineItemAttributeCreate"),
        LineItemCreate: require("./src/models/LineItemCreate"),
        LineItemReduction: require("./src/models/LineItemReduction"),
        LineItemReductionCreate: require("./src/models/LineItemReductionCreate"),
        LineItemType: require("./src/models/LineItemType"),
        LocalizedString: require("./src/models/LocalizedString"),
        ManualTask: require("./src/models/ManualTask"),
        ManualTaskAction: require("./src/models/ManualTaskAction"),
        ManualTaskActionStyle: require("./src/models/ManualTaskActionStyle"),
        ManualTaskState: require("./src/models/ManualTaskState"),
        ManualTaskType: require("./src/models/ManualTaskType"),
        MetricUsage: require("./src/models/MetricUsage"),
        OneClickPaymentMode: require("./src/models/OneClickPaymentMode"),
        PaymentConnector: require("./src/models/PaymentConnector"),
        PaymentConnectorConfiguration: require("./src/models/PaymentConnectorConfiguration"),
        PaymentConnectorFeature: require("./src/models/PaymentConnectorFeature"),
        PaymentContract: require("./src/models/PaymentContract"),
        PaymentContractState: require("./src/models/PaymentContractState"),
        PaymentContractType: require("./src/models/PaymentContractType"),
        PaymentLink: require("./src/models/PaymentLink"),
        PaymentLinkProtectionMode: require("./src/models/PaymentLinkProtectionMode"),
        PaymentLinkUpdate: require("./src/models/PaymentLinkUpdate"),
        PaymentMethod: require("./src/models/PaymentMethod"),
        PaymentMethodBrand: require("./src/models/PaymentMethodBrand"),
        PaymentMethodConfiguration: require("./src/models/PaymentMethodConfiguration"),
        PaymentPrimaryRiskTaker: require("./src/models/PaymentPrimaryRiskTaker"),
        PaymentProcessor: require("./src/models/PaymentProcessor"),
        PaymentProcessorConfiguration: require("./src/models/PaymentProcessorConfiguration"),
        PaymentTerminal: require("./src/models/PaymentTerminal"),
        PaymentTerminalAddress: require("./src/models/PaymentTerminalAddress"),
        PaymentTerminalConfiguration: require("./src/models/PaymentTerminalConfiguration"),
        PaymentTerminalConfigurationState: require("./src/models/PaymentTerminalConfigurationState"),
        PaymentTerminalConfigurationVersion: require("./src/models/PaymentTerminalConfigurationVersion"),
        PaymentTerminalConfigurationVersionState: require("./src/models/PaymentTerminalConfigurationVersionState"),
        PaymentTerminalLocation: require("./src/models/PaymentTerminalLocation"),
        PaymentTerminalLocationState: require("./src/models/PaymentTerminalLocationState"),
        PaymentTerminalLocationVersion: require("./src/models/PaymentTerminalLocationVersion"),
        PaymentTerminalLocationVersionState: require("./src/models/PaymentTerminalLocationVersionState"),
        PaymentTerminalState: require("./src/models/PaymentTerminalState"),
        PaymentTerminalType: require("./src/models/PaymentTerminalType"),
        Permission: require("./src/models/Permission"),
        PersistableCurrencyAmount: require("./src/models/PersistableCurrencyAmount"),
        PersistableCurrencyAmountUpdate: require("./src/models/PersistableCurrencyAmountUpdate"),
        ProductFeeType: require("./src/models/ProductFeeType"),
        ProductMeteredFee: require("./src/models/ProductMeteredFee"),
        ProductMeteredFeeUpdate: require("./src/models/ProductMeteredFeeUpdate"),
        ProductMeteredTierFee: require("./src/models/ProductMeteredTierFee"),
        ProductMeteredTierFeeUpdate: require("./src/models/ProductMeteredTierFeeUpdate"),
        ProductMeteredTierPricing: require("./src/models/ProductMeteredTierPricing"),
        ProductPeriodFee: require("./src/models/ProductPeriodFee"),
        ProductPeriodFeeUpdate: require("./src/models/ProductPeriodFeeUpdate"),
        ProductSetupFee: require("./src/models/ProductSetupFee"),
        ProductSetupFeeUpdate: require("./src/models/ProductSetupFeeUpdate"),
        Refund: require("./src/models/Refund"),
        RefundComment: require("./src/models/RefundComment"),
        RefundCreate: require("./src/models/RefundCreate"),
        RefundState: require("./src/models/RefundState"),
        RefundType: require("./src/models/RefundType"),
        RenderedDocument: require("./src/models/RenderedDocument"),
        RenderedTerminalReceipt: require("./src/models/RenderedTerminalReceipt"),
        ResourcePath: require("./src/models/ResourcePath"),
        ResourceState: require("./src/models/ResourceState"),
        RestAddressFormat: require("./src/models/RestAddressFormat"),
        RestAddressFormatField: require("./src/models/RestAddressFormatField"),
        RestCountry: require("./src/models/RestCountry"),
        RestCountryState: require("./src/models/RestCountryState"),
        RestCurrency: require("./src/models/RestCurrency"),
        RestLanguage: require("./src/models/RestLanguage"),
        Role: require("./src/models/Role"),
        Scope: require("./src/models/Scope"),
        ServerError: require("./src/models/ServerError"),
        Space: require("./src/models/Space"),
        SpaceAddress: require("./src/models/SpaceAddress"),
        SpaceAddressCreate: require("./src/models/SpaceAddressCreate"),
        SpaceReference: require("./src/models/SpaceReference"),
        SpaceReferenceState: require("./src/models/SpaceReferenceState"),
        SpaceView: require("./src/models/SpaceView"),
        StaticValue: require("./src/models/StaticValue"),
        Subscriber: require("./src/models/Subscriber"),
        SubscriberUpdate: require("./src/models/SubscriberUpdate"),
        Subscription: require("./src/models/Subscription"),
        SubscriptionAffiliate: require("./src/models/SubscriptionAffiliate"),
        SubscriptionAffiliateUpdate: require("./src/models/SubscriptionAffiliateUpdate"),
        SubscriptionChangeRequest: require("./src/models/SubscriptionChangeRequest"),
        SubscriptionCharge: require("./src/models/SubscriptionCharge"),
        SubscriptionChargeCreate: require("./src/models/SubscriptionChargeCreate"),
        SubscriptionChargeProcessingType: require("./src/models/SubscriptionChargeProcessingType"),
        SubscriptionChargeState: require("./src/models/SubscriptionChargeState"),
        SubscriptionChargeType: require("./src/models/SubscriptionChargeType"),
        SubscriptionComponentConfiguration: require("./src/models/SubscriptionComponentConfiguration"),
        SubscriptionComponentReferenceConfiguration: require("./src/models/SubscriptionComponentReferenceConfiguration"),
        SubscriptionCreateRequest: require("./src/models/SubscriptionCreateRequest"),
        SubscriptionLedgerEntry: require("./src/models/SubscriptionLedgerEntry"),
        SubscriptionLedgerEntryCreate: require("./src/models/SubscriptionLedgerEntryCreate"),
        SubscriptionLedgerEntryState: require("./src/models/SubscriptionLedgerEntryState"),
        SubscriptionMetric: require("./src/models/SubscriptionMetric"),
        SubscriptionMetricType: require("./src/models/SubscriptionMetricType"),
        SubscriptionMetricUpdate: require("./src/models/SubscriptionMetricUpdate"),
        SubscriptionMetricUsageReport: require("./src/models/SubscriptionMetricUsageReport"),
        SubscriptionMetricUsageReportCreate: require("./src/models/SubscriptionMetricUsageReportCreate"),
        SubscriptionPeriodBill: require("./src/models/SubscriptionPeriodBill"),
        SubscriptionPeriodBillState: require("./src/models/SubscriptionPeriodBillState"),
        SubscriptionProduct: require("./src/models/SubscriptionProduct"),
        SubscriptionProductComponent: require("./src/models/SubscriptionProductComponent"),
        SubscriptionProductComponentGroup: require("./src/models/SubscriptionProductComponentGroup"),
        SubscriptionProductComponentGroupUpdate: require("./src/models/SubscriptionProductComponentGroupUpdate"),
        SubscriptionProductComponentReference: require("./src/models/SubscriptionProductComponentReference"),
        SubscriptionProductComponentReferenceState: require("./src/models/SubscriptionProductComponentReferenceState"),
        SubscriptionProductComponentUpdate: require("./src/models/SubscriptionProductComponentUpdate"),
        SubscriptionProductRetirement: require("./src/models/SubscriptionProductRetirement"),
        SubscriptionProductRetirementCreate: require("./src/models/SubscriptionProductRetirementCreate"),
        SubscriptionProductState: require("./src/models/SubscriptionProductState"),
        SubscriptionProductVersion: require("./src/models/SubscriptionProductVersion"),
        SubscriptionProductVersionPending: require("./src/models/SubscriptionProductVersionPending"),
        SubscriptionProductVersionRetirement: require("./src/models/SubscriptionProductVersionRetirement"),
        SubscriptionProductVersionRetirementCreate: require("./src/models/SubscriptionProductVersionRetirementCreate"),
        SubscriptionProductVersionState: require("./src/models/SubscriptionProductVersionState"),
        SubscriptionState: require("./src/models/SubscriptionState"),
        SubscriptionSuspension: require("./src/models/SubscriptionSuspension"),
        SubscriptionSuspensionAction: require("./src/models/SubscriptionSuspensionAction"),
        SubscriptionSuspensionCreate: require("./src/models/SubscriptionSuspensionCreate"),
        SubscriptionSuspensionReason: require("./src/models/SubscriptionSuspensionReason"),
        SubscriptionSuspensionState: require("./src/models/SubscriptionSuspensionState"),
        SubscriptionUpdate: require("./src/models/SubscriptionUpdate"),
        SubscriptionVersion: require("./src/models/SubscriptionVersion"),
        SubscriptionVersionState: require("./src/models/SubscriptionVersionState"),
        Tax: require("./src/models/Tax"),
        TaxClass: require("./src/models/TaxClass"),
        TaxCreate: require("./src/models/TaxCreate"),
        TenantDatabase: require("./src/models/TenantDatabase"),
        Token: require("./src/models/Token"),
        TokenVersion: require("./src/models/TokenVersion"),
        TokenVersionState: require("./src/models/TokenVersionState"),
        TokenVersionType: require("./src/models/TokenVersionType"),
        TokenizationMode: require("./src/models/TokenizationMode"),
        Transaction: require("./src/models/Transaction"),
        TransactionAwareEntity: require("./src/models/TransactionAwareEntity"),
        TransactionComment: require("./src/models/TransactionComment"),
        TransactionCompletionMode: require("./src/models/TransactionCompletionMode"),
        TransactionCompletionRequest: require("./src/models/TransactionCompletionRequest"),
        TransactionCompletionState: require("./src/models/TransactionCompletionState"),
        TransactionEnvironmentSelectionStrategy: require("./src/models/TransactionEnvironmentSelectionStrategy"),
        TransactionGroup: require("./src/models/TransactionGroup"),
        TransactionGroupState: require("./src/models/TransactionGroupState"),
        TransactionInvoiceComment: require("./src/models/TransactionInvoiceComment"),
        TransactionInvoiceReplacement: require("./src/models/TransactionInvoiceReplacement"),
        TransactionInvoiceState: require("./src/models/TransactionInvoiceState"),
        TransactionLineItemUpdateRequest: require("./src/models/TransactionLineItemUpdateRequest"),
        TransactionState: require("./src/models/TransactionState"),
        TransactionUserInterfaceType: require("./src/models/TransactionUserInterfaceType"),
        TransactionVoidMode: require("./src/models/TransactionVoidMode"),
        TransactionVoidState: require("./src/models/TransactionVoidState"),
        TwoFactorAuthenticationType: require("./src/models/TwoFactorAuthenticationType"),
        UnencryptedCardData: require("./src/models/UnencryptedCardData"),
        UnencryptedCardDataCreate: require("./src/models/UnencryptedCardDataCreate"),
        User: require("./src/models/User"),
        UserAccountRole: require("./src/models/UserAccountRole"),
        UserSpaceRole: require("./src/models/UserSpaceRole"),
        UserType: require("./src/models/UserType"),
        WebhookIdentity: require("./src/models/WebhookIdentity"),
        WebhookListener: require("./src/models/WebhookListener"),
        WebhookListenerEntity: require("./src/models/WebhookListenerEntity"),
        WebhookUrl: require("./src/models/WebhookUrl"),
        AccountCreate: require("./src/models/AccountCreate"),
        AccountUpdate: require("./src/models/AccountUpdate"),
        ApplicationUser: require("./src/models/ApplicationUser"),
        ApplicationUserCreate: require("./src/models/ApplicationUserCreate"),
        ApplicationUserUpdate: require("./src/models/ApplicationUserUpdate"),
        Charge: require("./src/models/Charge"),
        ChargeAttempt: require("./src/models/ChargeAttempt"),
        ChargeFlowLevel: require("./src/models/ChargeFlowLevel"),
        ConnectorInvocation: require("./src/models/ConnectorInvocation"),
        CustomerActive: require("./src/models/CustomerActive"),
        CustomerAddressActive: require("./src/models/CustomerAddressActive"),
        CustomerAddressCreate: require("./src/models/CustomerAddressCreate"),
        CustomerCommentActive: require("./src/models/CustomerCommentActive"),
        CustomerCommentCreate: require("./src/models/CustomerCommentCreate"),
        CustomerCreate: require("./src/models/CustomerCreate"),
        DebtCollectionCaseCreate: require("./src/models/DebtCollectionCaseCreate"),
        DebtCollectionCaseUpdate: require("./src/models/DebtCollectionCaseUpdate"),
        DeliveryIndication: require("./src/models/DeliveryIndication"),
        HumanUserCreate: require("./src/models/HumanUserCreate"),
        HumanUserUpdate: require("./src/models/HumanUserUpdate"),
        InstallmentPaymentSlice: require("./src/models/InstallmentPaymentSlice"),
        PaymentLinkActive: require("./src/models/PaymentLinkActive"),
        PaymentLinkCreate: require("./src/models/PaymentLinkCreate"),
        RefundCommentActive: require("./src/models/RefundCommentActive"),
        RefundCommentCreate: require("./src/models/RefundCommentCreate"),
        SpaceCreate: require("./src/models/SpaceCreate"),
        SpaceUpdate: require("./src/models/SpaceUpdate"),
        SubscriberActive: require("./src/models/SubscriberActive"),
        SubscriberCreate: require("./src/models/SubscriberCreate"),
        SubscriptionAffiliateCreate: require("./src/models/SubscriptionAffiliateCreate"),
        SubscriptionAffiliateDeleted: require("./src/models/SubscriptionAffiliateDeleted"),
        SubscriptionAffiliateInactive: require("./src/models/SubscriptionAffiliateInactive"),
        SubscriptionMetricActive: require("./src/models/SubscriptionMetricActive"),
        SubscriptionMetricCreate: require("./src/models/SubscriptionMetricCreate"),
        SubscriptionPending: require("./src/models/SubscriptionPending"),
        SubscriptionProductActive: require("./src/models/SubscriptionProductActive"),
        SubscriptionProductCreate: require("./src/models/SubscriptionProductCreate"),
        SubscriptionSuspensionRunning: require("./src/models/SubscriptionSuspensionRunning"),
        TokenCreate: require("./src/models/TokenCreate"),
        TokenUpdate: require("./src/models/TokenUpdate"),
        TransactionCommentActive: require("./src/models/TransactionCommentActive"),
        TransactionCommentCreate: require("./src/models/TransactionCommentCreate"),
        TransactionCompletion: require("./src/models/TransactionCompletion"),
        TransactionCreate: require("./src/models/TransactionCreate"),
        TransactionInvoice: require("./src/models/TransactionInvoice"),
        TransactionInvoiceCommentActive: require("./src/models/TransactionInvoiceCommentActive"),
        TransactionInvoiceCommentCreate: require("./src/models/TransactionInvoiceCommentCreate"),
        TransactionLineItemVersion: require("./src/models/TransactionLineItemVersion"),
        TransactionPending: require("./src/models/TransactionPending"),
        TransactionVoid: require("./src/models/TransactionVoid"),
        WebhookListenerCreate: require("./src/models/WebhookListenerCreate"),
        WebhookListenerUpdate: require("./src/models/WebhookListenerUpdate"),
        WebhookUrlCreate: require("./src/models/WebhookUrlCreate"),
        WebhookUrlUpdate: require("./src/models/WebhookUrlUpdate"),
        ApplicationUserCreateWithMacKey: require("./src/models/ApplicationUserCreateWithMacKey"),
        SubscriptionAffiliateDeleting: require("./src/models/SubscriptionAffiliateDeleting")
    },
    api: {
        AccountService: require("./src/api/AccountService"),
        ApplicationUserService: require("./src/api/ApplicationUserService"),
        CardProcessingService: require("./src/api/CardProcessingService"),
        ChargeAttemptService: require("./src/api/ChargeAttemptService"),
        ChargeFlowLevelService: require("./src/api/ChargeFlowLevelService"),
        ChargeFlowService: require("./src/api/ChargeFlowService"),
        ConditionTypeService: require("./src/api/ConditionTypeService"),
        CountryService: require("./src/api/CountryService"),
        CountryStateService: require("./src/api/CountryStateService"),
        CurrencyService: require("./src/api/CurrencyService"),
        CustomerAddressService: require("./src/api/CustomerAddressService"),
        CustomerCommentService: require("./src/api/CustomerCommentService"),
        CustomerService: require("./src/api/CustomerService"),
        DebtCollectionCaseService: require("./src/api/DebtCollectionCaseService"),
        DebtCollectorConfigurationService: require("./src/api/DebtCollectorConfigurationService"),
        DebtCollectorService: require("./src/api/DebtCollectorService"),
        DeliveryIndicationService: require("./src/api/DeliveryIndicationService"),
        DocumentTemplateService: require("./src/api/DocumentTemplateService"),
        DocumentTemplateTypeService: require("./src/api/DocumentTemplateTypeService"),
        HumanUserService: require("./src/api/HumanUserService"),
        InstallmentPaymentService: require("./src/api/InstallmentPaymentService"),
        InstallmentPaymentSliceService: require("./src/api/InstallmentPaymentSliceService"),
        InstallmentPlanCalculationService: require("./src/api/InstallmentPlanCalculationService"),
        InstallmentPlanConfigurationService: require("./src/api/InstallmentPlanConfigurationService"),
        InstallmentPlanSliceConfigurationService: require("./src/api/InstallmentPlanSliceConfigurationService"),
        LabelDescriptionGroupService: require("./src/api/LabelDescriptionGroupService"),
        LabelDescriptionService: require("./src/api/LabelDescriptionService"),
        LanguageService: require("./src/api/LanguageService"),
        LegalOrganizationFormService: require("./src/api/LegalOrganizationFormService"),
        ManualTaskService: require("./src/api/ManualTaskService"),
        MerticUsageService: require("./src/api/MerticUsageService"),
        PaymentConnectorConfigurationService: require("./src/api/PaymentConnectorConfigurationService"),
        PaymentConnectorService: require("./src/api/PaymentConnectorService"),
        PaymentLinkService: require("./src/api/PaymentLinkService"),
        PaymentMethodConfigurationService: require("./src/api/PaymentMethodConfigurationService"),
        PaymentMethodService: require("./src/api/PaymentMethodService"),
        PaymentProcessorConfigurationService: require("./src/api/PaymentProcessorConfigurationService"),
        PaymentProcessorService: require("./src/api/PaymentProcessorService"),
        PermissionService: require("./src/api/PermissionService"),
        RefundCommentService: require("./src/api/RefundCommentService"),
        RefundService: require("./src/api/RefundService"),
        SpaceService: require("./src/api/SpaceService"),
        StaticValueService: require("./src/api/StaticValueService"),
        SubscriberService: require("./src/api/SubscriberService"),
        SubscriptionAffiliateService: require("./src/api/SubscriptionAffiliateService"),
        SubscriptionChargeService: require("./src/api/SubscriptionChargeService"),
        SubscriptionLedgerEntryService: require("./src/api/SubscriptionLedgerEntryService"),
        SubscriptionMetricService: require("./src/api/SubscriptionMetricService"),
        SubscriptionMetricUsageService: require("./src/api/SubscriptionMetricUsageService"),
        SubscriptionPeriodBillService: require("./src/api/SubscriptionPeriodBillService"),
        SubscriptionProductComponentGroupService: require("./src/api/SubscriptionProductComponentGroupService"),
        SubscriptionProductComponentService: require("./src/api/SubscriptionProductComponentService"),
        SubscriptionProductFeeTierService: require("./src/api/SubscriptionProductFeeTierService"),
        SubscriptionProductMeteredFeeService: require("./src/api/SubscriptionProductMeteredFeeService"),
        SubscriptionProductPeriodFeeService: require("./src/api/SubscriptionProductPeriodFeeService"),
        SubscriptionProductRetirementService: require("./src/api/SubscriptionProductRetirementService"),
        SubscriptionProductService: require("./src/api/SubscriptionProductService"),
        SubscriptionProductSetupFeeService: require("./src/api/SubscriptionProductSetupFeeService"),
        SubscriptionProductVersionRetirementService: require("./src/api/SubscriptionProductVersionRetirementService"),
        SubscriptionProductVersionService: require("./src/api/SubscriptionProductVersionService"),
        SubscriptionService: require("./src/api/SubscriptionService"),
        SubscriptionSuspensionService: require("./src/api/SubscriptionSuspensionService"),
        SubscriptionVersionService: require("./src/api/SubscriptionVersionService"),
        TokenService: require("./src/api/TokenService"),
        TokenVersionService: require("./src/api/TokenVersionService"),
        TransactionCommentService: require("./src/api/TransactionCommentService"),
        TransactionCompletionService: require("./src/api/TransactionCompletionService"),
        TransactionIframeService: require("./src/api/TransactionIframeService"),
        TransactionInvoiceCommentService: require("./src/api/TransactionInvoiceCommentService"),
        TransactionInvoiceService: require("./src/api/TransactionInvoiceService"),
        TransactionMobileSdkService: require("./src/api/TransactionMobileSdkService"),
        TransactionPaymentPageService: require("./src/api/TransactionPaymentPageService"),
        TransactionService: require("./src/api/TransactionService"),
        TransactionTerminalService: require("./src/api/TransactionTerminalService"),
        TransactionVoidService: require("./src/api/TransactionVoidService"),
        UserAccountRoleService: require("./src/api/UserAccountRoleService"),
        UserSpaceRoleService: require("./src/api/UserSpaceRoleService"),
        WebhookListenerService: require("./src/api/WebhookListenerService"),
        WebhookUrlService: require("./src/api/WebhookUrlService")
    }
};
module.exports = WalleeModule;