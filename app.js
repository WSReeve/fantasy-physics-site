<!DOCTYPE html> 
<html>
  <head>
   <meta charset="utf-8">
    <script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase-functions.js"></script>
    <script>
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDDolu-qeP-GifEf8DTWmrwHcVG1Kzpwwg",
    authDomain: "fantasy-physics.firebaseapp.com",
    databaseURL: "https://fantasy-physics.firebaseio.com",
    projectId: "fantasy-physics",
    storageBucket: "fantasy-physics.appspot.com",
    messagingSenderId: "735145306132"
  };
  firebase.initializeApp(config);
   </script>
     <script src="https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.js"></script>
<link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.css" />
// Get elements
      var txtEmail = document.getElementById('txtEmail');
      var txtPassword = document.getElementById('txtPassword');
      var btnSignUp = document.getElementById('btnSignUp');
    
    // Add signup event
    btnSignUp.addEventListener('click', e => {
    // Get email and pass
    // CHECK FOR REAL EMAIL HERE
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign In
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    });
    
    // Add realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
        {
            console.log(firebaseUser);
        }
      else
        {
            console.log('not logged in');
        }
    });
