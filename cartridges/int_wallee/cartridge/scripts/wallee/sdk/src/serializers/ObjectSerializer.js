"use strict";

var AbstractAccountUpdate = require("../models/AbstractAccountUpdate");
var AbstractApplicationUserUpdate = require("../models/AbstractApplicationUserUpdate");
var AbstractCustomerActive = require("../models/AbstractCustomerActive");
var AbstractCustomerAddressActive = require("../models/AbstractCustomerAddressActive");
var AbstractCustomerCommentActive = require("../models/AbstractCustomerCommentActive");
var AbstractDebtCollectionCaseUpdate = require("../models/AbstractDebtCollectionCaseUpdate");
var AbstractHumanUserUpdate = require("../models/AbstractHumanUserUpdate");
var AbstractPaymentLinkUpdate = require("../models/AbstractPaymentLinkUpdate");
var AbstractRefundCommentActive = require("../models/AbstractRefundCommentActive");
var AbstractShopifySubscriptionProductUpdate = require("../models/AbstractShopifySubscriptionProductUpdate");
var AbstractSpaceUpdate = require("../models/AbstractSpaceUpdate");
var AbstractSubscriberUpdate = require("../models/AbstractSubscriberUpdate");
var AbstractSubscriptionAffiliateUpdate = require("../models/AbstractSubscriptionAffiliateUpdate");
var AbstractSubscriptionMetricUpdate = require("../models/AbstractSubscriptionMetricUpdate");
var AbstractSubscriptionProductActive = require("../models/AbstractSubscriptionProductActive");
var AbstractTokenUpdate = require("../models/AbstractTokenUpdate");
var AbstractTransactionCommentActive = require("../models/AbstractTransactionCommentActive");
var AbstractTransactionInvoiceCommentActive = require("../models/AbstractTransactionInvoiceCommentActive");
var AbstractTransactionPending = require("../models/AbstractTransactionPending");
var AbstractWebhookListenerUpdate = require("../models/AbstractWebhookListenerUpdate");
var AbstractWebhookUrlUpdate = require("../models/AbstractWebhookUrlUpdate");
var Account = require("../models/Account");
var AccountState = require("../models/AccountState");
var AccountType = require("../models/AccountType");
var Address = require("../models/Address");
var AddressCreate = require("../models/AddressCreate");
var AnalyticsQuery = require("../models/AnalyticsQuery");
var AnalyticsQueryExecution = require("../models/AnalyticsQueryExecution");
var AnalyticsQueryExecutionState = require("../models/AnalyticsQueryExecutionState");
var AnalyticsQueryResultBatch = require("../models/AnalyticsQueryResultBatch");
var AnalyticsSchemaColumn = require("../models/AnalyticsSchemaColumn");
var AnalyticsSchemaTable = require("../models/AnalyticsSchemaTable");
var AuthenticatedCardDataCreate = require("../models/AuthenticatedCardDataCreate");
var BankAccount = require("../models/BankAccount");
var BankAccountEnvironment = require("../models/BankAccountEnvironment");
var BankAccountState = require("../models/BankAccountState");
var BankAccountType = require("../models/BankAccountType");
var BankTransaction = require("../models/BankTransaction");
var BankTransactionFlowDirection = require("../models/BankTransactionFlowDirection");
var BankTransactionSource = require("../models/BankTransactionSource");
var BankTransactionState = require("../models/BankTransactionState");
var BankTransactionType = require("../models/BankTransactionType");
var CardAuthenticationResponse = require("../models/CardAuthenticationResponse");
var CardAuthenticationVersion = require("../models/CardAuthenticationVersion");
var CardCryptogram = require("../models/CardCryptogram");
var CardCryptogramCreate = require("../models/CardCryptogramCreate");
var CardCryptogramType = require("../models/CardCryptogramType");
var CardholderAuthentication = require("../models/CardholderAuthentication");
var CardholderAuthenticationCreate = require("../models/CardholderAuthenticationCreate");
var ChargeAttemptEnvironment = require("../models/ChargeAttemptEnvironment");
var ChargeAttemptState = require("../models/ChargeAttemptState");
var ChargeFlow = require("../models/ChargeFlow");
var ChargeFlowLevelConfiguration = require("../models/ChargeFlowLevelConfiguration");
var ChargeFlowLevelConfigurationType = require("../models/ChargeFlowLevelConfigurationType");
var ChargeFlowLevelState = require("../models/ChargeFlowLevelState");
var ChargeState = require("../models/ChargeState");
var ChargeType = require("../models/ChargeType");
var ClientError = require("../models/ClientError");
var ClientErrorType = require("../models/ClientErrorType");
var CompletionLineItem = require("../models/CompletionLineItem");
var CompletionLineItemCreate = require("../models/CompletionLineItemCreate");
var Condition = require("../models/Condition");
var ConditionType = require("../models/ConditionType");
var ConnectorInvocationStage = require("../models/ConnectorInvocationStage");
var CreationEntityState = require("../models/CreationEntityState");
var CriteriaOperator = require("../models/CriteriaOperator");
var CurrencyBankAccount = require("../models/CurrencyBankAccount");
var Customer = require("../models/Customer");
var CustomerAddress = require("../models/CustomerAddress");
var CustomerAddressType = require("../models/CustomerAddressType");
var CustomerComment = require("../models/CustomerComment");
var CustomerPostalAddress = require("../models/CustomerPostalAddress");
var CustomerPostalAddressCreate = require("../models/CustomerPostalAddressCreate");
var CustomersPresence = require("../models/CustomersPresence");
var DataCollectionType = require("../models/DataCollectionType");
var DatabaseTranslatedString = require("../models/DatabaseTranslatedString");
var DatabaseTranslatedStringCreate = require("../models/DatabaseTranslatedStringCreate");
var DatabaseTranslatedStringItem = require("../models/DatabaseTranslatedStringItem");
var DatabaseTranslatedStringItemCreate = require("../models/DatabaseTranslatedStringItemCreate");
var DebtCollectionCase = require("../models/DebtCollectionCase");
var DebtCollectionCaseDocument = require("../models/DebtCollectionCaseDocument");
var DebtCollectionCaseSource = require("../models/DebtCollectionCaseSource");
var DebtCollectionCaseState = require("../models/DebtCollectionCaseState");
var DebtCollectionEnvironment = require("../models/DebtCollectionEnvironment");
var DebtCollectionReceipt = require("../models/DebtCollectionReceipt");
var DebtCollectionReceiptSource = require("../models/DebtCollectionReceiptSource");
var DebtCollector = require("../models/DebtCollector");
var DebtCollectorCondition = require("../models/DebtCollectorCondition");
var DebtCollectorConditionType = require("../models/DebtCollectorConditionType");
var DebtCollectorConfiguration = require("../models/DebtCollectorConfiguration");
var DeliveryIndicationDecisionReason = require("../models/DeliveryIndicationDecisionReason");
var DeliveryIndicationState = require("../models/DeliveryIndicationState");
var DocumentTemplate = require("../models/DocumentTemplate");
var DocumentTemplateType = require("../models/DocumentTemplateType");
var DocumentTemplateTypeGroup = require("../models/DocumentTemplateTypeGroup");
var EntityExportRequest = require("../models/EntityExportRequest");
var EntityQuery = require("../models/EntityQuery");
var EntityQueryFilter = require("../models/EntityQueryFilter");
var EntityQueryFilterType = require("../models/EntityQueryFilterType");
var EntityQueryOrderBy = require("../models/EntityQueryOrderBy");
var EntityQueryOrderByType = require("../models/EntityQueryOrderByType");
var Environment = require("../models/Environment");
var ExternalTransferBankTransaction = require("../models/ExternalTransferBankTransaction");
var FailureCategory = require("../models/FailureCategory");
var FailureReason = require("../models/FailureReason");
var Feature = require("../models/Feature");
var FeatureCategory = require("../models/FeatureCategory");
var Gender = require("../models/Gender");
var HumanUser = require("../models/HumanUser");
var InstallmentCalculatedPlan = require("../models/InstallmentCalculatedPlan");
var InstallmentCalculatedSlice = require("../models/InstallmentCalculatedSlice");
var InstallmentPayment = require("../models/InstallmentPayment");
var InstallmentPaymentSliceState = require("../models/InstallmentPaymentSliceState");
var InstallmentPaymentState = require("../models/InstallmentPaymentState");
var InstallmentPlanConfiguration = require("../models/InstallmentPlanConfiguration");
var InstallmentPlanSliceConfiguration = require("../models/InstallmentPlanSliceConfiguration");
var InternalTransferBankTransaction = require("../models/InternalTransferBankTransaction");
var InvoiceReconciliationRecordInvoiceLink = require("../models/InvoiceReconciliationRecordInvoiceLink");
var InvoiceReconciliationRecordRejectionStatus = require("../models/InvoiceReconciliationRecordRejectionStatus");
var InvoiceReconciliationRecordState = require("../models/InvoiceReconciliationRecordState");
var InvoiceReconciliationRecordType = require("../models/InvoiceReconciliationRecordType");
var InvoiceReimbursement = require("../models/InvoiceReimbursement");
var InvoiceReimbursementState = require("../models/InvoiceReimbursementState");
var Label = require("../models/Label");
var LabelDescriptor = require("../models/LabelDescriptor");
var LabelDescriptorCategory = require("../models/LabelDescriptorCategory");
var LabelDescriptorGroup = require("../models/LabelDescriptorGroup");
var LabelDescriptorType = require("../models/LabelDescriptorType");
var LegalOrganizationForm = require("../models/LegalOrganizationForm");
var LineItem = require("../models/LineItem");
var LineItemAttribute = require("../models/LineItemAttribute");
var LineItemAttributeCreate = require("../models/LineItemAttributeCreate");
var LineItemCreate = require("../models/LineItemCreate");
var LineItemReduction = require("../models/LineItemReduction");
var LineItemReductionCreate = require("../models/LineItemReductionCreate");
var LineItemType = require("../models/LineItemType");
var LocalizedString = require("../models/LocalizedString");
var ManualTask = require("../models/ManualTask");
var ManualTaskAction = require("../models/ManualTaskAction");
var ManualTaskActionStyle = require("../models/ManualTaskActionStyle");
var ManualTaskState = require("../models/ManualTaskState");
var ManualTaskType = require("../models/ManualTaskType");
var MetricUsage = require("../models/MetricUsage");
var OneClickPaymentMode = require("../models/OneClickPaymentMode");
var PaymentAdjustment = require("../models/PaymentAdjustment");
var PaymentAdjustmentType = require("../models/PaymentAdjustmentType");
var PaymentAppChargeAttemptTargetState = require("../models/PaymentAppChargeAttemptTargetState");
var PaymentAppChargeAttemptUpdateRequest = require("../models/PaymentAppChargeAttemptUpdateRequest");
var PaymentAppCompletionConfiguration = require("../models/PaymentAppCompletionConfiguration");
var PaymentAppCompletionConfigurationCreate = require("../models/PaymentAppCompletionConfigurationCreate");
var PaymentAppCompletionTargetState = require("../models/PaymentAppCompletionTargetState");
var PaymentAppCompletionUpdateRequest = require("../models/PaymentAppCompletionUpdateRequest");
var PaymentAppConnector = require("../models/PaymentAppConnector");
var PaymentAppConnectorCreationRequest = require("../models/PaymentAppConnectorCreationRequest");
var PaymentAppConnectorState = require("../models/PaymentAppConnectorState");
var PaymentAppProcessor = require("../models/PaymentAppProcessor");
var PaymentAppProcessorCreationRequest = require("../models/PaymentAppProcessorCreationRequest");
var PaymentAppProcessorState = require("../models/PaymentAppProcessorState");
var PaymentAppRefundConfiguration = require("../models/PaymentAppRefundConfiguration");
var PaymentAppRefundConfigurationCreate = require("../models/PaymentAppRefundConfigurationCreate");
var PaymentAppRefundTargetState = require("../models/PaymentAppRefundTargetState");
var PaymentAppRefundUpdateRequest = require("../models/PaymentAppRefundUpdateRequest");
var PaymentAppVoidTargetState = require("../models/PaymentAppVoidTargetState");
var PaymentAppVoidUpdateRequest = require("../models/PaymentAppVoidUpdateRequest");
var PaymentConnector = require("../models/PaymentConnector");
var PaymentConnectorConfiguration = require("../models/PaymentConnectorConfiguration");
var PaymentConnectorFeature = require("../models/PaymentConnectorFeature");
var PaymentContract = require("../models/PaymentContract");
var PaymentContractState = require("../models/PaymentContractState");
var PaymentContractType = require("../models/PaymentContractType");
var PaymentInformationHash = require("../models/PaymentInformationHash");
var PaymentInformationHashType = require("../models/PaymentInformationHashType");
var PaymentInitiationAdviceFile = require("../models/PaymentInitiationAdviceFile");
var PaymentInitiationAdviceFileState = require("../models/PaymentInitiationAdviceFileState");
var PaymentLink = require("../models/PaymentLink");
var PaymentLinkAddressHandlingMode = require("../models/PaymentLinkAddressHandlingMode");
var PaymentLinkProtectionMode = require("../models/PaymentLinkProtectionMode");
var PaymentLinkUpdate = require("../models/PaymentLinkUpdate");
var PaymentMethod = require("../models/PaymentMethod");
var PaymentMethodBrand = require("../models/PaymentMethodBrand");
var PaymentMethodConfiguration = require("../models/PaymentMethodConfiguration");
var PaymentPrimaryRiskTaker = require("../models/PaymentPrimaryRiskTaker");
var PaymentProcessor = require("../models/PaymentProcessor");
var PaymentProcessorConfiguration = require("../models/PaymentProcessorConfiguration");
var PaymentTerminal = require("../models/PaymentTerminal");
var PaymentTerminalAddress = require("../models/PaymentTerminalAddress");
var PaymentTerminalConfiguration = require("../models/PaymentTerminalConfiguration");
var PaymentTerminalConfigurationState = require("../models/PaymentTerminalConfigurationState");
var PaymentTerminalConfigurationVersion = require("../models/PaymentTerminalConfigurationVersion");
var PaymentTerminalConfigurationVersionState = require("../models/PaymentTerminalConfigurationVersionState");
var PaymentTerminalDccTransactionSum = require("../models/PaymentTerminalDccTransactionSum");
var PaymentTerminalLocation = require("../models/PaymentTerminalLocation");
var PaymentTerminalLocationState = require("../models/PaymentTerminalLocationState");
var PaymentTerminalLocationVersion = require("../models/PaymentTerminalLocationVersion");
var PaymentTerminalLocationVersionState = require("../models/PaymentTerminalLocationVersionState");
var PaymentTerminalReceiptType = require("../models/PaymentTerminalReceiptType");
var PaymentTerminalState = require("../models/PaymentTerminalState");
var PaymentTerminalTransactionSum = require("../models/PaymentTerminalTransactionSum");
var PaymentTerminalTransactionSummary = require("../models/PaymentTerminalTransactionSummary");
var PaymentTerminalTransactionSummaryFetchRequest = require("../models/PaymentTerminalTransactionSummaryFetchRequest");
var PaymentTerminalType = require("../models/PaymentTerminalType");
var Permission = require("../models/Permission");
var PersistableCurrencyAmount = require("../models/PersistableCurrencyAmount");
var PersistableCurrencyAmountUpdate = require("../models/PersistableCurrencyAmountUpdate");
var ProductFeeType = require("../models/ProductFeeType");
var ProductMeteredFee = require("../models/ProductMeteredFee");
var ProductMeteredFeeUpdate = require("../models/ProductMeteredFeeUpdate");
var ProductMeteredTierFee = require("../models/ProductMeteredTierFee");
var ProductMeteredTierFeeUpdate = require("../models/ProductMeteredTierFeeUpdate");
var ProductMeteredTierPricing = require("../models/ProductMeteredTierPricing");
var ProductPeriodFee = require("../models/ProductPeriodFee");
var ProductPeriodFeeUpdate = require("../models/ProductPeriodFeeUpdate");
var ProductSetupFee = require("../models/ProductSetupFee");
var ProductSetupFeeUpdate = require("../models/ProductSetupFeeUpdate");
var RecurringIndicator = require("../models/RecurringIndicator");
var Refund = require("../models/Refund");
var RefundComment = require("../models/RefundComment");
var RefundCreate = require("../models/RefundCreate");
var RefundState = require("../models/RefundState");
var RefundType = require("../models/RefundType");
var RenderedDocument = require("../models/RenderedDocument");
var RenderedTerminalReceipt = require("../models/RenderedTerminalReceipt");
var RenderedTerminalTransactionSummary = require("../models/RenderedTerminalTransactionSummary");
var ResourcePath = require("../models/ResourcePath");
var ResourceState = require("../models/ResourceState");
var RestAddressFormat = require("../models/RestAddressFormat");
var RestAddressFormatField = require("../models/RestAddressFormatField");
var RestCountry = require("../models/RestCountry");
var RestCountryState = require("../models/RestCountryState");
var RestCurrency = require("../models/RestCurrency");
var RestLanguage = require("../models/RestLanguage");
var Role = require("../models/Role");
var RoleState = require("../models/RoleState");
var SalesChannel = require("../models/SalesChannel");
var Scope = require("../models/Scope");
var ServerError = require("../models/ServerError");
var ShopifyAdditionalLineItemData = require("../models/ShopifyAdditionalLineItemData");
var ShopifyIntegration = require("../models/ShopifyIntegration");
var ShopifyIntegrationPaymentAppVersion = require("../models/ShopifyIntegrationPaymentAppVersion");
var ShopifyIntegrationSubscriptionAppVersion = require("../models/ShopifyIntegrationSubscriptionAppVersion");
var ShopifyRecurringOrderState = require("../models/ShopifyRecurringOrderState");
var ShopifyRecurringOrderUpdateRequest = require("../models/ShopifyRecurringOrderUpdateRequest");
var ShopifySubscriber = require("../models/ShopifySubscriber");
var ShopifySubscriberActive = require("../models/ShopifySubscriberActive");
var ShopifySubscriberCreation = require("../models/ShopifySubscriberCreation");
var ShopifySubscriberState = require("../models/ShopifySubscriberState");
var ShopifySubscription = require("../models/ShopifySubscription");
var ShopifySubscriptionAddressCreate = require("../models/ShopifySubscriptionAddressCreate");
var ShopifySubscriptionBillingIntervalUnit = require("../models/ShopifySubscriptionBillingIntervalUnit");
var ShopifySubscriptionCreationRequest = require("../models/ShopifySubscriptionCreationRequest");
var ShopifySubscriptionModelBillingConfiguration = require("../models/ShopifySubscriptionModelBillingConfiguration");
var ShopifySubscriptionModelItem = require("../models/ShopifySubscriptionModelItem");
var ShopifySubscriptionModelTaxLine = require("../models/ShopifySubscriptionModelTaxLine");
var ShopifySubscriptionProduct = require("../models/ShopifySubscriptionProduct");
var ShopifySubscriptionProductPricingOption = require("../models/ShopifySubscriptionProductPricingOption");
var ShopifySubscriptionProductState = require("../models/ShopifySubscriptionProductState");
var ShopifySubscriptionState = require("../models/ShopifySubscriptionState");
var ShopifySubscriptionSuspension = require("../models/ShopifySubscriptionSuspension");
var ShopifySubscriptionSuspensionCreate = require("../models/ShopifySubscriptionSuspensionCreate");
var ShopifySubscriptionSuspensionInitiator = require("../models/ShopifySubscriptionSuspensionInitiator");
var ShopifySubscriptionSuspensionState = require("../models/ShopifySubscriptionSuspensionState");
var ShopifySubscriptionSuspensionType = require("../models/ShopifySubscriptionSuspensionType");
var ShopifySubscriptionUpdateAddressesRequest = require("../models/ShopifySubscriptionUpdateAddressesRequest");
var ShopifySubscriptionUpdateRequest = require("../models/ShopifySubscriptionUpdateRequest");
var ShopifySubscriptionVersion = require("../models/ShopifySubscriptionVersion");
var ShopifySubscriptionVersionItem = require("../models/ShopifySubscriptionVersionItem");
var ShopifySubscriptionVersionItemPriceStrategy = require("../models/ShopifySubscriptionVersionItemPriceStrategy");
var ShopifySubscriptionVersionState = require("../models/ShopifySubscriptionVersionState");
var ShopifySubscriptionWeekday = require("../models/ShopifySubscriptionWeekday");
var ShopifyTaxLine = require("../models/ShopifyTaxLine");
var ShopifyTransactionState = require("../models/ShopifyTransactionState");
var Space = require("../models/Space");
var SpaceAddress = require("../models/SpaceAddress");
var SpaceAddressCreate = require("../models/SpaceAddressCreate");
var SpaceReference = require("../models/SpaceReference");
var SpaceReferenceState = require("../models/SpaceReferenceState");
var SpaceView = require("../models/SpaceView");
var StaticValue = require("../models/StaticValue");
var Subscriber = require("../models/Subscriber");
var SubscriberUpdate = require("../models/SubscriberUpdate");
var Subscription = require("../models/Subscription");
var SubscriptionAffiliate = require("../models/SubscriptionAffiliate");
var SubscriptionAffiliateUpdate = require("../models/SubscriptionAffiliateUpdate");
var SubscriptionChangeRequest = require("../models/SubscriptionChangeRequest");
var SubscriptionCharge = require("../models/SubscriptionCharge");
var SubscriptionChargeCreate = require("../models/SubscriptionChargeCreate");
var SubscriptionChargeProcessingType = require("../models/SubscriptionChargeProcessingType");
var SubscriptionChargeState = require("../models/SubscriptionChargeState");
var SubscriptionChargeType = require("../models/SubscriptionChargeType");
var SubscriptionComponentConfiguration = require("../models/SubscriptionComponentConfiguration");
var SubscriptionComponentReferenceConfiguration = require("../models/SubscriptionComponentReferenceConfiguration");
var SubscriptionCreateRequest = require("../models/SubscriptionCreateRequest");
var SubscriptionLedgerEntry = require("../models/SubscriptionLedgerEntry");
var SubscriptionLedgerEntryCreate = require("../models/SubscriptionLedgerEntryCreate");
var SubscriptionLedgerEntryState = require("../models/SubscriptionLedgerEntryState");
var SubscriptionMetric = require("../models/SubscriptionMetric");
var SubscriptionMetricType = require("../models/SubscriptionMetricType");
var SubscriptionMetricUpdate = require("../models/SubscriptionMetricUpdate");
var SubscriptionMetricUsageReport = require("../models/SubscriptionMetricUsageReport");
var SubscriptionMetricUsageReportCreate = require("../models/SubscriptionMetricUsageReportCreate");
var SubscriptionPeriodBill = require("../models/SubscriptionPeriodBill");
var SubscriptionPeriodBillState = require("../models/SubscriptionPeriodBillState");
var SubscriptionProduct = require("../models/SubscriptionProduct");
var SubscriptionProductComponent = require("../models/SubscriptionProductComponent");
var SubscriptionProductComponentGroup = require("../models/SubscriptionProductComponentGroup");
var SubscriptionProductComponentGroupUpdate = require("../models/SubscriptionProductComponentGroupUpdate");
var SubscriptionProductComponentReference = require("../models/SubscriptionProductComponentReference");
var SubscriptionProductComponentReferenceState = require("../models/SubscriptionProductComponentReferenceState");
var SubscriptionProductComponentUpdate = require("../models/SubscriptionProductComponentUpdate");
var SubscriptionProductRetirement = require("../models/SubscriptionProductRetirement");
var SubscriptionProductRetirementCreate = require("../models/SubscriptionProductRetirementCreate");
var SubscriptionProductState = require("../models/SubscriptionProductState");
var SubscriptionProductVersion = require("../models/SubscriptionProductVersion");
var SubscriptionProductVersionPending = require("../models/SubscriptionProductVersionPending");
var SubscriptionProductVersionRetirement = require("../models/SubscriptionProductVersionRetirement");
var SubscriptionProductVersionRetirementCreate = require("../models/SubscriptionProductVersionRetirementCreate");
var SubscriptionProductVersionState = require("../models/SubscriptionProductVersionState");
var SubscriptionState = require("../models/SubscriptionState");
var SubscriptionSuspension = require("../models/SubscriptionSuspension");
var SubscriptionSuspensionAction = require("../models/SubscriptionSuspensionAction");
var SubscriptionSuspensionCreate = require("../models/SubscriptionSuspensionCreate");
var SubscriptionSuspensionReason = require("../models/SubscriptionSuspensionReason");
var SubscriptionSuspensionState = require("../models/SubscriptionSuspensionState");
var SubscriptionUpdate = require("../models/SubscriptionUpdate");
var SubscriptionUpdateRequest = require("../models/SubscriptionUpdateRequest");
var SubscriptionVersion = require("../models/SubscriptionVersion");
var SubscriptionVersionState = require("../models/SubscriptionVersionState");
var Tax = require("../models/Tax");
var TaxCalculation = require("../models/TaxCalculation");
var TaxClass = require("../models/TaxClass");
var TaxCreate = require("../models/TaxCreate");
var TenantDatabase = require("../models/TenantDatabase");
var TerminalReceiptFetchRequest = require("../models/TerminalReceiptFetchRequest");
var TerminalReceiptFormat = require("../models/TerminalReceiptFormat");
var Token = require("../models/Token");
var TokenVersion = require("../models/TokenVersion");
var TokenVersionState = require("../models/TokenVersionState");
var TokenVersionType = require("../models/TokenVersionType");
var TokenizationMode = require("../models/TokenizationMode");
var TokenizedCardData = require("../models/TokenizedCardData");
var TokenizedCardDataCreate = require("../models/TokenizedCardDataCreate");
var Transaction = require("../models/Transaction");
var TransactionAwareEntity = require("../models/TransactionAwareEntity");
var TransactionComment = require("../models/TransactionComment");
var TransactionCompletionBehavior = require("../models/TransactionCompletionBehavior");
var TransactionCompletionMode = require("../models/TransactionCompletionMode");
var TransactionCompletionRequest = require("../models/TransactionCompletionRequest");
var TransactionCompletionState = require("../models/TransactionCompletionState");
var TransactionEnvironmentSelectionStrategy = require("../models/TransactionEnvironmentSelectionStrategy");
var TransactionGroup = require("../models/TransactionGroup");
var TransactionGroupState = require("../models/TransactionGroupState");
var TransactionInvoiceComment = require("../models/TransactionInvoiceComment");
var TransactionInvoiceReplacement = require("../models/TransactionInvoiceReplacement");
var TransactionInvoiceState = require("../models/TransactionInvoiceState");
var TransactionLineItemVersionCreate = require("../models/TransactionLineItemVersionCreate");
var TransactionLineItemVersionState = require("../models/TransactionLineItemVersionState");
var TransactionState = require("../models/TransactionState");
var TransactionUserInterfaceType = require("../models/TransactionUserInterfaceType");
var TransactionVoidMode = require("../models/TransactionVoidMode");
var TransactionVoidState = require("../models/TransactionVoidState");
var TwoFactorAuthenticationType = require("../models/TwoFactorAuthenticationType");
var User = require("../models/User");
var UserAccountRole = require("../models/UserAccountRole");
var UserSpaceRole = require("../models/UserSpaceRole");
var UserType = require("../models/UserType");
var WalletType = require("../models/WalletType");
var WebAppConfirmationRequest = require("../models/WebAppConfirmationRequest");
var WebAppConfirmationResponse = require("../models/WebAppConfirmationResponse");
var WebhookIdentity = require("../models/WebhookIdentity");
var WebhookListener = require("../models/WebhookListener");
var WebhookListenerEntity = require("../models/WebhookListenerEntity");
var WebhookUrl = require("../models/WebhookUrl");
var AccountCreate = require("../models/AccountCreate");
var AccountUpdate = require("../models/AccountUpdate");
var ApplicationUser = require("../models/ApplicationUser");
var ApplicationUserCreate = require("../models/ApplicationUserCreate");
var ApplicationUserUpdate = require("../models/ApplicationUserUpdate");
var AuthenticatedCardData = require("../models/AuthenticatedCardData");
var Charge = require("../models/Charge");
var ChargeAttempt = require("../models/ChargeAttempt");
var ChargeBankTransaction = require("../models/ChargeBankTransaction");
var ChargeFlowLevel = require("../models/ChargeFlowLevel");
var ChargeFlowLevelPaymentLink = require("../models/ChargeFlowLevelPaymentLink");
var ConnectorInvocation = require("../models/ConnectorInvocation");
var CustomerActive = require("../models/CustomerActive");
var CustomerAddressActive = require("../models/CustomerAddressActive");
var CustomerAddressCreate = require("../models/CustomerAddressCreate");
var CustomerCommentActive = require("../models/CustomerCommentActive");
var CustomerCommentCreate = require("../models/CustomerCommentCreate");
var CustomerCreate = require("../models/CustomerCreate");
var DebtCollectionCaseCreate = require("../models/DebtCollectionCaseCreate");
var DebtCollectionCaseUpdate = require("../models/DebtCollectionCaseUpdate");
var DeliveryIndication = require("../models/DeliveryIndication");
var HumanUserCreate = require("../models/HumanUserCreate");
var HumanUserUpdate = require("../models/HumanUserUpdate");
var InstallmentPaymentSlice = require("../models/InstallmentPaymentSlice");
var InvoiceReconciliationRecord = require("../models/InvoiceReconciliationRecord");
var InvoiceReimbursementWithRefundReference = require("../models/InvoiceReimbursementWithRefundReference");
var PaymentLinkActive = require("../models/PaymentLinkActive");
var PaymentLinkCreate = require("../models/PaymentLinkCreate");
var RefundBankTransaction = require("../models/RefundBankTransaction");
var RefundCommentActive = require("../models/RefundCommentActive");
var RefundCommentCreate = require("../models/RefundCommentCreate");
var RefundRecoveryBankTransaction = require("../models/RefundRecoveryBankTransaction");
var ShopifyRecurringOrder = require("../models/ShopifyRecurringOrder");
var ShopifySubscriptionAddress = require("../models/ShopifySubscriptionAddress");
var ShopifySubscriptionProductCreate = require("../models/ShopifySubscriptionProductCreate");
var ShopifySubscriptionProductUpdate = require("../models/ShopifySubscriptionProductUpdate");
var ShopifyTransaction = require("../models/ShopifyTransaction");
var SpaceCreate = require("../models/SpaceCreate");
var SpaceUpdate = require("../models/SpaceUpdate");
var SubscriberActive = require("../models/SubscriberActive");
var SubscriberCreate = require("../models/SubscriberCreate");
var SubscriptionAffiliateCreate = require("../models/SubscriptionAffiliateCreate");
var SubscriptionAffiliateDeleted = require("../models/SubscriptionAffiliateDeleted");
var SubscriptionAffiliateInactive = require("../models/SubscriptionAffiliateInactive");
var SubscriptionMetricActive = require("../models/SubscriptionMetricActive");
var SubscriptionMetricCreate = require("../models/SubscriptionMetricCreate");
var SubscriptionPending = require("../models/SubscriptionPending");
var SubscriptionProductActive = require("../models/SubscriptionProductActive");
var SubscriptionProductCreate = require("../models/SubscriptionProductCreate");
var SubscriptionSuspensionRunning = require("../models/SubscriptionSuspensionRunning");
var TokenCreate = require("../models/TokenCreate");
var TokenUpdate = require("../models/TokenUpdate");
var TransactionCommentActive = require("../models/TransactionCommentActive");
var TransactionCommentCreate = require("../models/TransactionCommentCreate");
var TransactionCompletion = require("../models/TransactionCompletion");
var TransactionCreate = require("../models/TransactionCreate");
var TransactionInvoice = require("../models/TransactionInvoice");
var TransactionInvoiceCommentActive = require("../models/TransactionInvoiceCommentActive");
var TransactionInvoiceCommentCreate = require("../models/TransactionInvoiceCommentCreate");
var TransactionLineItemVersion = require("../models/TransactionLineItemVersion");
var TransactionPending = require("../models/TransactionPending");
var TransactionVoid = require("../models/TransactionVoid");
var WebhookListenerCreate = require("../models/WebhookListenerCreate");
var WebhookListenerUpdate = require("../models/WebhookListenerUpdate");
var WebhookUrlCreate = require("../models/WebhookUrlCreate");
var WebhookUrlUpdate = require("../models/WebhookUrlUpdate");
var ApplicationUserCreateWithMacKey = require("../models/ApplicationUserCreateWithMacKey");
var SubscriptionAffiliateDeleting = require("../models/SubscriptionAffiliateDeleting");
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data === undefined) {
            return expectedType;
        }
        else if (ObjectSerializer.primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (ObjectSerializer.enumsMap[expectedType]) {
                return expectedType;
            }
            if (!ObjectSerializer.typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = ObjectSerializer.typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    return data[discriminatorProperty]; // use the type given in the discriminator
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data === undefined) {
            return data;
        }
        else if (ObjectSerializer.primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var dataIndex in data) {
                var date = data[dataIndex];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toString();
        }
        else {
            if (ObjectSerializer.enumsMap[type]) {
                return data;
            }
            if (!ObjectSerializer.typeMap[type]) { // in case we dont know the type
                return data;
            }
            // get the map for the correct type.
            var attributeTypes = ObjectSerializer.typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var attributeTypesIndex in attributeTypes) {
                var attributeType = attributeTypes[attributeTypesIndex];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data === undefined) {
            return data;
        }
        else if (ObjectSerializer.primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var dataIndex in data) {
                var date = data[dataIndex];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (ObjectSerializer.enumsMap[type]) { // is Enum
                return data;
            }
            if (!ObjectSerializer.typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new ObjectSerializer.typeMap[type]();
            var attributeTypes = ObjectSerializer.typeMap[type].getAttributeTypeMap();
            for (var attributeTypesIndex in attributeTypes) {
                var attributeType = attributeTypes[attributeTypesIndex];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    /* tslint:disable:no-unused-variable */
    ObjectSerializer.primitives = [
        "string",
        "boolean",
        "double",
        "integer",
        "long",
        "float",
        "number",
        "any"
    ];
    ObjectSerializer.enumsMap = {
        "AccountState": AccountState,
        "AccountType": AccountType,
        "AnalyticsQueryExecutionState": AnalyticsQueryExecutionState,
        "BankAccountEnvironment": BankAccountEnvironment,
        "BankAccountState": BankAccountState,
        "BankTransactionFlowDirection": BankTransactionFlowDirection,
        "BankTransactionState": BankTransactionState,
        "CardAuthenticationResponse": CardAuthenticationResponse,
        "CardAuthenticationVersion": CardAuthenticationVersion,
        "CardCryptogramType": CardCryptogramType,
        "ChargeAttemptEnvironment": ChargeAttemptEnvironment,
        "ChargeAttemptState": ChargeAttemptState,
        "ChargeFlowLevelState": ChargeFlowLevelState,
        "ChargeState": ChargeState,
        "ChargeType": ChargeType,
        "ClientErrorType": ClientErrorType,
        "ConnectorInvocationStage": ConnectorInvocationStage,
        "CreationEntityState": CreationEntityState,
        "CriteriaOperator": CriteriaOperator,
        "CustomerAddressType": CustomerAddressType,
        "CustomersPresence": CustomersPresence,
        "DataCollectionType": DataCollectionType,
        "DebtCollectionCaseState": DebtCollectionCaseState,
        "DebtCollectionEnvironment": DebtCollectionEnvironment,
        "DeliveryIndicationState": DeliveryIndicationState,
        "EntityQueryFilterType": EntityQueryFilterType,
        "EntityQueryOrderByType": EntityQueryOrderByType,
        "Environment": Environment,
        "FailureCategory": FailureCategory,
        "Gender": Gender,
        "InstallmentPaymentSliceState": InstallmentPaymentSliceState,
        "InstallmentPaymentState": InstallmentPaymentState,
        "InvoiceReconciliationRecordRejectionStatus": InvoiceReconciliationRecordRejectionStatus,
        "InvoiceReconciliationRecordState": InvoiceReconciliationRecordState,
        "InvoiceReimbursementState": InvoiceReimbursementState,
        "LabelDescriptorCategory": LabelDescriptorCategory,
        "LineItemType": LineItemType,
        "ManualTaskActionStyle": ManualTaskActionStyle,
        "ManualTaskState": ManualTaskState,
        "OneClickPaymentMode": OneClickPaymentMode,
        "PaymentAppChargeAttemptTargetState": PaymentAppChargeAttemptTargetState,
        "PaymentAppCompletionTargetState": PaymentAppCompletionTargetState,
        "PaymentAppConnectorState": PaymentAppConnectorState,
        "PaymentAppProcessorState": PaymentAppProcessorState,
        "PaymentAppRefundTargetState": PaymentAppRefundTargetState,
        "PaymentAppVoidTargetState": PaymentAppVoidTargetState,
        "PaymentContractState": PaymentContractState,
        "PaymentInitiationAdviceFileState": PaymentInitiationAdviceFileState,
        "PaymentLinkAddressHandlingMode": PaymentLinkAddressHandlingMode,
        "PaymentLinkProtectionMode": PaymentLinkProtectionMode,
        "PaymentPrimaryRiskTaker": PaymentPrimaryRiskTaker,
        "PaymentTerminalConfigurationState": PaymentTerminalConfigurationState,
        "PaymentTerminalConfigurationVersionState": PaymentTerminalConfigurationVersionState,
        "PaymentTerminalLocationState": PaymentTerminalLocationState,
        "PaymentTerminalLocationVersionState": PaymentTerminalLocationVersionState,
        "PaymentTerminalState": PaymentTerminalState,
        "ProductFeeType": ProductFeeType,
        "ProductMeteredTierPricing": ProductMeteredTierPricing,
        "RecurringIndicator": RecurringIndicator,
        "RefundState": RefundState,
        "RefundType": RefundType,
        "ResourceState": ResourceState,
        "RestAddressFormatField": RestAddressFormatField,
        "RoleState": RoleState,
        "ShopifyAdditionalLineItemData": ShopifyAdditionalLineItemData,
        "ShopifyIntegrationPaymentAppVersion": ShopifyIntegrationPaymentAppVersion,
        "ShopifyIntegrationSubscriptionAppVersion": ShopifyIntegrationSubscriptionAppVersion,
        "ShopifyRecurringOrderState": ShopifyRecurringOrderState,
        "ShopifySubscriberState": ShopifySubscriberState,
        "ShopifySubscriptionBillingIntervalUnit": ShopifySubscriptionBillingIntervalUnit,
        "ShopifySubscriptionProductPricingOption": ShopifySubscriptionProductPricingOption,
        "ShopifySubscriptionProductState": ShopifySubscriptionProductState,
        "ShopifySubscriptionState": ShopifySubscriptionState,
        "ShopifySubscriptionSuspensionInitiator": ShopifySubscriptionSuspensionInitiator,
        "ShopifySubscriptionSuspensionState": ShopifySubscriptionSuspensionState,
        "ShopifySubscriptionSuspensionType": ShopifySubscriptionSuspensionType,
        "ShopifySubscriptionVersionItemPriceStrategy": ShopifySubscriptionVersionItemPriceStrategy,
        "ShopifySubscriptionVersionState": ShopifySubscriptionVersionState,
        "ShopifySubscriptionWeekday": ShopifySubscriptionWeekday,
        "ShopifyTransactionState": ShopifyTransactionState,
        "SpaceReferenceState": SpaceReferenceState,
        "SubscriptionChargeProcessingType": SubscriptionChargeProcessingType,
        "SubscriptionChargeState": SubscriptionChargeState,
        "SubscriptionChargeType": SubscriptionChargeType,
        "SubscriptionLedgerEntryState": SubscriptionLedgerEntryState,
        "SubscriptionPeriodBillState": SubscriptionPeriodBillState,
        "SubscriptionProductComponentReferenceState": SubscriptionProductComponentReferenceState,
        "SubscriptionProductState": SubscriptionProductState,
        "SubscriptionProductVersionState": SubscriptionProductVersionState,
        "SubscriptionState": SubscriptionState,
        "SubscriptionSuspensionAction": SubscriptionSuspensionAction,
        "SubscriptionSuspensionReason": SubscriptionSuspensionReason,
        "SubscriptionSuspensionState": SubscriptionSuspensionState,
        "SubscriptionVersionState": SubscriptionVersionState,
        "TaxCalculation": TaxCalculation,
        "TerminalReceiptFormat": TerminalReceiptFormat,
        "TokenVersionState": TokenVersionState,
        "TokenizationMode": TokenizationMode,
        "TransactionCompletionBehavior": TransactionCompletionBehavior,
        "TransactionCompletionMode": TransactionCompletionMode,
        "TransactionCompletionState": TransactionCompletionState,
        "TransactionEnvironmentSelectionStrategy": TransactionEnvironmentSelectionStrategy,
        "TransactionGroupState": TransactionGroupState,
        "TransactionInvoiceState": TransactionInvoiceState,
        "TransactionLineItemVersionState": TransactionLineItemVersionState,
        "TransactionState": TransactionState,
        "TransactionUserInterfaceType": TransactionUserInterfaceType,
        "TransactionVoidMode": TransactionVoidMode,
        "TransactionVoidState": TransactionVoidState,
        "UserType": UserType,
        "WalletType": WalletType
    };
    ObjectSerializer.typeMap = {
        "AbstractAccountUpdate": AbstractAccountUpdate,
        "AbstractApplicationUserUpdate": AbstractApplicationUserUpdate,
        "AbstractCustomerActive": AbstractCustomerActive,
        "AbstractCustomerAddressActive": AbstractCustomerAddressActive,
        "AbstractCustomerCommentActive": AbstractCustomerCommentActive,
        "AbstractDebtCollectionCaseUpdate": AbstractDebtCollectionCaseUpdate,
        "AbstractHumanUserUpdate": AbstractHumanUserUpdate,
        "AbstractPaymentLinkUpdate": AbstractPaymentLinkUpdate,
        "AbstractRefundCommentActive": AbstractRefundCommentActive,
        "AbstractShopifySubscriptionProductUpdate": AbstractShopifySubscriptionProductUpdate,
        "AbstractSpaceUpdate": AbstractSpaceUpdate,
        "AbstractSubscriberUpdate": AbstractSubscriberUpdate,
        "AbstractSubscriptionAffiliateUpdate": AbstractSubscriptionAffiliateUpdate,
        "AbstractSubscriptionMetricUpdate": AbstractSubscriptionMetricUpdate,
        "AbstractSubscriptionProductActive": AbstractSubscriptionProductActive,
        "AbstractTokenUpdate": AbstractTokenUpdate,
        "AbstractTransactionCommentActive": AbstractTransactionCommentActive,
        "AbstractTransactionInvoiceCommentActive": AbstractTransactionInvoiceCommentActive,
        "AbstractTransactionPending": AbstractTransactionPending,
        "AbstractWebhookListenerUpdate": AbstractWebhookListenerUpdate,
        "AbstractWebhookUrlUpdate": AbstractWebhookUrlUpdate,
        "Account": Account,
        "Address": Address,
        "AddressCreate": AddressCreate,
        "AnalyticsQuery": AnalyticsQuery,
        "AnalyticsQueryExecution": AnalyticsQueryExecution,
        "AnalyticsQueryResultBatch": AnalyticsQueryResultBatch,
        "AnalyticsSchemaColumn": AnalyticsSchemaColumn,
        "AnalyticsSchemaTable": AnalyticsSchemaTable,
        "AuthenticatedCardDataCreate": AuthenticatedCardDataCreate,
        "BankAccount": BankAccount,
        "BankAccountType": BankAccountType,
        "BankTransaction": BankTransaction,
        "BankTransactionSource": BankTransactionSource,
        "BankTransactionType": BankTransactionType,
        "CardCryptogram": CardCryptogram,
        "CardCryptogramCreate": CardCryptogramCreate,
        "CardholderAuthentication": CardholderAuthentication,
        "CardholderAuthenticationCreate": CardholderAuthenticationCreate,
        "ChargeFlow": ChargeFlow,
        "ChargeFlowLevelConfiguration": ChargeFlowLevelConfiguration,
        "ChargeFlowLevelConfigurationType": ChargeFlowLevelConfigurationType,
        "ClientError": ClientError,
        "CompletionLineItem": CompletionLineItem,
        "CompletionLineItemCreate": CompletionLineItemCreate,
        "Condition": Condition,
        "ConditionType": ConditionType,
        "CurrencyBankAccount": CurrencyBankAccount,
        "Customer": Customer,
        "CustomerAddress": CustomerAddress,
        "CustomerComment": CustomerComment,
        "CustomerPostalAddress": CustomerPostalAddress,
        "CustomerPostalAddressCreate": CustomerPostalAddressCreate,
        "DatabaseTranslatedString": DatabaseTranslatedString,
        "DatabaseTranslatedStringCreate": DatabaseTranslatedStringCreate,
        "DatabaseTranslatedStringItem": DatabaseTranslatedStringItem,
        "DatabaseTranslatedStringItemCreate": DatabaseTranslatedStringItemCreate,
        "DebtCollectionCase": DebtCollectionCase,
        "DebtCollectionCaseDocument": DebtCollectionCaseDocument,
        "DebtCollectionCaseSource": DebtCollectionCaseSource,
        "DebtCollectionReceipt": DebtCollectionReceipt,
        "DebtCollectionReceiptSource": DebtCollectionReceiptSource,
        "DebtCollector": DebtCollector,
        "DebtCollectorCondition": DebtCollectorCondition,
        "DebtCollectorConditionType": DebtCollectorConditionType,
        "DebtCollectorConfiguration": DebtCollectorConfiguration,
        "DeliveryIndicationDecisionReason": DeliveryIndicationDecisionReason,
        "DocumentTemplate": DocumentTemplate,
        "DocumentTemplateType": DocumentTemplateType,
        "DocumentTemplateTypeGroup": DocumentTemplateTypeGroup,
        "EntityExportRequest": EntityExportRequest,
        "EntityQuery": EntityQuery,
        "EntityQueryFilter": EntityQueryFilter,
        "EntityQueryOrderBy": EntityQueryOrderBy,
        "ExternalTransferBankTransaction": ExternalTransferBankTransaction,
        "FailureReason": FailureReason,
        "Feature": Feature,
        "FeatureCategory": FeatureCategory,
        "HumanUser": HumanUser,
        "InstallmentCalculatedPlan": InstallmentCalculatedPlan,
        "InstallmentCalculatedSlice": InstallmentCalculatedSlice,
        "InstallmentPayment": InstallmentPayment,
        "InstallmentPlanConfiguration": InstallmentPlanConfiguration,
        "InstallmentPlanSliceConfiguration": InstallmentPlanSliceConfiguration,
        "InternalTransferBankTransaction": InternalTransferBankTransaction,
        "InvoiceReconciliationRecordInvoiceLink": InvoiceReconciliationRecordInvoiceLink,
        "InvoiceReconciliationRecordType": InvoiceReconciliationRecordType,
        "InvoiceReimbursement": InvoiceReimbursement,
        "Label": Label,
        "LabelDescriptor": LabelDescriptor,
        "LabelDescriptorGroup": LabelDescriptorGroup,
        "LabelDescriptorType": LabelDescriptorType,
        "LegalOrganizationForm": LegalOrganizationForm,
        "LineItem": LineItem,
        "LineItemAttribute": LineItemAttribute,
        "LineItemAttributeCreate": LineItemAttributeCreate,
        "LineItemCreate": LineItemCreate,
        "LineItemReduction": LineItemReduction,
        "LineItemReductionCreate": LineItemReductionCreate,
        "LocalizedString": LocalizedString,
        "ManualTask": ManualTask,
        "ManualTaskAction": ManualTaskAction,
        "ManualTaskType": ManualTaskType,
        "MetricUsage": MetricUsage,
        "PaymentAdjustment": PaymentAdjustment,
        "PaymentAdjustmentType": PaymentAdjustmentType,
        "PaymentAppChargeAttemptUpdateRequest": PaymentAppChargeAttemptUpdateRequest,
        "PaymentAppCompletionConfiguration": PaymentAppCompletionConfiguration,
        "PaymentAppCompletionConfigurationCreate": PaymentAppCompletionConfigurationCreate,
        "PaymentAppCompletionUpdateRequest": PaymentAppCompletionUpdateRequest,
        "PaymentAppConnector": PaymentAppConnector,
        "PaymentAppConnectorCreationRequest": PaymentAppConnectorCreationRequest,
        "PaymentAppProcessor": PaymentAppProcessor,
        "PaymentAppProcessorCreationRequest": PaymentAppProcessorCreationRequest,
        "PaymentAppRefundConfiguration": PaymentAppRefundConfiguration,
        "PaymentAppRefundConfigurationCreate": PaymentAppRefundConfigurationCreate,
        "PaymentAppRefundUpdateRequest": PaymentAppRefundUpdateRequest,
        "PaymentAppVoidUpdateRequest": PaymentAppVoidUpdateRequest,
        "PaymentConnector": PaymentConnector,
        "PaymentConnectorConfiguration": PaymentConnectorConfiguration,
        "PaymentConnectorFeature": PaymentConnectorFeature,
        "PaymentContract": PaymentContract,
        "PaymentContractType": PaymentContractType,
        "PaymentInformationHash": PaymentInformationHash,
        "PaymentInformationHashType": PaymentInformationHashType,
        "PaymentInitiationAdviceFile": PaymentInitiationAdviceFile,
        "PaymentLink": PaymentLink,
        "PaymentLinkUpdate": PaymentLinkUpdate,
        "PaymentMethod": PaymentMethod,
        "PaymentMethodBrand": PaymentMethodBrand,
        "PaymentMethodConfiguration": PaymentMethodConfiguration,
        "PaymentProcessor": PaymentProcessor,
        "PaymentProcessorConfiguration": PaymentProcessorConfiguration,
        "PaymentTerminal": PaymentTerminal,
        "PaymentTerminalAddress": PaymentTerminalAddress,
        "PaymentTerminalConfiguration": PaymentTerminalConfiguration,
        "PaymentTerminalConfigurationVersion": PaymentTerminalConfigurationVersion,
        "PaymentTerminalDccTransactionSum": PaymentTerminalDccTransactionSum,
        "PaymentTerminalLocation": PaymentTerminalLocation,
        "PaymentTerminalLocationVersion": PaymentTerminalLocationVersion,
        "PaymentTerminalReceiptType": PaymentTerminalReceiptType,
        "PaymentTerminalTransactionSum": PaymentTerminalTransactionSum,
        "PaymentTerminalTransactionSummary": PaymentTerminalTransactionSummary,
        "PaymentTerminalTransactionSummaryFetchRequest": PaymentTerminalTransactionSummaryFetchRequest,
        "PaymentTerminalType": PaymentTerminalType,
        "Permission": Permission,
        "PersistableCurrencyAmount": PersistableCurrencyAmount,
        "PersistableCurrencyAmountUpdate": PersistableCurrencyAmountUpdate,
        "ProductMeteredFee": ProductMeteredFee,
        "ProductMeteredFeeUpdate": ProductMeteredFeeUpdate,
        "ProductMeteredTierFee": ProductMeteredTierFee,
        "ProductMeteredTierFeeUpdate": ProductMeteredTierFeeUpdate,
        "ProductPeriodFee": ProductPeriodFee,
        "ProductPeriodFeeUpdate": ProductPeriodFeeUpdate,
        "ProductSetupFee": ProductSetupFee,
        "ProductSetupFeeUpdate": ProductSetupFeeUpdate,
        "Refund": Refund,
        "RefundComment": RefundComment,
        "RefundCreate": RefundCreate,
        "RenderedDocument": RenderedDocument,
        "RenderedTerminalReceipt": RenderedTerminalReceipt,
        "RenderedTerminalTransactionSummary": RenderedTerminalTransactionSummary,
        "ResourcePath": ResourcePath,
        "RestAddressFormat": RestAddressFormat,
        "RestCountry": RestCountry,
        "RestCountryState": RestCountryState,
        "RestCurrency": RestCurrency,
        "RestLanguage": RestLanguage,
        "Role": Role,
        "SalesChannel": SalesChannel,
        "Scope": Scope,
        "ServerError": ServerError,
        "ShopifyIntegration": ShopifyIntegration,
        "ShopifyRecurringOrderUpdateRequest": ShopifyRecurringOrderUpdateRequest,
        "ShopifySubscriber": ShopifySubscriber,
        "ShopifySubscriberActive": ShopifySubscriberActive,
        "ShopifySubscriberCreation": ShopifySubscriberCreation,
        "ShopifySubscription": ShopifySubscription,
        "ShopifySubscriptionAddressCreate": ShopifySubscriptionAddressCreate,
        "ShopifySubscriptionCreationRequest": ShopifySubscriptionCreationRequest,
        "ShopifySubscriptionModelBillingConfiguration": ShopifySubscriptionModelBillingConfiguration,
        "ShopifySubscriptionModelItem": ShopifySubscriptionModelItem,
        "ShopifySubscriptionModelTaxLine": ShopifySubscriptionModelTaxLine,
        "ShopifySubscriptionProduct": ShopifySubscriptionProduct,
        "ShopifySubscriptionSuspension": ShopifySubscriptionSuspension,
        "ShopifySubscriptionSuspensionCreate": ShopifySubscriptionSuspensionCreate,
        "ShopifySubscriptionUpdateAddressesRequest": ShopifySubscriptionUpdateAddressesRequest,
        "ShopifySubscriptionUpdateRequest": ShopifySubscriptionUpdateRequest,
        "ShopifySubscriptionVersion": ShopifySubscriptionVersion,
        "ShopifySubscriptionVersionItem": ShopifySubscriptionVersionItem,
        "ShopifyTaxLine": ShopifyTaxLine,
        "Space": Space,
        "SpaceAddress": SpaceAddress,
        "SpaceAddressCreate": SpaceAddressCreate,
        "SpaceReference": SpaceReference,
        "SpaceView": SpaceView,
        "StaticValue": StaticValue,
        "Subscriber": Subscriber,
        "SubscriberUpdate": SubscriberUpdate,
        "Subscription": Subscription,
        "SubscriptionAffiliate": SubscriptionAffiliate,
        "SubscriptionAffiliateUpdate": SubscriptionAffiliateUpdate,
        "SubscriptionChangeRequest": SubscriptionChangeRequest,
        "SubscriptionCharge": SubscriptionCharge,
        "SubscriptionChargeCreate": SubscriptionChargeCreate,
        "SubscriptionComponentConfiguration": SubscriptionComponentConfiguration,
        "SubscriptionComponentReferenceConfiguration": SubscriptionComponentReferenceConfiguration,
        "SubscriptionCreateRequest": SubscriptionCreateRequest,
        "SubscriptionLedgerEntry": SubscriptionLedgerEntry,
        "SubscriptionLedgerEntryCreate": SubscriptionLedgerEntryCreate,
        "SubscriptionMetric": SubscriptionMetric,
        "SubscriptionMetricType": SubscriptionMetricType,
        "SubscriptionMetricUpdate": SubscriptionMetricUpdate,
        "SubscriptionMetricUsageReport": SubscriptionMetricUsageReport,
        "SubscriptionMetricUsageReportCreate": SubscriptionMetricUsageReportCreate,
        "SubscriptionPeriodBill": SubscriptionPeriodBill,
        "SubscriptionProduct": SubscriptionProduct,
        "SubscriptionProductComponent": SubscriptionProductComponent,
        "SubscriptionProductComponentGroup": SubscriptionProductComponentGroup,
        "SubscriptionProductComponentGroupUpdate": SubscriptionProductComponentGroupUpdate,
        "SubscriptionProductComponentReference": SubscriptionProductComponentReference,
        "SubscriptionProductComponentUpdate": SubscriptionProductComponentUpdate,
        "SubscriptionProductRetirement": SubscriptionProductRetirement,
        "SubscriptionProductRetirementCreate": SubscriptionProductRetirementCreate,
        "SubscriptionProductVersion": SubscriptionProductVersion,
        "SubscriptionProductVersionPending": SubscriptionProductVersionPending,
        "SubscriptionProductVersionRetirement": SubscriptionProductVersionRetirement,
        "SubscriptionProductVersionRetirementCreate": SubscriptionProductVersionRetirementCreate,
        "SubscriptionSuspension": SubscriptionSuspension,
        "SubscriptionSuspensionCreate": SubscriptionSuspensionCreate,
        "SubscriptionUpdate": SubscriptionUpdate,
        "SubscriptionUpdateRequest": SubscriptionUpdateRequest,
        "SubscriptionVersion": SubscriptionVersion,
        "Tax": Tax,
        "TaxClass": TaxClass,
        "TaxCreate": TaxCreate,
        "TenantDatabase": TenantDatabase,
        "TerminalReceiptFetchRequest": TerminalReceiptFetchRequest,
        "Token": Token,
        "TokenVersion": TokenVersion,
        "TokenVersionType": TokenVersionType,
        "TokenizedCardData": TokenizedCardData,
        "TokenizedCardDataCreate": TokenizedCardDataCreate,
        "Transaction": Transaction,
        "TransactionAwareEntity": TransactionAwareEntity,
        "TransactionComment": TransactionComment,
        "TransactionCompletionRequest": TransactionCompletionRequest,
        "TransactionGroup": TransactionGroup,
        "TransactionInvoiceComment": TransactionInvoiceComment,
        "TransactionInvoiceReplacement": TransactionInvoiceReplacement,
        "TransactionLineItemVersionCreate": TransactionLineItemVersionCreate,
        "TwoFactorAuthenticationType": TwoFactorAuthenticationType,
        "User": User,
        "UserAccountRole": UserAccountRole,
        "UserSpaceRole": UserSpaceRole,
        "WebAppConfirmationRequest": WebAppConfirmationRequest,
        "WebAppConfirmationResponse": WebAppConfirmationResponse,
        "WebhookIdentity": WebhookIdentity,
        "WebhookListener": WebhookListener,
        "WebhookListenerEntity": WebhookListenerEntity,
        "WebhookUrl": WebhookUrl,
        "AccountCreate": AccountCreate,
        "AccountUpdate": AccountUpdate,
        "ApplicationUser": ApplicationUser,
        "ApplicationUserCreate": ApplicationUserCreate,
        "ApplicationUserUpdate": ApplicationUserUpdate,
        "AuthenticatedCardData": AuthenticatedCardData,
        "Charge": Charge,
        "ChargeAttempt": ChargeAttempt,
        "ChargeBankTransaction": ChargeBankTransaction,
        "ChargeFlowLevel": ChargeFlowLevel,
        "ChargeFlowLevelPaymentLink": ChargeFlowLevelPaymentLink,
        "ConnectorInvocation": ConnectorInvocation,
        "CustomerActive": CustomerActive,
        "CustomerAddressActive": CustomerAddressActive,
        "CustomerAddressCreate": CustomerAddressCreate,
        "CustomerCommentActive": CustomerCommentActive,
        "CustomerCommentCreate": CustomerCommentCreate,
        "CustomerCreate": CustomerCreate,
        "DebtCollectionCaseCreate": DebtCollectionCaseCreate,
        "DebtCollectionCaseUpdate": DebtCollectionCaseUpdate,
        "DeliveryIndication": DeliveryIndication,
        "HumanUserCreate": HumanUserCreate,
        "HumanUserUpdate": HumanUserUpdate,
        "InstallmentPaymentSlice": InstallmentPaymentSlice,
        "InvoiceReconciliationRecord": InvoiceReconciliationRecord,
        "InvoiceReimbursementWithRefundReference": InvoiceReimbursementWithRefundReference,
        "PaymentLinkActive": PaymentLinkActive,
        "PaymentLinkCreate": PaymentLinkCreate,
        "RefundBankTransaction": RefundBankTransaction,
        "RefundCommentActive": RefundCommentActive,
        "RefundCommentCreate": RefundCommentCreate,
        "RefundRecoveryBankTransaction": RefundRecoveryBankTransaction,
        "ShopifyRecurringOrder": ShopifyRecurringOrder,
        "ShopifySubscriptionAddress": ShopifySubscriptionAddress,
        "ShopifySubscriptionProductCreate": ShopifySubscriptionProductCreate,
        "ShopifySubscriptionProductUpdate": ShopifySubscriptionProductUpdate,
        "ShopifyTransaction": ShopifyTransaction,
        "SpaceCreate": SpaceCreate,
        "SpaceUpdate": SpaceUpdate,
        "SubscriberActive": SubscriberActive,
        "SubscriberCreate": SubscriberCreate,
        "SubscriptionAffiliateCreate": SubscriptionAffiliateCreate,
        "SubscriptionAffiliateDeleted": SubscriptionAffiliateDeleted,
        "SubscriptionAffiliateInactive": SubscriptionAffiliateInactive,
        "SubscriptionMetricActive": SubscriptionMetricActive,
        "SubscriptionMetricCreate": SubscriptionMetricCreate,
        "SubscriptionPending": SubscriptionPending,
        "SubscriptionProductActive": SubscriptionProductActive,
        "SubscriptionProductCreate": SubscriptionProductCreate,
        "SubscriptionSuspensionRunning": SubscriptionSuspensionRunning,
        "TokenCreate": TokenCreate,
        "TokenUpdate": TokenUpdate,
        "TransactionCommentActive": TransactionCommentActive,
        "TransactionCommentCreate": TransactionCommentCreate,
        "TransactionCompletion": TransactionCompletion,
        "TransactionCreate": TransactionCreate,
        "TransactionInvoice": TransactionInvoice,
        "TransactionInvoiceCommentActive": TransactionInvoiceCommentActive,
        "TransactionInvoiceCommentCreate": TransactionInvoiceCommentCreate,
        "TransactionLineItemVersion": TransactionLineItemVersion,
        "TransactionPending": TransactionPending,
        "TransactionVoid": TransactionVoid,
        "WebhookListenerCreate": WebhookListenerCreate,
        "WebhookListenerUpdate": WebhookListenerUpdate,
        "WebhookUrlCreate": WebhookUrlCreate,
        "WebhookUrlUpdate": WebhookUrlUpdate,
        "ApplicationUserCreateWithMacKey": ApplicationUserCreateWithMacKey,
        "SubscriptionAffiliateDeleting": SubscriptionAffiliateDeleting
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
module.exports = ObjectSerializer;
