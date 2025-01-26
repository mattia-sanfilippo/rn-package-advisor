# Package Advisor

**Package Advisor** is a mobile application designed to help React Native developers discover and evaluate npm packages easily. With a focus on Material Design 3 principles, the app provides features such as package search, detailed information, and user reviews.

---

## Features
- Browse categories of npm packages curated for React Native.
- Search for packages using a powerful search bar integrated with the npm API.
- View package details, including:
  - Author
  - Description
  - Homepage
  - GitHub repository
  - Version
  - Tags
  - Weekly and monthly downloads
- Write and view reviews for each package.

---

## Installation

Follow these steps to set up and run the project:

### 1. Clone the Repository
```bash
git clone https://github.com/mattia-sanfilippo/rn-package-advisor.git
cd rn-package-advisor
```

### 2. Install Dependencies
```bash
yarn install
```

### 3. Set Up Firebase
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Enable Firestore for database services.
4. Add a new Web App in your Firebase project and obtain the configuration.
5. Create a `.env` file in the base project folder and add the following:
```env
EXPO_PUBLIC_FIREBASE_API_KEY=<YOUR_API_KEY>
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=<YOUR_AUTH_DOMAIN>
EXPO_PUBLIC_FIREBASE_PROJECT_ID=<YOUR_PROJECT_ID>
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=<YOUR_STORAGE_BUCKET>
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<YOUR_MESSAGING_SENDER_ID>
EXPO_PUBLIC_FIREBASE_APP_ID=<YOUR_APP_ID>
```

### 4. Start the Expo Development Server
```bash
expo start
```

### 5. Test the App
1. Use the QR code provided by Expo to test the app on your device.
2. Install the Expo Go app from your app store if you haven’t already.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact
For questions or support, please contact [me@mattiasanfilippo.dev].
