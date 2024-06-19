import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, googleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAYP1VHYzdC7GtRaGc6doRwEdEYEN9wWnw",
    authDomain: "fabreeq-27e92.firebaseapp.com",
    projectId: "fabreeq-27e92",
    storageBucket: "fabreeq-27e92.appspot.com",
    messagingSenderId: "274863353328",
    appId: "1:274863353328:web:3069308542f08767af0135"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'it';
 const provider =new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click",function(){
alert(50)
})
