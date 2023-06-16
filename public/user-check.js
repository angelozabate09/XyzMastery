const logoutButton = document.querySelector("#log-out-button");

auth.onAuthStateChanged((user) => {
    if (user) {
        logoutButton.style.display = "block";
    } else {
        window.location.href = "./Sign-in.html";
    }
});

logoutButton.addEventListener('click', async () => {
    await auth.signOut();
    window.location.href = "./";
});