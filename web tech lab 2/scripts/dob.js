document.getElementById("dobForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let day = document.getElementById("day").value.trim();
    let month = document.getElementById("month").value.trim();
    let year = document.getElementById("year").value.trim();
    let dobError = document.getElementById("dobError");

    if (day === "" || month === "" || year === "") {
        dobError.textContent = "Date of Birth cannot be empty.";
        return;
    }

    let d = parseInt(day);
    let m = parseInt(month);
    let y = parseInt(year);

    if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1900 || y > 2016) {
        dobError.textContent = "Enter a valid date (dd: 1-31, mm: 1-12, yyyy: 1900-2016).";
        return;
    }

    dobError.textContent = "submitted successfully!";
});
