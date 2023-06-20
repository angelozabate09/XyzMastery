import { displayProfile } from "./display-profile.js";

const logoutButton = document.querySelector("#log-out-button");
const userPhoto = document.querySelector("#user-button");


auth.onAuthStateChanged((user) => {
    if (user) {
        logoutButton.style.display = "block";
        userPhoto.style.display = "block";
        displayProfile(user.photoURL);
    } else {
        window.location.href = "./Sign-in.html";
    }
});

logoutButton.addEventListener('click', async () => {
    await auth.signOut();
    window.location.href = "./";
});