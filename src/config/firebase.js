import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyDcRILPdBjdoE8t--7D6esKk2io-c9Z9Wg",
  authDomain: "nft-marketplace-a32b1.firebaseapp.com",
  projectId: "nft-marketplace-a32b1",
  storageBucket: "nft-marketplace-a32b1.firebasestorage.app",
  messagingSenderId: "790448145870",
  appId: "1:790448145870:web:e64503c20a5390143dd79f",
  measurementId: "G-2E2GZGD86L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();