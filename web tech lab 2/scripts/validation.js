document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
 
    let nameInput = document.getElementById("name").value.trim();
    let errorMessage = document.getElementById("errorMessage");
 
  
    if (nameInput === "") {
        errorMessage.textContent = "Name cannot be empty.";
        return;
    }
 
    let words = nameInput.split(" ");
    if (words.length < 2) {
        errorMessage.textContent = "Name must contain at least two words.";
        return;
    }
 
    if (!/^[a-zA-Z]/.test(nameInput)) {
        errorMessage.textContent = "Name must start with a letter.";
        return;
    }
 
    for (let i = 0; i < nameInput.length; i++) {
        let char = nameInput[i];
        if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z') && char !== '.' && char !== '-' && char !== ' ') {
            errorMessage.textContent = "Name can only contain letters, dot (.), dash (-), and spaces.";
            return;
        }
    }
 
    errorMessage.textContent = "submitted successfully!";
});