import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBnCUmbQ0bOgvsTdyH8KK8s526PMWSxn6U",
  authDomain: "espresso-2fa24.firebaseapp.com",
  projectId: "espresso-2fa24",
  storageBucket: "espresso-2fa24.appspot.com",
  messagingSenderId: "170925917753",
  appId: "1:170925917753:web:467488e3c6d805f49aafe8",
  measurementId: "G-DPVC03ZL67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
