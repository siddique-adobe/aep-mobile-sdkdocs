import TrackDeeplinkIosAEP from './tabs/migration/track-deeplink/ios-aep.md'
import TrackDeeplinkIosACP from './tabs/migration/track-deeplink/ios-acp.md'

# Migrating to AEPMobileServices reference

This document is a reference comparison of ACPMobileServices(1.x) APIs against their equivalent APIs in AEPMobileServices(3.x).

## Primary `Classes`

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | AEPMobileServices | AEPMobileServices | ACPMobileServices |

## Mobile Services extension APIs

For more information, please read the [Mobile Services API reference](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics-mobile-services/mobileservices-api-reference). FIX LINK

### trackAdobeDeepLink

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### iOS (AEP 3.x)

<TrackDeeplinkIosAEP/>

#### iOS (ACP 2.x)

<TrackDeeplinkIosACP/>