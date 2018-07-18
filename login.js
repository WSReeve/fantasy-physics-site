firebase.auth().onAuthStateChanged(function(user) 
{ 
  var user = firebase.auth().currentUser;
  if (user) 
  {
    // User is signed in.
    document.getElementById("user_div").style.display = "initial";
    document.getElementById("login_div").style.display = "none";
  }
  if(user != null)
  {
      var email_id = user.email;
      var email_verified = user.emailVerified;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      
  }
  else 
  {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "initial";
  }
});

function signup()
{

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  
});

function login()
{
   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});
}

function logout()
{
  firebase.auth().signOut();
}
