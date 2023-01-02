import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyA9tQlsjwpR_IfePu_hZAcCwcn-g-kbZN0",
    authDomain: "sukinome7.firebaseapp.com",
    projectId: "sukinome7",
    storageBucket: "sukinome7.appspot.com",
    messagingSenderId: "301085896115",
    appId: "1:301085896115:web:d507d8da4442ebc7f5efc6",
    measurementId: "G-4L38XCJSEC",
}

// Initialize Firebase
export const fire = initializeApp(firebaseConfig)
