"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7986],{27993:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return g}});var o,i=t(87462),a=t(63366),r=(t(15007),t(64983)),d=t(91515),m=["components"],p={},l=(o="Variant",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),s={_frontmatter:p},c=d.Z;function g(e){var n=e.components,t=(0,a.Z)(e,m);return(0,r.mdx)(c,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(l,{platform:"android",task:"download",repeat:"7",mdxType:"Variant"}),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Add the Mobile Core and Edge extensions to your project using the app's Gradle file.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"implementation 'com.adobe.marketing.mobile:core:1.+'\nimplementation 'com.adobe.marketing.mobile:edge:1.+'\nimplementation 'com.adobe.marketing.mobile:edgeidentity:1.+'\nimplementation 'com.adobe.marketing.mobile:edgeconsent:1.+' // Recommended when using the setAdvertisingIdentifier API\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Import the Mobile Core and Edge extensions in your Application class.")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Java")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Edge;\nimport com.adobe.marketing.mobile.edge.identity.Identity;\nimport com.adobe.marketing.mobile.edge.consent.Consent;\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kotlin")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},"import com.adobe.marketing.mobile.MobileCore\nimport com.adobe.marketing.mobile.Edge\nimport com.adobe.marketing.mobile.edge.identity.Identity\nimport com.adobe.marketing.mobile.edge.consent.Consent\n")),(0,r.mdx)(l,{platform:"ios-aep",task:"download",repeat:"7",mdxType:"Variant"}),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Add the Mobile Core and Edge extensions to your project using CocoaPods. Add following pods in your ",(0,r.mdx)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"use_frameworks!\ntarget 'YourTargetApp' do\n    pod 'AEPCore'\n    pod 'AEPEdge'\n    pod 'AEPEdgeIdentity'\n    pod 'AEPEdgeConsent' // Recommended when using the setAdvertisingIdentifier API\nend\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Import the Mobile Core and Edge libraries:")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Swift")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"// AppDelegate.swift\nimport AEPCore\nimport AEPEdge\nimport AEPEdgeIdentity\nimport AEPEdgeConsent\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Objective-C")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"// AppDelegate.h\n@import AEPCore;\n@import AEPEdge;\n@import AEPEdgeIdentity;\n@import AEPEdgeConsent;\n")),(0,r.mdx)(l,{platform:"ios-acp",task:"download",repeat:"1",mdxType:"Variant"}),(0,r.mdx)("p",null,"This extension is built on the AEPCore (3.x) and it is not compatible with ACPCore (2.x). Please follow ",(0,r.mdx)("a",{parentName:"p",href:"../migrate-to-swift.md"},"the guide for migrating to the Swift AEPCore"),"."),(0,r.mdx)(l,{platform:"android",task:"register",repeat:"2",mdxType:"Variant"}),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Java")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'public class MobileApp extends Application {\n\n    @Override\n    public void onCreate() {\n      super.onCreate();\n      MobileCore.setApplication(this);\n      try {\n        Edge.registerExtension();\n        Identity.registerExtension();\n        Consent.registerExtension();\n        // Register other extensions here\n        MobileCore.start(new AdobeCallback () {\n            @Override\n            public void call(Object o) {\n                MobileCore.configureWithAppID("yourAppId");\n            }\n        });      \n\n      } catch (Exception e) {\n        ...\n      }\n\n\n    }\n}\n')),(0,r.mdx)(l,{platform:"ios-aep",task:"register",repeat:"4",mdxType:"Variant"}),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Swift")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'// AppDelegate.swift\nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    MobileCore.registerExtensions([Identity.self, Consent.self, Edge.self], {\n    MobileCore.configureWith(appId: "yourLaunchEnvironmentID")\n  })\n  ...\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Objective-C")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},'// AppDelegate.m\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [AEPMobileCore registerExtensions:@[AEPMobileEdgeIdentity.class, AEPMobileEdgeConsent.class, AEPMobileEdge.class] completion:^{\n    ...\n  }];\n  [AEPMobileCore configureWithAppId: @"yourLaunchEnvironmentID"];\n  ...\n}\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-identity-for-edge-network-tabs-index-md-2d39f4943956a3d1cb7f.js.map