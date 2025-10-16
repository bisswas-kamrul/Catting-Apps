import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_cTvtQxMfMhztDn8ElZ0B8-43T27f4ss",
  authDomain: "chattingapp-561c8.firebaseapp.com",
  projectId: "chattingapp-561c8",
  storageBucket: "chattingapp-561c8.firebasestorage.app",
  messagingSenderId: "211229534683",
  appId: "1:211229534683:web:b5bae33e2e0b3806f3dffe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig