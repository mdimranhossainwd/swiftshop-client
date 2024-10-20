// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.SWIFT_SHOP_APIKEY,
  authDomain: import.meta.env.SWIFT_SHOP_AUTHDOMAIN,
  projectId: import.meta.env.SWIFT_SHOP_PROJECTID,
  storageBucket: import.meta.env.SWIFT_SHOP_STROGEBUCKET,
  messagingSenderId: import.meta.env.SWIFT_SHOP_MESSAGINGSENDERID,
  appId: import.meta.env.SWIFT_SHOP_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
