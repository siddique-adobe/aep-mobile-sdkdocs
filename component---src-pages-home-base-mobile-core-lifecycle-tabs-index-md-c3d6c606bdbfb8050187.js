"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6044],{40008:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return p},default:function(){return h}});var a=i(87462),t=i(63366),o=(i(15007),i(64983)),l=i(91515),r=["components"],p={},d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},c=d("Variant"),m=d("InlineNestedAlert"),s={_frontmatter:p},u=l.Z;function h(e){var n=e.components,i=(0,t.Z)(e,r);return(0,o.mdx)(u,(0,a.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(c,{platform:"android",task:"add",repeat:"6",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java"},"Java"),(0,o.mdx)("p",null,"Add the Lifecycle extension and its dependency, the ",(0,o.mdx)("a",{parentName:"p",href:"../index.md"},"Mobile Core")," extension to your project using the app's Gradle file."),(0,o.mdx)(m,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,o.mdx)("p",null,"Using dynamic dependency versions is ",(0,o.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,o.mdx)("a",{parentName:"p",href:"../../../resources/manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information.")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"implementation platform('com.adobe.marketing.mobile:sdk-bom:2.+')\nimplementation 'com.adobe.marketing.mobile:core'\nimplementation 'com.adobe.marketing.mobile:lifecycle'\n")),(0,o.mdx)("p",null,"Import the Lifecycle and MobileCore extensions in your application's main activity."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Lifecycle;\n")),(0,o.mdx)(c,{platform:"ios",task:"add",repeat:"8",mdxType:"Variant"}),(0,o.mdx)("p",null,"Add the AEPLifecycle extension and its dependency, the ",(0,o.mdx)("a",{parentName:"p",href:"../index.md"},"Mobile Core")," extension, to your project using Cocoapods."),(0,o.mdx)("p",null,"Add the following pods in your ",(0,o.mdx)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-pod"},"pod 'AEPCore'\npod 'AEPLifecycle'\n")),(0,o.mdx)("p",null,"Import the Lifecycle library:"),(0,o.mdx)("h4",{id:"swift"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPCore\nimport AEPLifecycle\n")),(0,o.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPLifecycle;\n")),(0,o.mdx)(c,{platform:"android",task:"register",repeat:"9",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java-1"},"Java"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Register the Lifecycle extension:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"public class MobileApp extends Application {\n@Override\npublic void onCreate() {\nsuper.onCreate();\n     MobileCore.setApplication(this);\n     List<Class<? extends Extension>> extensions = Arrays.asList(Lifecycle.EXTENSION, ...);\n     MobileCore.registerExtensions(extensions, o -> {\n        // Any other post registration processing\n    });\n  }\n}\n\n")),(0,o.mdx)("ol",{start:2},(0,o.mdx)("li",{parentName:"ol"},"In the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onResume")," function, start the lifecycle data collection:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public void onResume() {\n        MobileCore.setApplication(getApplication());\n        MobileCore.lifecycleStart(null);\n    }\n")),(0,o.mdx)("p",null,"Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your application. We recommend that you call ",(0,o.mdx)("inlineCode",{parentName:"p"},"setApplication"),"in each of your activities."),(0,o.mdx)("ol",{start:3},(0,o.mdx)("li",{parentName:"ol"},"In the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onPause")," function, pause the lifecycle data collection:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public void onPause() {\n        MobileCore.lifecyclePause();\n    }\n")),(0,o.mdx)("p",null,"To ensure accurate session and crash reporting, this call must be added to every activity."),(0,o.mdx)(c,{platform:"ios",task:"register",repeat:"32",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift-1"},"Swift"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Register the Lifecycle extension with the SDK Core by adding the following to your app's ",(0,o.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," delegate method. This will register the extension with Core and begin Lifecycle event processing:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    MobileCore.registerExtensions([Lifecycle.self, ...], {\n        ...\n    }\n}\n")),(0,o.mdx)("ol",{start:2},(0,o.mdx)("li",{parentName:"ol"},"Start Lifecycle data collection by calling ",(0,o.mdx)("inlineCode",{parentName:"li"},"lifecycleStart:")," from within the callback of the ",(0,o.mdx)("inlineCode",{parentName:"li"},"MobileCore.registerExtensions")," method in your app's ",(0,o.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," delegate method.")),(0,o.mdx)("p",null,"If your iOS application supports background capabilities, your ",(0,o.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then ",(0,o.mdx)("inlineCode",{parentName:"p"},"lifecycleStart:")," should only be called when the application state is not equal to ",(0,o.mdx)("inlineCode",{parentName:"p"},"UIApplicationStateBackground"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {\n    let appState = application.applicationState\n    MobileCore.registerExtensions([Lifecycle.self, ...], {\n        if appState != .background {\n        // only start lifecycle if the application is not in the background\n        MobileCore.lifecycleStart(additionalContextData: nil)\n        }\n    }\n}\n")),(0,o.mdx)("ol",{start:3},(0,o.mdx)("li",{parentName:"ol"},"When launched, if your app is resuming from a backgrounded state, iOS might call your ",(0,o.mdx)("inlineCode",{parentName:"li"},"applicationWillEnterForeground:")," delegate method. You also need to call ",(0,o.mdx)("inlineCode",{parentName:"li"},"lifecycleStart:"),", but this time you do not need all of the supporting code that you used in ",(0,o.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:"),":")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"func applicationWillEnterForeground(_ application: UIApplication) {\n    MobileCore.lifecycleStart(additionalContextData: nil)\n}\n")),(0,o.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,o.mdx)("inlineCode",{parentName:"p"},"sceneWillEnterForeground")," method as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"func sceneWillEnterForeground(_ scene: UIScene) {\n    MobileCore.lifecycleStart(additionalContextData: nil)\n}\n")),(0,o.mdx)("p",null,"For more information on handling foregrounding applications with Scenes, refer to Apple's documentation ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground"},"here")),(0,o.mdx)("ol",{start:4},(0,o.mdx)("li",{parentName:"ol"},"When the app enters the background, pause Lifecycle data collection from your app's ",(0,o.mdx)("inlineCode",{parentName:"li"},"applicationDidEnterBackground:")," delegate method:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"func applicationDidEnterBackground(_ application: UIApplication) {\n    MobileCore.lifecyclePause()\n}\n")),(0,o.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,o.mdx)("inlineCode",{parentName:"p"},"sceneDidEnterBackground")," method as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"func sceneDidEnterBackground(_ scene: UIScene) {\n    MobileCore.lifecyclePause()\n}\n")),(0,o.mdx)("p",null,"For more information on handling backgrounding applications with Scenes, refer to Apple's documentation ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background"},"here")),(0,o.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Register the Lifecycle extension with the SDK Core by adding the following to your app's ",(0,o.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," delegate method. This will register the extension with Core and begin Lifecycle event processing:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    // register the lifecycle extension\n[AEPMobileCore registerExtensions:@[AEPMobileLifecycle.class, ...] completion:^{\n    ...\n}];\nreturn YES;\n}\n")),(0,o.mdx)("ol",{start:2},(0,o.mdx)("li",{parentName:"ol"},"Start Lifecycle data collection by calling ",(0,o.mdx)("inlineCode",{parentName:"li"},"lifecycleStart:")," from within the callback of the ",(0,o.mdx)("inlineCode",{parentName:"li"},"AEPMobileCore::registerExtensions:")," method in your app's ",(0,o.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," delegate method.")),(0,o.mdx)("p",null,"If your iOS application supports background capabilities, your ",(0,o.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then ",(0,o.mdx)("inlineCode",{parentName:"p"},"lifecycleStart:")," should only be called when the application state is not equal to ",(0,o.mdx)("inlineCode",{parentName:"p"},"UIApplicationStateBackground"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    // register the lifecycle extension, and begin event processing with Core\n    const UIApplicationState appState = application.applicationState;\n    [AEPMobileCore registerExtensions:@[AEPMobileLifecycle.class, ...] completion:^{\n    // only start lifecycle if the application is not in the background\n    if (appState != UIApplicationStateBackground) {\n        [AEPMobileCore lifecycleStart:nil];\n    }\n    }];\n}\n")),(0,o.mdx)("ol",{start:3},(0,o.mdx)("li",{parentName:"ol"},"When launched, if your app is resuming from a backgrounded state, iOS might call your ",(0,o.mdx)("inlineCode",{parentName:"li"},"applicationWillEnterForeground:")," delegate method. You also need to call ",(0,o.mdx)("inlineCode",{parentName:"li"},"lifecycleStart:"),", but this time you do not need all of the supporting code that you used in ",(0,o.mdx)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:"),":")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (void) applicationWillEnterForeground:(UIApplication *)application {\n    [AEPMobileCore lifecycleStart:nil];\n}\n")),(0,o.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,o.mdx)("inlineCode",{parentName:"p"},"sceneWillEnterForeground")," method as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (void) sceneWillEnterForeground:(UIScene *)scene {\n    [AEPMobileCore lifecycleStart:nil];\n}\n")),(0,o.mdx)("p",null,"For more information on handling foregrounding applications with Scenes, refer to Apple's documentation ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground"},"here")),(0,o.mdx)("ol",{start:4},(0,o.mdx)("li",{parentName:"ol"},"When the app enters the background, pause Lifecycle data collection from your app's ",(0,o.mdx)("inlineCode",{parentName:"li"},"applicationDidEnterBackground:")," delegate method:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (void) applicationDidEnterBackground:(UIApplication *)application {\n    [AEPMobileCore lifecyclePause];\n}\n")),(0,o.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,o.mdx)("inlineCode",{parentName:"p"},"sceneDidEnterBackground")," method as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (void) sceneDidEnterBackground:(UIScene *)scene {\n    [AEPMobileCore lifecyclePause];\n}\n")),(0,o.mdx)("p",null,"For more information on handling backgrounding applications with Scenes, refer to Apple's documentation ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background"},"here")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-home-base-mobile-core-lifecycle-tabs-index-md-c3d6c606bdbfb8050187.js.map