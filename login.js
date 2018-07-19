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
     if(errorCode === 'auth/wrong-password')
      {
          alert("Wrong password. Try again.");
      }
      else
      {
          alert(errorMessage);
      }
      console.log(error);
    });
}

function signup()
{
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error)
    {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode == 'auth/email-already-in-use')
        {
            alert("This email already has an account. Please log in.");
        }
        else if(errorCode == 'auth/invalid-email')
        {
            alert("This email address is invalid. Try again.");
        }
        else
        {
            alert(errorMessage);
        }
        console.log(error);
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
