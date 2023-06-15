import {signin} from './Login.js'
const signUpButton = document.querySelector("#sign-up-button");
bindEvents();

function bindEvents() {
  signUpButton.addEventListener('click', (e) => {
  e.preventDefault()
    signup();
  });
}   const signupname = document.getElementById('signup-name');
const signupemail = document.getElementById('signup-email');    
const signuppassword = document.getElementById('signup-password');
function signup() {
    console.log(signupemail)
    SignupFirebase (signupemail.value, signuppassword.value)
}
async function SignupFirebase(signup_email, signup_password) {
    await auth.createUserWithEmailAndPassword(signup_email, signup_password)
        .then(function() {
          auth.onAuthStateChanged((user) => {
            db.collection('users')
              .doc(user.uid)
              .set({
                username: signupname.value,
                email: signupemail.value
              });
          });          
          alert('User Created!');          
        })
        signin(signup_email, signup_password)
}
