# Firebase Configuration

This directory contains Firebase SDK configuration and initialization.

## Files

- **`firebase.ts`** - Main Firebase configuration and service initialization

## Available Services

```typescript
import { auth, db, storage, analytics } from '@/lib/firebase';
```

- **`auth`** - Firebase Authentication
- **`db`** - Cloud Firestore database
- **`storage`** - Cloud Storage
- **`analytics`** - Google Analytics

## Usage Examples

### Authentication

```typescript
import { auth } from '@/lib/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut 
} from 'firebase/auth';

// Sign in
await signInWithEmailAndPassword(auth, email, password);

// Sign up
await createUserWithEmailAndPassword(auth, email, password);

// Sign out
await signOut(auth);
```

### Firestore Database

```typescript
import { db } from '@/lib/firebase';
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore';

// Get all documents
const querySnapshot = await getDocs(collection(db, 'users'));
querySnapshot.forEach((doc) => {
  console.log(doc.id, doc.data());
});

// Get single document
const docRef = doc(db, 'users', userId);
const docSnap = await getDoc(docRef);

// Add document
await addDoc(collection(db, 'users'), {
  name: 'John Doe',
  email: 'john@example.com'
});

// Update document
await updateDoc(doc(db, 'users', userId), {
  name: 'Jane Doe'
});

// Delete document
await deleteDoc(doc(db, 'users', userId));
```

### Cloud Storage

```typescript
import { storage } from '@/lib/firebase';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';

// Upload file
const storageRef = ref(storage, `images/${filename}`);
await uploadBytes(storageRef, file);

// Get download URL
const url = await getDownloadURL(storageRef);

// Delete file
await deleteObject(storageRef);
```

### Analytics

```typescript
import { analytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

// Log custom event
if (analytics) {
  logEvent(analytics, 'custom_event', {
    parameter: 'value'
  });
}
```

## Environment Variables

Firebase configuration uses environment variables for security. Set these in `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Next.js Compatibility

- Analytics is initialized only on the client side (browser)
- Server-side rendering is fully supported
- Firebase Admin SDK (for server-side) should be configured separately if needed
