  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCpej3Br7aYd8v7jBW8iec9jFDd3VdSVwE",
    authDomain: "manava-1cdfa.firebaseapp.com",
    databaseURL: "https://manava-1cdfa-default-rtdb.firebaseio.com",
    projectId: "manava-1cdfa",
    storageBucket: "manava-1cdfa.appspot.com",
    messagingSenderId: "132743588059",
    appId: "1:132743588059:web:5fdcd15a68838bbd5f44fe",
    measurementId: "G-Q1Y0VE1BR9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("SignUp_email");
    var password = document.getElementById("SignUp_password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //Login function
  function  Login(){
    var email = document.getElementById("Login_email");
    var password  = document.getElementById("Login_password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));

  }

  function userMouseOver(){

    document.getElementsByClassName("dropdown").style.display='absolute';
    document.getElementById("userLogo").style.color="green";

  }

  // function userMouseOut(){

  //   document.getElementById("dropdown-content").style.display='none';

  // }  


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
     
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){

      var email = user.email;
      alert("Active user "+email);
      document.getElementById("userLogo").style.display ="list-item";
      document.getElementById("userLogo").style.verticalAlign="middle";
      document.getElementById("head-login-button").style.display = "none";
      document.getElementById("page").style.display = "none";

    }else{
      alert("No Active user Found");
    }
  })