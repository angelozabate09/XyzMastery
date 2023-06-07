function login(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  
  alert(`Login: Email - ${email}, Password - ${password}`);
  document.getElementById("login-form").reset();
}


function signup(event) {
  event.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  
  alert(`Signup: Name - ${name}, Email - ${email}, Password - ${password}`);
  document.getElementById("signup-form").reset();
}


document.getElementById("login-form").addEventListener("submit", login);
document.getElementById("signup-form").addEventListener("submit", signup);
