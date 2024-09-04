"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6552],{63582:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return h}});var s,t=a(87462),r=a(63366),i=(a(15007),a(64983)),l=a(91515),o=["components"],d={},m=(s="Variant",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:d},g=l.Z;function h(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)(g,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(m,{platform:"android3x",function:"register",repeat:"8",mdxType:"Variant"}),(0,i.mdx)("p",null,"On Android 3.x, you must implement the ",(0,i.mdx)("inlineCode",{parentName:"p"},"PresentationDelegate")," interface to be alerted of in-app message events. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"AEPUIService")," class, which implements the ",(0,i.mdx)("inlineCode",{parentName:"p"},"UIService")," interface, maintains an optional property that holds reference to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"PresentationDelegate"),"."),(0,i.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},"// accessed via the public class ServiceProvider which contains a getter for the UIService implementation\ninterface UIService {\n    fun setPresentationDelegate(presentationDelegate: PresentationDelegate)\n}\n")),(0,i.mdx)("p",null,"On Android 3.x, the custom implementation of ",(0,i.mdx)("inlineCode",{parentName:"p"},"PresentationDelegate")," is registered with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"UIService")," by accessing it using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ServiceProvider"),"."),(0,i.mdx)("h4",{id:"kotlin-1"},"Kotlin"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},"val myPresentationDelegate = CustomDelegate()\nServiceProvider.getInstance().uiService.setPresentationDelegate(myPresentationDelegate)\n")),(0,i.mdx)("h4",{id:"java"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"CustomDelegate myPresentationDelegate = new CustomDelegate();\nServiceProvider.getInstance().getUIService().setPresentationDelegate(myPresentationDelegate);\n")),(0,i.mdx)(m,{platform:"android2x",function:"register",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("p",null,"On Android 2.x and older, the delegate is registered with the Adobe Service Provider. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"ServiceProvider")," class maintains an optional property that holds reference to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"FullscreenMessaageDelegate"),"."),(0,i.mdx)("h4",{id:"java-1"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"// defined in public class ServiceProvider \npublic void setMessageDelegate(MessagingDelegate messageDelegate)\n")),(0,i.mdx)("p",null,"On Android, the delegate is registered with Mobile Core. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"MobileCore")," contains a method to set the",(0,i.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate")," withing the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ServiceProvider")," class."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"CustomDelegate myMessagingDelegate = new CustomDelegate();\n\nMobileCore.setMessagingDelegate(myMessagingDelegate);\n")),(0,i.mdx)(m,{platform:"ios",function:"register",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("p",null,"On iOS, the delegate is registered with Mobile Core. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"MobileCore")," framework maintains an optional property that holds reference to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate"),"."),(0,i.mdx)("h4",{id:"swift"},"Swift"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"/// defined in MobileCore.swift\n@objc public static var messagingDelegate: MessagingDelegate?\n")),(0,i.mdx)("p",null,"Assuming that ",(0,i.mdx)("inlineCode",{parentName:"p"},"InAppMessagingHandler")," is a class that implements ",(0,i.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate"),", execute the following code to set the delegate in ",(0,i.mdx)("inlineCode",{parentName:"p"},"MobileCore"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"let myMessagingDelegate = InAppMessagingHandler()   \n\nMobileCore.messagingDelegate = myMessagingDelegate\n")),(0,i.mdx)(m,{platform:"android3x",function:"messaging-delegate",repeat:"10",mdxType:"Variant"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"PresentationDelegate")," interface extends the ",(0,i.mdx)("inlineCode",{parentName:"p"},"PresentationListener")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"PresentationLever")," interfaces. It is available in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"com.adobe.marketing.mobile.services.ui")," package."),(0,i.mdx)("h4",{id:"presentationdelegate-interface"},"PresentationDelegate interface"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Kotlin")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * A delegate that can be used to observe and control the lifecycle of [Presentation]'s managed by the SDK.\n */\ninterface PresentationDelegate : PresentationListener, PresentationLever\n")),(0,i.mdx)("h4",{id:"presentationlistener-interface"},"PresentationListener interface"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Kotlin")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * A listener for observing the lifecycle of presentations managed by the SDK.\n */\ninterface PresentationListener {\n    /**\n     * Invoked when a the presentable is shown.\n     * @param presentable the [Presentable] that was shown\n     */\n    fun onShow(presentable: Presentable<*>)\n\n    /**\n     * Invoked when a presentable is hidden.\n     * @param presentable the [Presentable] that was hidden\n     */\n    fun onHide(presentable: Presentable<*>)\n\n    /**\n     * Invoked when a presentable is dismissed.\n     * @param presentable the [Presentable] that was dismissed\n     */\n    fun onDismiss(presentable: Presentable<*>)\n\n    /**\n     * Invoked when the content in the presentable is loaded.\n     * @param presentable the [Presentable] into which that was loaded\n     * @param presentationContent optional [PresentationContent] that was loaded into the presentable\n     */\n    fun onContentLoaded(presentable: Presentable<*>, presentationContent: PresentationContent?)\n\n    /**\n     * Defines the types of content that can be loaded into a [Presentable].\n     */\n    sealed class PresentationContent {\n        /**\n         * Content loaded from a URL.\n         * @param url the URL from which the content was loaded\n         */\n        class UrlContent(val url: String) : PresentationContent()\n    }\n}\n")),(0,i.mdx)("h4",{id:"presentationlever-interface"},"PresentationLever interface"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Kotlin")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * A gating mechanism for implementers to restrict the display of a [Presentable] based on specific\n * set of conditions.\n */\ninterface PresentationLever {\n    /**\n     * Returns true if [presentable] can be shown, false otherwise.\n     * @param presentable the [Presentable] to check if it can be shown\n     * @return true if [presentable] can be shown, false otherwise\n     */\n    fun canShow(presentable: Presentable<*>): Boolean\n}\n")),(0,i.mdx)(m,{platform:"android2x",function:"messaging-delegate",repeat:"3",mdxType:"Variant"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate")," interface, which is implemented in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"AEPServices")," framework, is defined below:"),(0,i.mdx)("h4",{id:"java-2"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'/**\n * UI Message delegate which is used to listen for current message lifecycle events and control if\n * the message should be displayed.\n */\npublic interface MessagingDelegate {\n    /**\n     * Invoked when a message is displayed.\n     *\n     * @param message {@link FullscreenMessage} that is being displayed\n     */\n    default void onShow(final FullscreenMessage message) {\n        Log.debug(ServiceConstants.LOG_TAG, "MessagingDelegate", "Fullscreen message shown.");\n    }\n\n    /**\n     * Invoked when a message is dismissed.\n     *\n     * @param message {@link FullscreenMessage} that is being dismissed\n     */\n    default void onDismiss(final FullscreenMessage message) {\n        Log.debug(ServiceConstants.LOG_TAG, "MessagingDelegate", "Fullscreen message dismissed.");\n    }\n\n    /**\n     * Used to determine if a message should be shown.\n     *\n     * @param message {@link FullscreenMessage} that is about to get displayed\n     * @return true if the message should be displayed, false otherwise\n     */\n    boolean shouldShowMessage(final FullscreenMessage message);\n\n    /**\n     * Called when the {@link FullscreenMessage} loads a url.\n     *\n     * @param url {@code String} being loaded by the {@code FullscreenMessage}\n     * @param message {@link FullscreenMessage} loading a url {@code String}\n     */\n    default void urlLoaded(final String url, final FullscreenMessage message) {\n        Log.debug(\n                ServiceConstants.LOG_TAG,\n                "MessagingDelegate",\n                "Fullscreen message loaded url: %s",\n                url);\n    }\n}\n')),(0,i.mdx)(m,{platform:"ios",function:"messaging-delegate",repeat:"3",mdxType:"Variant"}),(0,i.mdx)("p",null,"On iOS, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate")," protocol, which is implemented in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"AEPServices")," framework, is defined below:"),(0,i.mdx)("h4",{id:"swift-1"},"Swift"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"/// UI Message delegate which is used to listen for current message lifecycle events\n@objc(AEPMessagingDelegate)\npublic protocol MessagingDelegate {\n    /// Invoked when a message is displayed\n    /// - Parameters:\n    ///     - message: UIMessaging message that is being displayed\n    @objc(onShow:)\n    func onShow(message: Showable)\n\n    /// Invoked when a message is dismissed\n    /// - Parameters:\n    ///     - message: UIMessaging message that is being dismissed\n    @objc(onDismiss:)\n    func onDismiss(message: Showable)\n\n    /// Used to find whether messages should be shown or not\n    ///\n    /// IMPORTANT! - this method is called on a background thread. \n    /// Any direct interactions with the Message's WKWebView made by the delegate\n    /// should be dispatched back to the main thread.\n    ///\n    /// - Parameters:\n    ///     - message: UIMessaging message that is about to get displayed\n    /// - Returns: true if the message should be shown else false\n    @objc(shouldShowMessage:)\n    func shouldShowMessage(message: Showable) -> Bool\n\n    /// Called when `message` loads a URL\n    /// - Parameters:\n    ///     - url: the `URL` being loaded by the `message`\n    ///     - message: the Message loading a `URL`\n    @objc(urlLoaded:byMessage:)\n    optional func urlLoaded(_ url: URL, byMessage message: Showable)\n}\n")),(0,i.mdx)(m,{platform:"android3x",function:"using-object",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Message")," class has the business logic related to the in-app message to perform actions like sending tracking events on interactions and suppress tracking. The class that implements ",(0,i.mdx)("inlineCode",{parentName:"p"},"PresentationDelegate")," will receive a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Presentable")," object, which is the Mobile Core class containing in-app message view. You will need to get the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Message")," object associated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"Presentable")," object using  the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MessagingUtils.getMessageForPresentable(Presentable)")," ."),(0,i.mdx)("h4",{id:"kotlin-2"},"Kotlin"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},"var currentMessagePresentable: Presentable<InAppMessage>? = null\noverride fun onShow(presentable: Presentable<*>) {\n    if (presentable.getPresentation() !is InAppMessage) {\n        return\n    }\n    currentMessagePresentable = presentable as Presentable<InAppMessage>\n    val message = MessagingUtils.getMessageForPresentable(currentMessagePresentable)\n }\n")),(0,i.mdx)("h4",{id:"java-3"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"Presentable<InAppMessage> currentMessagePresentable = null;\n@Override\npublic void onShow(Presentable<?> presentable) {\n   if (!(presentable.getPresentation() instanceof InAppMessage)) {\n       return;\n   }\n   currentMessagePresentable = (Presentable<InAppMessage>) presentable;\n   Message message = MessagingUtils.getMessageForPresentable(currentMessagePresentable);\n}\n")),(0,i.mdx)(m,{platform:"android2x",function:"using-object",repeat:"4",mdxType:"Variant"}),(0,i.mdx)("p",null,"The user interface methods (except for ",(0,i.mdx)("inlineCode",{parentName:"p"},"onShowFailure()"),") in a ",(0,i.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate")," implementation will be passed an ",(0,i.mdx)("inlineCode",{parentName:"p"},"AEPMessage")," object. An ",(0,i.mdx)("inlineCode",{parentName:"p"},"AEPMessage")," object is the Android Core implementation of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"FullscreenMessage")," interface. It contains a reference to the parent ",(0,i.mdx)("inlineCode",{parentName:"p"},"Message")," class and is your primary way to interact with the message."),(0,i.mdx)("p",null,"A reference to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"AEPMessage")," object can be obtained by calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"fullscreenMessage.getParent()")," . An example of how to access the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Message")," in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onShow")," delegate method can be seen below:"),(0,i.mdx)("h4",{id:"java-4"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@Override\npublic void onShow(FullscreenMessage fullscreenMessage) {\n  Message message = (Message) fullscreenMessage.getParent();\n  System.out.println("message was shown: " + message.id);\n}\n')),(0,i.mdx)(m,{platform:"ios",function:"using-object",repeat:"6",mdxType:"Variant"}),(0,i.mdx)("p",null,"Each of the methods implemented in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate")," will be passed a ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aepsdk-core-ios/blob/main/AEPServices/Sources/ui/Showable.swift"},(0,i.mdx)("inlineCode",{parentName:"a"},"Showable"))," object. In the AEPMessaging SDK, the class implementing ",(0,i.mdx)("inlineCode",{parentName:"p"},"Showable")," is ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aepsdk-core-ios/blob/main/AEPServices/Sources/ui/fullscreen/FullscreenMessage.swift"},(0,i.mdx)("inlineCode",{parentName:"a"},"FullscreenMessage")),". A ",(0,i.mdx)("inlineCode",{parentName:"p"},"FullscreenMessage")," object is wrapped in the ",(0,i.mdx)("a",{parentName:"p",href:"../public-classes-enums.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"Message"))," class, and is your primary way to interact with the message."),(0,i.mdx)("p",null,"To get a reference to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Message")," object:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Convert the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Showable")," message parameter to ",(0,i.mdx)("inlineCode",{parentName:"li"},"FullscreenMessage")),(0,i.mdx)("li",{parentName:"ol"},"Access the ",(0,i.mdx)("inlineCode",{parentName:"li"},"parent")," variable (note that ",(0,i.mdx)("inlineCode",{parentName:"li"},"parent")," is variable defined in ",(0,i.mdx)("inlineCode",{parentName:"li"},"FullscreenMessage+Message.swift"),", an extension in the AEPMessaging framework)")),(0,i.mdx)("p",null,"An example of how to access the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Message")," in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onShow")," delegate method can be seen below:"),(0,i.mdx)("h4",{id:"swift-2"},"Swift"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},'func onShow(message: Showable) {\n    let fullscreenMessage = message as? FullscreenMessage\n    let message = fullscreenMessage?.parent\n    print("message was shown \\(message?.id ?? "undefined")")\n}\n')),(0,i.mdx)(m,{platform:"android3x",function:"controlling-message",repeat:"6",mdxType:"Variant"}),(0,i.mdx)("p",null,"If a custom ",(0,i.mdx)("inlineCode",{parentName:"p"},"PresentationDelegate")," implementation has been set in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"UIService"),", the delegate's ",(0,i.mdx)("inlineCode",{parentName:"p"},"canShow")," method will be called prior to displaying an in-app message for which the end user has qualified. You are responsible for returning ",(0,i.mdx)("inlineCode",{parentName:"p"},"true")," if the message should be shown, or ",(0,i.mdx)("inlineCode",{parentName:"p"},"false")," if the message should be suppressed. If you returned ",(0,i.mdx)("inlineCode",{parentName:"p"},"false")," in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"canShow")," method, you can store a reference to the Message object, and call the show() method on it at a later time."),(0,i.mdx)("p",null,"An example of when you may choose to suppress an in-app message due to the status of some other workflow within the app and show it at a later time upon completion of the other workflow can be seen below:"),(0,i.mdx)("h4",{id:"kotlin-3"},"Kotlin"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},'var currentMessage: Message? = null\nvar anotherWorkflowStatus: String = "inProgress"\n\n// Invoked prior to displaying Presentable to check if it can be shown\n// if true is returned, the Presentable will be shown immediately\n// if false is returned, the message will not be shown\noverride fun canShow(presentable: Presentable<*>): Boolean {\n    // canShow is called for all Presentable types: Alert, FloatingButton, InAppMessage\n    // check the type of Presentable before deciding the return value\n    if (presentable.getPresentation() !is InAppMessage)\n        return true\n\n    if(anotherWorkflowStatus.equals("inProgress")) {\n        val currentMessagePresentable = presentable as Presentable<InAppMessage>\n\n        // optional : hold this reference for later use\n        // access the Message for Presentable<InAppMessage>\n        currentMessage = MessagingUtils.getMessageForPresentable(currentMessagePresentable)\n\n        println("message was suppressed: ${currentMessage?.id}")\n        currentMessage?.track("message suppressed", MessagingEdgeEventType.TRIGGER)\n\n        return false\n    }\n\n    return true\n}\n\n\nfun otherWorkflowFinished() {\n    anotherWorkflowStatus = "complete"\n    currentMessage?.show()\n}\n')),(0,i.mdx)("h4",{id:"java-5"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'Message currentMessage = null;\nString anotherWorkflowStatus = "inProgress";\n\n// Invoked prior to displaying Presentable to check if it can be shown\n// if true is returned, the Presentable will be shown immediately\n// if false is returned, the message will not be shown\n@Override\npublic boolean canShow(Presentable<?> presentable) {\n    // canShow is called for all Presentable types: Alert, FloatingButton, InAppMessage\n    // check the type of Presentable before deciding the return value\n    if (!(presentable.getPresentation() instanceof InAppMessage)) {\n            return true;\n    }\n\n    if(anotherWorkflowStatus.equals("inProgress")) {\n        Presentable<InAppMessage> currentMessagePresentable = (Presentable<InAppMessage>) presentable;\n\n        // optional : hold this reference for later use\n        // access the Message for Presentable<InAppMessage>\n        currentMessage = MessagingUtils.getMessageForPresentable(currentMessagePresentable);\n        if (currentMessage != null) {\n            System.out.println("message was suppressed: " + currentMessage.getId());\n            message.track("message suppressed", MessagingEdgeEventType.TRIGGER);\n        }\n\n        return false;\n    }\n\n    return true;\n}\n\npublic void otherWorkflowFinished() {\n    anotherWorkflowStatus = "complete";\n    if (currentMessage != null) {\n        currentMessage.show();\n    }\n}\n')),(0,i.mdx)(m,{platform:"android2x",function:"controlling-message",repeat:"7",mdxType:"Variant"}),(0,i.mdx)("p",null,"If a custom  ",(0,i.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate")," has been set in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ServiceProvider"),", this delegate's ",(0,i.mdx)("inlineCode",{parentName:"p"},"shouldShowMessage")," method will be called prior to displaying an in-app message for which the end user has qualified. You are responsible for returning ",(0,i.mdx)("inlineCode",{parentName:"p"},"true")," if the message should be shown, or ",(0,i.mdx)("inlineCode",{parentName:"p"},"false")," if the message should be suppressed."),(0,i.mdx)("p",null,"An example of when you may choose to suppress an in-app message due to the status of some other workflow within the app can be seen below:"),(0,i.mdx)("h4",{id:"java-6"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@Override\npublic boolean shouldShowMessage(FullscreenMessage fullscreenMessage) {\n   if (someOtherWorkflowStatus == "inProgress") {\n        return false;\n    }\n    return true;\n}\n')),(0,i.mdx)("p",null,"Another option is to store a reference to the  ",(0,i.mdx)("inlineCode",{parentName:"p"},"FullscreenMessage")," object, and call the ",(0,i.mdx)("inlineCode",{parentName:"p"},"show()")," method on it at a later time."),(0,i.mdx)("p",null,"Continuing with the above example, after you have stored the message that was triggered initially, you can choose to show it upon completion of the other workflow:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'Message currentMessage = null;\nString anotherWorkflowStatus;\n\npublic void otherWorkflowFinished() {\n    anotherWorkflowStatus = "complete";\n    currentMessage.show();\n}\n\n@Override\npublic boolean shouldShowMessage(FullscreenMessage fullscreenMessage) {\n   if (someOtherWorkflowStatus.equals("inProgress")) {\n     // store the current message for later use\n     currentMessage = (Message) fullscreenMessage.getParent();\n     return false;\n   }\n  \n  return true;\n}\n')),(0,i.mdx)(m,{platform:"ios",function:"controlling-message",repeat:"7",mdxType:"Variant"}),(0,i.mdx)("p",null,"If a ",(0,i.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate")," has been provided to ",(0,i.mdx)("inlineCode",{parentName:"p"},"MobileCore"),", the delegate's ",(0,i.mdx)("inlineCode",{parentName:"p"},"shouldShowMessage")," method will be called prior to displaying an in-app message for which the end user has qualified. You are responsible for returning ",(0,i.mdx)("inlineCode",{parentName:"p"},"true")," if the message should be shown, or ",(0,i.mdx)("inlineCode",{parentName:"p"},"false")," if the message should be suppressed."),(0,i.mdx)("p",null,"An example of when you may choose to suppress an in-app message due to the status of some other workflow within the app can be seen below:"),(0,i.mdx)("h4",{id:"swift-3"},"Swift"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},'func shouldShowMessage(message: Showable) -> Bool {\n    if someOtherWorkflowStatus == "inProgress" {\n        return false\n    }\n\n    return true\n}\n')),(0,i.mdx)("p",null,"Another option is to store a reference to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Message")," object, and call the ",(0,i.mdx)("inlineCode",{parentName:"p"},"show()")," method on it at a later time."),(0,i.mdx)("p",null,"Continuing with the above example, after you have stored the message that was triggered initially, you can choose to show it upon completion of the other workflow:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},'var currentMessage: Message?\n\nfunc otherWorkflowFinished() {\n    anotherWorkflowStatus = "complete"\n    currentMessage?.show()\n}\n\nfunc shouldShowMessage(message: Showable) -> Bool {\n    if someOtherWorkflowStatus == "inProgress" {        \n        let fullscreenMessage = message as? FullscreenMessage\n\n        // store the current message for later use\n        currentMessage = fullscreenMessage?.parent\n\n        return false\n    }\n\n    return true\n}\n')))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=55f25406ae3439f77b9c907ddf221cd039602755-9b64c1a9a7efc979fb65.js.map