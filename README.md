<h1 align="center">
  React Native Group Chat SX 👨🏼‍💻
</h1>

## About LikeMinds

> Businesses are increasingly investing in building communities as they enable P2P value creation, retention, product stickiness and referrals. However, building in-app communities takes years of engineering efforts resulting in most brands either not building a community or building it from scratch on 3rd party platforms.

> LikeMinds is a simple plug and play, highly customisable community infra platform that helps brands build in-app communities in 15 mins. Brands can leverage the platform to build community features like group chats, 1-1 chats, activity feed, event management, resource library quickly without any engineering effort.

## 🔖 Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#Prerequisites)
- [Available Scripts](#project-setup)
- [File Structure](#file-structure)

## Getting Started

## Generating API key

```shell
  1. Go to dashboard.likeminds.community and create your account.
  2. After signup, create a new app and copy the API key from the settings tab in the app.
  3. Copy and save this API key to be used in client-side and backend SDKs for your projects.
  5. The dashboard also helps you to manage the users and the chatroom created
```

## Clone repo

```shell
git clone git@github.com:NateshR/ReactNative-GroupChat-SX.git
```

## 🤔 Prerequisites

NodeJS
https://nodejs.org/en/

## NPM

```shell
`npm install` or `yarn`.
```

## For iOS update podfile

```shell
Run `cd ios && pod install` then `cd ..`
```

## Running your React Native application

# Step 1: Start Metro

```shell
`npx react-native start`
```

If you are using package manager

```shell
Run `npm run start` or `yarn start`
```

# Step 2: Start your application

For iOS (Choose according to your package manager)

```shell
Run `npx react-native run-ios` or `npm run ios` or `yarn ios`
```

For Android(Choose according to your package manager)
```shell
Run `npx react-native run-android` or `npm run android` or `yarn android`
```

## 🙌 For creating builds

### Android

```shell
`npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`
```

For Debug build
```shell
`cd android && ./gradlew assembleDebug`
```

For Release build
```shell
`cd android && ./gradlew assembleRelease`
```

```shell
`cd ..`
```

### iOS

Login as apple developer, create certificates, and then identifiers from developer.apple.com. Integrate that identifier in `Build Identifier` inside `Signing & Capabilities`, that you will find in `XCode`.

Then instead of iphone emulator like `iphone 14` select `any iOS Device`, then from top tab bar in Xcode, you will find `Product` tab. Click on Product > Archieve.

After archeive is done, distribute the app from test flight or adhoc(Diawi).

## 😎 File Structure

```text
src
├── assets                  * Assets that are imported into your components(images, custom svg, etc).
├── App.css                 * Main app styles.
├── App.js                  * Main app component.
├── components              * Components of the projects that are not the main views.
│   └── channelGroups
├── sdkFunctions            * All the common services.
├── index.js                * Entry point of the application.
```
