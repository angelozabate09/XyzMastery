const googleLoginButton = document.querySelector("#google-button");

googleLoginButton.addEventListener('click', (event) => {
    event.preventDefault();
    signUpWithGoogle();
});

async function signUpWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
  
      await auth.signInWithPopup(provider)
        .then(() => {
            window.location.href = './index.html';
      })
      .catch((error) => {
        console.error(error);
      });
  }