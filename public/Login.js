export async function signin(Email,Password) {
   auth.signInWithEmailAndPassword(Email,Password)
   .then(() =>{
    alert('Log in Success!')
    window.location.href = './index.html'
   })
}
const loginButton = document.getElementById('login-button')
const email = document.getElementById('login-email')
const password = document.getElementById('login-password')
loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    signin(email.value, password.value)
})