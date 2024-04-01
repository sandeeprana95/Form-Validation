let form = document.querySelector("form");
let overlay = document.getElementById("register-box");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate the form before submission
    if (validateForm()) {
        overlay.style.display = "flex";
    }
});

function validateForm() {
    let firstName = document.getElementById('fName').value.trim();
    let lastName = document.getElementById('lName').value.trim();
    let email = document.getElementById('email').value.trim();
    let studentID = document.getElementById('studentID').value.trim();
    let classSelect = document.getElementById('classSelect').value;

    // Basic validation - check if fields are not empty
    if (firstName === '' || lastName === '' || email === '' || studentID === '' || classSelect === '') {
        alert('All fields are required!');
        return false;
    }

    // Additional validation logic can be added here
    // For example, validate email format, student ID format, etc.

    return true; // Return true if form is valid
}


function onClick(){
    overlay.style.display="none";
}


