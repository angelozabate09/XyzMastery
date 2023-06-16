const userPhoto = document.querySelector("#user-photo");

export async function displayProfile(photo) {
    userPhoto.src = photo ? photo : "./images/blank.jpg";
}