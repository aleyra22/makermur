
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.Ce1xoc0_.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.BNuvjnGa.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.BaCC6gBv.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser-legacy.C-l5hkWY.js","/cdn/shopifycloud/checkout-web/assets/c1/types-UnauthenticatedErrorModalPayload-legacy.OZL07xVs.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.C9balZYm.js","/cdn/shopifycloud/checkout-web/assets/c1/phone-phoneCountryCode-legacy.DluKjJwk.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation-legacy.D5Mew1Tk.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer-legacy.mqPypuUO.js","/cdn/shopifycloud/checkout-web/assets/c1/types-index-legacy.H0bPDR7L.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared-legacy.DAHb3BHk.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion-legacy.Cd8BweVe.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress-legacy.DIVN8h47.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery-legacy.B_PV1U3O.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-getCommonShopPayExternalTelemetryAttributes-legacy.Dknj_xgU.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation-legacy.DDZ98cRi.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-remote-dom-legacy.CftuTIdt.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc-legacy.B4Qs2S-O.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate-legacy.CXKc_wY_.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.BKUX7Nrt.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.JJPz2MBS.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.DxYcPd4j.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks-legacy.BI5rH-ri.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.BldDE3wV.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences-legacy.H7SJkfm1.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed-legacy.Bxc2Htu6.js","/cdn/shopifycloud/checkout-web/assets/c1/CalloutHeader-legacy.CNrWd317.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer-legacy.Dur7cd7R.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.DEyq6zVC.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox-legacy.CvW_wYgQ.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound-legacy.jzfHO1R6.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm-legacy.8-MmJ2M3.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField-legacy.CHIQIPay.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel-legacy.kJUBRu0K.js","/cdn/shopifycloud/checkout-web/assets/c1/CompactChoiceList-legacy.B3JPESS_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad-legacy.wi18Y5Ch.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase-legacy.Nfw-ypq6.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation-legacy.CBZ9-b8Q.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.CmpvuVMi.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index-legacy.8LPlA2Zm.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping-legacy.BBEU1KWf.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.DNJMc-iH.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.B6C7nv9z.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod-legacy.CL3XrzD8.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.BlQYElmI.js","/cdn/shopifycloud/checkout-web/assets/c1/billing-address-hooks-legacy.BTumbmPl.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo-legacy.B2S2fkG5.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine-legacy.B7RVcCyQ.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.I50AbbSe.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.CXn0kF1_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.DNjhLzXG.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment-legacy.0rkOAxiy.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField-legacy.CtALTLl-.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.AsWHtIgK.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.Cc0btgyv.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit-legacy.7wtCiXfW.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner-legacy.BwrSWHzm.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input-legacy.BMl8yVoF.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopCashCheckoutEligibility-legacy.BF9_X6M9.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-constants-legacy.CxiN0GmP.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector-legacy.zSNW3CmH.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.Dzf9J-eS.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.C5jKXzDd.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.DNAH-ngi.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.DTDE77aG.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.BAqBzzgO.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.B2quPgrU.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.CTkSLJqo.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent-legacy.vklV4q5l.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.DQeAfwux.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea-legacy.rH_UxhZt.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.BQ661S3a.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePaypalRowEffects-legacy.lS5F-aPj.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch-legacy.BS5l-H55.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot-legacy.CNh1WqoH.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.COV6csv_.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage-legacy.DAixQ8rT.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  