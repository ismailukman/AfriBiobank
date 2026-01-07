// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCXpQZg_mSU3BuglEhx3gKRjxv1PECOn1Y",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "afribiobank.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "afribiobank",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "afribiobank.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "490987709994",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:490987709994:web:b81e51774938ff2ee00553",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-RNTX2C8P8Q"
};

// Initialize Firebase (singleton pattern to prevent multiple initializations)
let app: FirebaseApp;
let analytics: Analytics | null = null;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;

// Initialize app only if it hasn't been initialized yet
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase services
auth = getAuth(app);
db = getFirestore(app);
storage = getStorage(app);

// Initialize Analytics only on client-side (browser)
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Export Firebase services
export { app, analytics, auth, db, storage };
export default app;
