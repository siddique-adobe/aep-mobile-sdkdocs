"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3477],{52777:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return o},default:function(){return x}});var t,i=n(87462),r=n(63366),d=(n(15007),n(64983)),l=n(91515),p=["components"],o={},m=(t="Variant",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),s={_frontmatter:o},c=l.Z;function x(e){var a=e.components,n=(0,r.Z)(e,p);return(0,d.mdx)(c,(0,i.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)(m,{platform:"android",api:"extension-version",repeat:"2",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java"},"Java"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"String mobileServicesExtensionVersion = MobileServices.extensionVersion();\n")),(0,d.mdx)(m,{platform:"ios-aep",api:"extension-version",repeat:"4",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift"},"Swift"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"let mobileServicesExtensionVersion  = AEPMobileServices.extensionVersion()\n")),(0,d.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"NSString *mobileServicesExtensionVersion = [AEPMobileServices extensionVersion];\n")),(0,d.mdx)(m,{platform:"ios-acp",api:"extension-version",repeat:"4",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"NSString *mobileServicesExtensionVersion = [ACPMobileServices extensionVersion];\n")),(0,d.mdx)("h4",{id:"swift-1"},"Swift"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"let mobileServicesExtensionVersion  = ACPMobileServices.extensionVersion()\n")),(0,d.mdx)(m,{platform:"android",api:"track-adobe-deep-link",repeat:"5",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java-1"},"Java"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public static void trackAdobeDeepLink(final Uri uri)\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},'Uri testUri = new Uri.Builder()\n        .scheme("adobelinktest")\n        .appendQueryParameter("a.deeplink.id", "test_deeplinkId")\n        .appendQueryParameter("a.launch.campaign.trackingcode", "code")\n        .appendQueryParameter("test_key", "test_value")        \n        .build();\n\n        MobileServices.trackAdobeDeepLink(testUri);\n')),(0,d.mdx)(m,{platform:"ios-aep",api:"track-adobe-deep-link",repeat:"7",mdxType:"Variant"}),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) trackAdobeDeepLink: (NSURL* _Nonnull) deeplink;\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Swift")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},'let url = URL(string: "adobelinktest://x?a.deeplink.id=test_deeplinkId&a.launch.campaign.trackingcode=code&test_key=test_value")!\nAEPMobileServices.trackAdobeDeepLink(url)\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Objective-C")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},'NSURL* url = [NSURL URLWithString:@"adobelinktest://x?a.deeplink.id=test_deeplinkId&a.launch.campaign.trackingcode=code&test_key=test_value"];\n\n[AEPMobileServices trackAdobeDeepLink:url];\n')),(0,d.mdx)(m,{platform:"ios-acp",api:"track-adobe-deep-link",repeat:"7",mdxType:"Variant"}),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) trackAdobeDeepLink: (NSURL*) url;\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Swift")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},'let url = URL(string: "adobelinktest://x?a.deeplink.id=test_deeplinkId&a.launch.campaign.trackingcode=code&test_key=test_value")!\nACPMobileServices.trackAdobeDeepLink(url)\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Objective-C")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},'NSURL* url = [NSURL URLWithString:@"adobelinktest://x?a.deeplink.id=test_deeplinkId&a.launch.campaign.trackingcode=code&test_key=test_value"];\n\n[ACPMobileServices trackAdobeDeepLink:url];\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-analytics-mobile-services-tabs-api-reference-md-8c39e2ed1d56499c7a92.js.map