"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5376],{77759:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return p}});var n=a(87462),i=a(63366),m=(a(15007),a(64983)),o=a(91515),s=["components"],r={},d={_frontmatter:r},l=o.Z;function p(e){var t=e.components,a=(0,i.Z)(e,s);return(0,m.mdx)(l,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"adobe-campaign-classic---push-templates"},"Adobe Campaign Classic - push templates"),(0,m.mdx)("p",null,"This document outlines out of the box push templates supported in Adobe Campaign Classic extension."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},(0,m.mdx)("strong",{parentName:"th"},"Template Name")),(0,m.mdx)("th",{parentName:"tr",align:"left"},(0,m.mdx)("strong",{parentName:"th"},"Availability")),(0,m.mdx)("th",{parentName:"tr",align:"left"},(0,m.mdx)("strong",{parentName:"th"},"Description")))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"./basic"},"Basic")),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("strong",{parentName:"td"},"Android")," - v2.1.0+ ",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},"iOS")," - coming soon"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"A basic push notification template. ",(0,m.mdx)("br",null),'Allows setting a title, message body, and optional image, action buttons, and click-through URL. Also supports a "remind me later" functionality which will schedule the notification to be re-delivered at a later time.')),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"./carousel"},"Carousel")),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("strong",{parentName:"td"},"Android")," - v2.1.0+ ",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},"iOS")," - coming soon"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Shows a series of three (3) to five (5) images that scroll on and off the side of the notification. ",(0,m.mdx)("br",null),"Available in ",(0,m.mdx)("inlineCode",{parentName:"td"},"manual")," mode (user must click a button to scroll carousel items) and ",(0,m.mdx)("inlineCode",{parentName:"td"},"auto")," mode (carousel items scroll every five seconds).")))),(0,m.mdx)("h2",{id:"setup"},"Setup"),(0,m.mdx)("p",null,"In order for the SDK to handle these push templates, the application ",(0,m.mdx)("strong",{parentName:"p"},"must")," call ",(0,m.mdx)("inlineCode",{parentName:"p"},"AEPMessagingService.handleRemoteMessage")," from ",(0,m.mdx)("inlineCode",{parentName:"p"},"onMessageReceived")," in the class implementing ",(0,m.mdx)("inlineCode",{parentName:"p"},"FirebaseMessagingService"),"."),(0,m.mdx)("p",null,"Below is an example of where to call the new API:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java"},"public class MyFirebaseMessagingService extends FirebaseMessagingService {\n    @Override\n    public void onMessageReceived(RemoteMessage remoteMessage) {\n        if (AEPMessagingService.handleRemoteMessage(this, remoteMessage)) {\n            // Campaign extension has handled the notification\n        } else {\n            // Handle notification from other sources\n        }\n    }\n}\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-adobe-campaign-classic-push-templates-index-md-d8b0de6eb6dc293a0f86.js.map