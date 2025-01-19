import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDggwtzFyd8DuYi4QSV3aWOTop9j8YszyA",
  authDomain: "auth-app-41885.firebaseapp.com",
  databaseURL: "https://auth-app-41885-default-rtdb.firebaseio.com",
  projectId: "auth-app-41885",
  storageBucket: "auth-app-41885.appspot.com",
  messagingSenderId: "609649741763",
  appId: "1:609649741763:web:a416cea201f3bb49917776"
};

export const app = initializeApp(firebaseConfig);