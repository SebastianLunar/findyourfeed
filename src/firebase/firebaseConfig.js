import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAaM7gNneOFNDq7M_nDPKY0RgLiJCOglYk",
    authDomain: "findyourfood-406b5.firebaseapp.com",
    projectId: "findyourfood-406b5",
    storageBucket: "findyourfood-406b5.appspot.com",
    messagingSenderId: "996445807881",
    appId: "1:996445807881:web:df4aa418bd38746dd6dfd8"
};

const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider()
export const auth = getAuth(app)

export default app