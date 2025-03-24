document.getElementById("degreeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let checkboxes = document.querySelectorAll('input[name="degree"]:checked');
    let degreeError = document.getElementById("degreeError");

    if (checkboxes.length === 0) {
        degreeError.textContent = "At least one degree must be selected.";
    } else {
        degreeError.textContent = "submitted successfully!";
    }
});
