# Getting Started

Follow the [setup](#setup) instructions below to get started with the project. The .firebaserc file must be updated with
the correct project ID. You must also populate `/src/connfig.ts` with the correct Firebase config.

## Template Details

This project was bootstrapped with [Vite](https://vitejs.dev/). It uses [React](https://reactjs.org/)
and [TypeScript](https://www.typescriptlang.org/). It also uses [Firebase](https://firebase.google.com/) for hosting and
analytics. [React Router](https://reactrouter.com/) is used for routing which has a default homepage implemented.

# Infrastructure

## Deployment

### Overview

This static website is deployed to Firebase Hosting. The deployment is done using GitHub Actions. The workflow is
defined in `.github/workflows/firebase-hosting-merge.yml`. The workflow is triggered when a PR is merged to the `main`
branch. The workflow will build the app and deploy it to Firebase Hosting.

Access the Firebase Console [here](https://console.firebase.google.com/u/0/project/dental-rooms-396122/overview).

### Prerequisites

1. Create a new project in Firebase console.
2. Create React app (typescript) with Vite.

### Setup

1. Install Firebase CLI `npm install firebase-tools -D`.
2. Login to Firebase `npx firebase login`.
3. Initialise Firebase Hosting `firebase init hosting`.

### Deploy

#### CLI

To deploy to the main firebase site, run `firebase deploy --only hosting`.

#### GitHub Actions

To deploy using GitHub Actions, simply merge a PR to the `main` branch. The workflow will run and deploy the app to
Firebase Hosting.

## Firebase

### Releases

Firebase charges for storage and bandwidth. To reduce costs, we can limit the number of releases we keep in Firebase.
This can be done by following
the [instructions here](https://firebase.google.com/docs/hosting/manage-hosting-resources#release-storage-settings).

This limit has currently been set to 10 but this may be changed if the project files become larger. We do not want to
exceed the free tier that Firebase supports (10GB).

### Custom Domain

The custom domain can be configured using the
following [instructions](https://firebase.google.com/docs/hosting/custom-domain).

## Firebase Analytics

Firebase Analytics is used to track user behaviour. Default events are logged to provide basic user metrics. Custom
events can be logged by using the `logEvent` function.

### DebugView

In development, analytics are not collected by default. You can enable analytics locally you must debug mode by
installing
the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
and setting `setAnalyticsCollectionEnabled` to `true`. This will log events and activity in the DebugView console.