"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6067],{29425:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return p}});var a=n(87462),r=n(63366),s=(n(15007),n(64983)),o=n(91515),i=["components"],d={},l={_frontmatter:d},m=o.Z;function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.mdx)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"validation"},"Validation"),(0,s.mdx)("p",null,"The Adobe Experience Platform Edge extension is integrated with Adobe Assurance mobile extension to allow for request-response events inspection and provides rich verbose logging that can be used when verifying your mobile implementation."),(0,s.mdx)("h2",{id:"adobe-experience-platform-sdk-logging"},"Adobe Experience Platform SDK Logging"),(0,s.mdx)("p",null,"The Adobe Experience Platform Mobile SDK and the AEP Edge extension allow for detailed debugging in debug or test environments when using Verbose or Debug Log level. To enable this and see the log messages in your IDE set the verbose/trace mode for ",(0,s.mdx)("a",{parentName:"p",href:"../getting-started/enable-debug-logging.md#debug-logging"},"MobileCore logging"),"."),(0,s.mdx)("h2",{id:"inspect-experience-events-with-adobe-experience-platform-assurance"},"Inspect Experience events with Adobe Experience Platform Assurance"),(0,s.mdx)("p",null,"While the log messages can be quite helpful for an application developer, inspecting the events in the ",(0,s.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/assurance/"},"Assurance UI")," is even easier. In just a few steps, you can view the timestamp ordered list of all the events generated by the AEP Edge mobile extension, along with the confirmation that the request was successfully processed by the AEP Edge Network."),(0,s.mdx)("p",null,"To use Assurance, follow the ",(0,s.mdx)("a",{parentName:"p",href:"../platform-assurance/index.md"},"Using Assurance")," instructions."),(0,s.mdx)("h3",{id:"event-types-handled-by-the-aep-edge-extension"},"Event types handled by the AEP Edge extension"),(0,s.mdx)("p",null,"Here is a list of the events currently supported by the AEP Edge extension, that can be seen in the Assurance UI:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("em",{parentName:"li"},"AEP Request Event"),": represents the experience event sent through the AEP Edge extension and contains the XDM and free-form data."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("em",{parentName:"li"},"AEP Response Event Handle"),": represents the event handle received from Experience Edge in response to an AEP Request Event."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("em",{parentName:"li"},"AEP Error Response"),": you may see this error event in case of an error with the XDM payload sent to Experience Edge or if a server-side error is returned for other reasons."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("em",{parentName:"li"},"service"),": this event is published by the Experience Edge Network servers and allows you to validate that the experience event was sent successfully to the services, along with the payload attached to the request, configId used, requestId etc. Examples:",(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"The service events published by ",(0,s.mdx)("inlineCode",{parentName:"li"},"com.adobe.edge.konductor")," indicate that a network request was received by the Edge Network."),(0,s.mdx)("li",{parentName:"ul"},"The service events published by ",(0,s.mdx)("inlineCode",{parentName:"li"},"com.adobe.streaming.validation")," indicate if the event passed the XDM format validation based on the schema defined in Adobe Experience Platform. This can help you debug parameter type errors, incorrect parameter names and other errors.")))),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Hint:")," If you want to filter out only the events handled by the AEP Edge extension, you can type one of the event names listed above in the ",(0,s.mdx)("strong",{parentName:"p"},"Search Events")," input field from the Session View."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-edge-network-validation-md-3626be09af6f787d3ddb.js.map