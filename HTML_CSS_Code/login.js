const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const retypePassword = document.getElementById('retypePassword');

form.addEventListener('submit', event => {
    event.preventDefault();

    if (validateInputs()) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    return email.includes('@');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const retypePasswordValue = retypePassword.value.trim();

    let isFormValid = true;

    if (usernameValue === '') {
        setError(username, 'Username is required');
        isFormValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isFormValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isFormValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        isFormValid = false;
    } else if (passwordValue.length < 6) {
        setError(password, 'Password must be at least 6 characters.');
        isFormValid = false;
    } else {
        setSuccess(password);
    }

    if (retypePasswordValue === '') {
        setError(retypePassword, 'Please confirm your password');
        isFormValid = false;
    } else if (retypePasswordValue !== passwordValue) {
        setError(retypePassword, "Passwords don't match");
        isFormValid = false;
    } else {
        setSuccess(retypePassword);
    }

    return isFormValid;
};
