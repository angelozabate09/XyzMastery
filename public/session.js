auth.onAuthStateChanged((user) => {
    if (user) {
        logoutButton.style.display = "block";
    }
});