// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

import serviceAccount from './sjoon-c2d21-25980e650855.json';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDvzye0ggwbhAvXhPGKpAlySrKElDN7I1Q',
  authDomain: 'sjoon-c2d21.firebaseapp.com',
  projectId: 'sjoon-c2d21',
  storageBucket: 'sjoon-c2d21.appspot.com',
  messagingSenderId: '391918616997',
  appId: '1:391918616997:web:9df8b14ac962af1918a84c',
  measurementId: 'G-CJYEPCK1M9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const database = getDatabase(app);
// const bucket = getStorage().bucket();
export { storage, database };
