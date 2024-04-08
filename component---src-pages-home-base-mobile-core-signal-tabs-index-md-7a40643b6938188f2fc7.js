"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2508],{5017:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return m},default:function(){return g}});var a=i(87462),o=i(63366),t=(i(15007),i(64983)),r=i(91515),d=["components"],m={},l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.mdx)("div",n)}},p=l("Variant"),s=l("InlineNestedAlert"),c={_frontmatter:m},x=r.Z;function g(e){var n=e.components,i=(0,o.Z)(e,d);return(0,t.mdx)(x,(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)(p,{platform:"android",task:"add",repeat:"8",mdxType:"Variant"}),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},"Add the Signal extension and its dependency, the ",(0,t.mdx)("a",{parentName:"li",href:"../index.md"},"Mobile Core")," extension to your project using the app's Gradle file.")),(0,t.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-kotlin"},'implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))\nimplementation("com.adobe.marketing.mobile:core")\nimplementation("com.adobe.marketing.mobile:signal")\n')),(0,t.mdx)("h4",{id:"groovy"},"Groovy"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-java"},"implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')\nimplementation 'com.adobe.marketing.mobile:core'\nimplementation 'com.adobe.marketing.mobile:signal'\n")),(0,t.mdx)(s,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,t.mdx)("p",null,"Using dynamic dependency versions is ",(0,t.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,t.mdx)("a",{parentName:"p",href:"../../resources/manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information.")),(0,t.mdx)("ol",{start:2},(0,t.mdx)("li",{parentName:"ol"},"Import the Signal and MobileCore extensions in your application's main activity.")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Signal;\n")),(0,t.mdx)(p,{platform:"ios",task:"add",repeat:"8",mdxType:"Variant"}),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},"​Add the AEPSignal extension and it's dependency, the ",(0,t.mdx)("a",{parentName:"li",href:"../index.md"},"Mobile Core")," extension to your project using Cocoapods. Add following pods in your ",(0,t.mdx)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-pod"},"pod 'AEPCore','~> 5.0'\npod 'AEPSignal','~> 5.0'\n")),(0,t.mdx)("ol",{start:2},(0,t.mdx)("li",{parentName:"ol"},"Import the Signal libraries:")),(0,t.mdx)("h4",{id:"swift"},"Swift"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPCore\nimport AEPSignal\n")),(0,t.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPSignal;\n")),(0,t.mdx)(p,{platform:"android",task:"register",repeat:"3",mdxType:"Variant"}),(0,t.mdx)("p",null,"After calling the ",(0,t.mdx)("inlineCode",{parentName:"p"},"setApplication()")," method in the ",(0,t.mdx)("inlineCode",{parentName:"p"},"onCreate()")," method, register the Signal extension."),(0,t.mdx)("h4",{id:"java"},"Java"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-java"},"public class MobileApp extends Application {\n\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        MobileCore.setApplication(this);\n\n        List<Class<? extends Extension>> extensions = Arrays.asList(Signal.EXTENSION, ...);\n        MobileCore.registerExtensions(extensions, o -> {\n            // Any other post registration processing\n        });\n    }\n}\n")),(0,t.mdx)(p,{platform:"ios",task:"register",repeat:"5",mdxType:"Variant"}),(0,t.mdx)("p",null,"In your app's ",(0,t.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions"),", register the Signal extension with Mobile Core:"),(0,t.mdx)("h4",{id:"swift-1"},"Swift"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n     MobileCore.registerExtensions([Signal.self, ...]) {\n       MobileCore.configureWith(appId: "yourAppId")\n       // Any other post registration processing\n     }\n     return true;\n}\n')),(0,t.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [AEPMobileCore registerExtensions:@[AEPMobileSignal.class, ...] completion:^{\n        [AEPMobileCore configureWithAppId: @"yourAppId"];\n        // Any other post registration processing\n    }];\n    return YES;\n }\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-home-base-mobile-core-signal-tabs-index-md-7a40643b6938188f2fc7.js.map