"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3452],{60549:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return d},default:function(){return l}});var i=n(87462),a=n(63366),o=(n(15007),n(64983)),r=n(91515),c=["components"],d={},m={_frontmatter:d},s=r.Z;function l(t){var e=t.components,n=(0,a.Z)(t,c);return(0,o.mdx)(s,(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"displaying-rich-push-notification"},"Displaying rich push notification"),(0,o.mdx)("p",null,"This document details how to handle and display media notification on iOS device for notification generated from Adobe Journey Optimizer."),(0,o.mdx)("p",null,"Follow Apple's documentation to ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/usernotifications/modifying_content_in_newly_delivered_notifications#2942063"},"add a notification service app extension to your project"),". Then use the service app extension to download images or other media attachments for the notification before displaying it on user's iOS device."),(0,o.mdx)("h2",{id:"notification-service-extension-implementation"},"Notification service extension implementation"),(0,o.mdx)("p",null," Notifications from Adobe Journey Optimizer contain a media attachment URL in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"adb_media")," key of the notification payload. Use the service extension to download the media attachment from the URL and attach it to the notification before displaying it on the user's device."),(0,o.mdx)("p",null," Here is an example implementation:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'import UserNotifications\n\nclass NotificationService: UNNotificationServiceExtension {\n\n    var contentHandler: ((UNNotificationContent) -> Void)?\n    var bestAttemptContent: UNMutableNotificationContent?\n\n    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {\n        self.contentHandler = contentHandler\n        bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)\n        \n        // defer this block to be executed to call the callback\n        defer {\n            contentHandler(bestAttemptContent ?? request.content)\n        }\n        \n        guard let attachment = request.adobeAttachment else { return }\n        bestAttemptContent?.attachments = [attachment]\n        \n    }\n    \n    override func serviceExtensionTimeWillExpire() {\n        // Called just before the extension will be terminated by the system.\n        // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.\n        if let contentHandler = contentHandler, let bestAttemptContent =  bestAttemptContent {\n            contentHandler(bestAttemptContent)\n        }\n    }\n\n}\n\nextension UNNotificationRequest {\n    var adobeAttachment: UNNotificationAttachment? {\n        // return nil if the notification does not contain a valid value for adb_media key\n        guard let attachmentString = content.userInfo["adb_media"] as? String else {\n            return nil\n        }\n        \n        // do not attach anything if it is not a valid URL\n        guard let attachmentURL = URL(string: attachmentString) else {\n            return nil\n        }\n        \n        // do not attach anything if the url does not contain downloadable data\n        guard let attachmentData = try? Data(contentsOf: attachmentURL) else {\n            return nil\n        }\n        \n        return try? UNNotificationAttachment(data: attachmentData, options: nil, attachmentURL: attachmentURL)\n    }\n}\n\nextension UNNotificationAttachment {\n\n    /// Convenience initializer to create a UNNotificationAttachment from a URL\n    /// - Parameters:\n    ///  - data: the data to be displayed in the notification\n    ///  - options : options for the attachment\n    ///  - attachmentURL : the URL of the rich media to be displayed in the notification\n    convenience init(data: Data, options: [NSObject: AnyObject]?, attachmentURL: URL) throws {\n        let fileManager = FileManager.default\n        let temporaryFolderURL = URL(fileURLWithPath: NSTemporaryDirectory()).appendingPathComponent(ProcessInfo.processInfo.globallyUniqueString,\n                                                                                                     isDirectory: true)\n        try fileManager.createDirectory(at: temporaryFolderURL, withIntermediateDirectories: true, attributes: nil)\n        var attachmentType : String\n        \n        // determine the attachment type from the url\n        // common format are png, jpg, gif, mp3,  mpeg4, avi, mp4\n        // Reference Apple documentation for supported file types and maximum size : https://developer.apple.com/documentation/usernotifications/unnotificationattachment\n        /// NOTE : Please edit the below code according to the type of rich media notification that your app needs to support\n        attachmentType = ".jpg"\n        \n        let attachmentName = UUID().uuidString + attachmentType\n        let fileURL = temporaryFolderURL.appendingPathComponent(attachmentName)\n        try data.write(to: fileURL)\n        try self.init(identifier: attachmentName, url: fileURL, options: options)\n    }\n    \n}\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-adobe-journey-optimizer-push-notification-ios-display-rich-notifications-md-461e4e49783009703c3e.js.map