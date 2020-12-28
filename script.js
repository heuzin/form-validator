const form = document.getElementById('form');
const password1El = document.getElementById('form1');
const password2El = document.getElementById('form2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Using Contraint APi
    isValid = form.checkValidity();
}

function processFormDate(e) {
    e.preventDefault();
    // Validate Form
    validateForm()
}

// Event Listener
form.addEventListener('submit', processFormDate)