document.getElementById("bloodForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let bloodGroup = document.getElementById("bloodGroup").value;
    let bloodError = document.getElementById("bloodError");

    if (bloodGroup === "") {
        bloodError.textContent = "Please select a blood group.";
    } else {
        bloodError.textContent = "submitted successfully!";
    }
});
