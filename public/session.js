const logoutButton = document.querySelector("#log-out-button");
const signInButton = document.querySelector("#sign-in-button");

auth.onAuthStateChanged((user) => {
    if (user) {
        logoutButton.style.display = "block";
    } else {
        signInButton.style.display = "block";
    }
});

logoutButton.addEventListener('click', async () => {
    await auth.signOut();
    window.location.href = "./";
});

signInButton.addEventListener('click', () => {
    window.location.href = "./Sign-in.html";
});