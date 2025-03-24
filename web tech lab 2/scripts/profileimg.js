document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userId = document.getElementById("userId").value.trim();
    let picture = document.getElementById("picture").files.length;
    let profileError = document.getElementById("profileError");

    if (userId === "" || isNaN(userId) || parseInt(userId) <= 0) {
        profileError.textContent = "User ID must be a positive number.";
        return;
    }

    if (picture === 0) {
        profileError.textContent = "Please upload a picture.";
        return;
    }

    profileError.textContent = "submitted successfully!";
});
