---
title: Profile release notes
description: The release notes for the Profile mobile extension.
keywords:
- Profile
- Release notes
---

# Release notes

## March 28, 2025

### React Native UserProfile 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

## March 4, 2025

### Flutter UserProfile 5.0.0

* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

## February 10, 2025

### Android UserProfile 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

## June 6, 2024

### React Native UserProfile 6.0.2

* Updated typescript files to support strict null checks.

## May 13, 2024

### Flutter UserProfile 4.0.2

* Update environment dependencies in pubspec.

## April 24, 2024

### React Native UserProfile 6.0.1

* Added namespace support to the Android module.

## April 23, 2024

### Flutter UserProfile 4.0.1

* Added namespace support to the Android module.

## April 16, 2024

### Flutter UserProfile 4.0.0

Major version update for [User Profile](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepuserprofile) for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

## April 12, 2024

### React Native UserProfile 6.0.0

Major version update for [User Profile](https://github.com/adobe/aepsdk-react-native/tree/main/packages/userprofile) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

## April 1, 2024

### Android UserProfile 3.0.0

Major version update for [User Profile](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the `MobileCore.registerExtensions()` API for registering extensions and initializing the SDK instead.
* Removed deprecated `UserProfile.updateUserAttribute` API. Use the `UserProfile.updateUserAttributes` API instead.
* Removed deprecated `UserProfile.removeUserAttribute` API. Use the `UserProfile.removeUserAttributes` API instead.

## March 20, 2024

### iOS UserProfile 5.0.0

Major version update for [User Profile](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

## March 8, 2024

### iOS UserProfile 4.0.1

* Fix an issue where dependency versions did not have an upper bound restriction.

## July 26, 2023

### Android UserProfile 2.0.1

* Updated POM file with the Apache 2 license.

## Jun 5, 2023

### iOS UserProfile 4.0.0

Major version update for [User Profile](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## Jan 31, 2023

### Android UserProfile 2.0.0

* Major version update for [User Profile](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-userprofile-android).
* The following APIs have been deprecated and will be removed in a future release:

  | Deprecated API | Recommended Alternative |
  | -------------- | ----------------------- |
  | `UserProfile.updateUserAttribute()` | `UserProfile.updateUserAttributes()` |
  | `UserProfile.removeUserAttribute()` | `UserProfile.removeUserAttributes()` |

## Jul 2, 2021

### iOS AEPUserProfile 3.0.1

* Fixed a bug preventing proper data migration when presented with an `app group` .

## Feb 5, 2021

### iOS AEPUserProfile 3.0.0

* Released the brand new Adobe Experience Platform User Profile Swift SDK. It is [open sourced on GitHub](https://github.com/adobe/aepsdk-userprofile-ios).
