firebase.auth().onAuthStateChanged(function(user)
{
  if (user) 
  {
      // User is signed in 
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  } 
  else 
  {
      // User is not signed in
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  }
});

function login()
{
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) 
    {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("errorMessage");
    });
}

function logout()
{
    firebase.auth().signOut().then(function() 
    {
        // Sign-out successful.
    }).catch(function(error) 
    {
        // An error happened.
    });
}
