document.getElementById("genderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let genderOptions = document.getElementsByName("gender");
    let genderError = document.getElementById("genderError");
    let selected = false;

    for (let option of genderOptions) {
        if (option.checked) {
            selected = true;
            break;
        }
    }

    if (!selected) {
        genderError.textContent = "Please select a gender.";
    } else {
        genderError.textContent = "submitted successfully!";
    }
});
