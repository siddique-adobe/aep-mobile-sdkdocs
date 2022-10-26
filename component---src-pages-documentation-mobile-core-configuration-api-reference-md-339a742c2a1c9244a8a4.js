"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8724],{9530:function(e,i,n){n.r(i),n.d(i,{_frontmatter:function(){return l},default:function(){return c}});var a=n(87462),t=n(63366),d=(n(15007),n(64983)),o=n(91515),r=n(77608),p=["components"],l={},m=function(e){return function(i){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",i)}},u=m("InlineAlert"),x=m("TabsBlock"),f={_frontmatter:l},s=o.Z;function c(e){var i=e.components,n=(0,t.Z)(e,p);return(0,d.mdx)(s,(0,a.Z)({},f,n,{components:i,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"configuration-api-reference"},"Configuration API reference"),(0,d.mdx)("h2",{id:"clearupdatedconfiguration"},"clearUpdatedConfiguration"),(0,d.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"This API is only available in Android and iOS (AEP 3.x)."),(0,d.mdx)("p",null,"You can clear any programmatic updates made to the configuration via the ",(0,d.mdx)("inlineCode",{parentName:"p"},"clearUpdatedConfiguration")," API. This will clear programmatic updates to configuration made via the ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateConfiguration(configMap)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateConfigurationWith(configDict:)"),"(iOS) API. It will also clear any updates to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"MobilePrivacyStatus"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"PrivacyStatus"),"(iOS)  made via ",(0,d.mdx)("inlineCode",{parentName:"p"},"setPrivacyStatus(privacyStatus)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"setPrivacyStatus(_ status:)"),"(iOS)."),(0,d.mdx)("p",null," Here are some examples of scenarios:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithAppId(appId)"),"(Android)/",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWith(appId:)"),"(iOS) -> ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateConfiguration(configMap)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateConfigurationWith(configDict:)"),"(iOS) -> ",(0,d.mdx)("inlineCode",{parentName:"p"},"clearUpdatedConfiguration()"),": In this example, you end up with the initial configuration set via ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithAppId(appId)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWith(appId:)"),"(iOS)")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithFileInPath(filePath)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWith(filePath:)"),"(iOS) -> ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateConfiguration(configMap)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateConfigurationWith(configDict)"),"(iOS) -> ",(0,d.mdx)("inlineCode",{parentName:"p"},"clearUpdatedConfiguration()"),": In this example, you end up with the initial configuration set via ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithFileInPath(filePath)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWith(filePath:)"),"(iOS)")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithFileInAssets(fileName)"),"(Android) -> ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateConfiguration(configMap)"),"(Android) -> ",(0,d.mdx)("inlineCode",{parentName:"p"},"clearUpdatedConfiguration()"),": In this example, you end up with the initial configuration set via ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithFileInAssets(fileName)"),"(Android)")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithAppId(appId)"),"(Android)/",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWith(appId:)"),"(iOS) or ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithFileInPath(filePath)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWith(filePath:)"),"(iOS) or ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithFileInAssets(fileName)"),"(Android) -> ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateConfiguration(configMap)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateConfigurationWith(configDict)"),"(iOS) -> ",(0,d.mdx)("inlineCode",{parentName:"p"},"clearUpdatedConfiguration()")," -> ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateConfiguration(configMap)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"updateConfigurationWith(configDict)"),"(iOS): In this example, the configuration will be the most recently updated configuration and will not have any keys from the first update unless they are included in the most recent update.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithAppId(appId)"),"(Android)/",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWith(appId:)"),"(iOS) or ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithFileInPath(filePath)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWith(filePath:)"),"(iOS) or ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithFileInAssets(fileName)"),"(Android) -> ",(0,d.mdx)("inlineCode",{parentName:"p"},"setPrivacyStatus(privacyStatus)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"setPrivacyStatus(_ status:)"),"(iOS) -> ",(0,d.mdx)("inlineCode",{parentName:"p"},"clearUpdatedConfiguration()"),": In this example, the configuration will have the initial ",(0,d.mdx)("inlineCode",{parentName:"p"},"MobilePrivacyStatus"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"PrivacyStatus"),"(iOS) set via ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithAppId(appId)"),"(Android)/",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWith(appId:)"),"(iOS) or ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithFileInPath(filePath)"),"(Android)/ ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWith(filePath:)"),"(iOS) or ",(0,d.mdx)("inlineCode",{parentName:"p"},"configureWithFileInAssets(fileName)"),"(Android)."))),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android "),(0,d.mdx)(r.default,{query:"platform=android&api=clear-updated-configuration",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS (AEP 3.x)"),(0,d.mdx)(r.default,{query:"platform=ios-aep&api=clear-updated-configuration",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"configurewithappid"},"configureWithAppID"),(0,d.mdx)("p",null,"This API causes the SDK to download the configuration for the provided app ID and apply the configuration to the current session."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"5",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(r.default,{query:"platform=android&api=configure-with-app-id",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS (AEP 3.x)"),(0,d.mdx)(r.default,{query:"platform=ios-aep&api=configure-with-app-id",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS (ACP 2.x)"),(0,d.mdx)(r.default,{query:"platform=ios-acp&api=configure-with-app-id",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Unity"),(0,d.mdx)(r.default,{query:"platform=unity&api=configure-with-app-id",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Xamarin"),(0,d.mdx)(r.default,{query:"platform=xamarin&api=configure-with-app-id",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"configurewithfileinassets"},"configureWithFileInAssets"),(0,d.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"This API is only available in Android and was added in Android was added in Android Core version 1.7.0."),(0,d.mdx)("p",null,"You can bundle a JSON configuration file in the app's Assets folder to replace or complement the configuration that was downloaded by using the ",(0,d.mdx)("a",{parentName:"p",href:"./index.md#configure-with-app-id-per-environment"},"Configure with App ID per environment")," approach."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(r.default,{query:"platform=android&api=configure-with-file-in-assets",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"configurewithfileinpath"},"configureWithFileInPath"),(0,d.mdx)("p",null,"You can include a bundled JSON configuration file in your app package to replace or complement the configuration that was downloaded by using the ",(0,d.mdx)("a",{parentName:"p",href:"./index.md#configure-with-app-id-per-environment"},"Configure with App ID per environment")," approach."),(0,d.mdx)("p",null,"To pass in a bundled path and file name:"),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"4",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(r.default,{query:"platform=android&api=configure-with-file-in-path",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS (AEP 3.x)"),(0,d.mdx)(r.default,{query:"platform=ios-aep&api=configure-with-file-in-path",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS (ACP 2.x)"),(0,d.mdx)(r.default,{query:"platform=ios-acp&api=configure-with-file-in-path",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Xamarin"),(0,d.mdx)(r.default,{query:"platform=xamarin&api=configure-with-file-in-path",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"extensionversion"},"extensionVersion"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"extensionVersion()")," API returns the version of the Configuration extension."),(0,d.mdx)("p",null,"To get the version of the Configuration extension, use the following code sample:"),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(r.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS (AEP 3.x)"),(0,d.mdx)(r.default,{query:"platform=ios-aep&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS (ACP 2.x)"),(0,d.mdx)(r.default,{query:"platform=ios-acp&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("p",null,"React Native"),(0,d.mdx)(r.default,{query:"platform=react-native&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Flutter"),(0,d.mdx)(r.default,{query:"platform=flutter&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Cordova"),(0,d.mdx)(r.default,{query:"platform=cordova&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Unity"),(0,d.mdx)(r.default,{query:"platform=unity&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Xamarin"),(0,d.mdx)(r.default,{query:"platform=xamarin&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"updateconfiguration"},"updateConfiguration"),(0,d.mdx)("p",null,"You can also update the configuration programmatically by passing configuration keys and values to override the existing configuration."),(0,d.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Keys that are not found on the current configuration are added when this method is followed. Null values are allowed and replace existing configuration values."),(0,d.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Do not use this API to update the ",(0,d.mdx)("inlineCode",{parentName:"p"},"build.environment")," key or any key with an environment prefix, because it can lead to unexpected behaviors. For more information, read ",(0,d.mdx)("a",{parentName:"p",href:"./index.md#environment-aware-configuration-properties"},"Environment-aware configuration properties"),"."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(r.default,{query:"platform=android&api=update-configuration",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS (AEP 3.x)"),(0,d.mdx)(r.default,{query:"platform=ios-aep&api=update-configuration",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS (ACP 2.x)"),(0,d.mdx)(r.default,{query:"platform=ios-acp&api=update-configuration",mdxType:"Tabs"}),(0,d.mdx)("p",null,"React Native"),(0,d.mdx)(r.default,{query:"platform=react-native&api=update-configuration",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Flutter"),(0,d.mdx)(r.default,{query:"platform=flutter&api=update-configuration",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Cordova"),(0,d.mdx)(r.default,{query:"platform=cordova&api=update-configuration",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Unity"),(0,d.mdx)(r.default,{query:"platform=unity&api=update-configuration",mdxType:"Tabs"}),(0,d.mdx)("p",null,"Xamarin"),(0,d.mdx)(r.default,{query:"platform=xamarin&api=update-configuration",mdxType:"Tabs"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-mobile-core-configuration-api-reference-md-339a742c2a1c9244a8a4.js.map