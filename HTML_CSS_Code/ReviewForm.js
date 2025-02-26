const form = document.getElementById('reviewForm');
const reviewItems = document.querySelectorAll('.review-item');

form.addEventListener('submit', event => {
    event.preventDefault();

    if (validateInputs()) {
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

const validateInputs = () => {
    let isFormValid = true;
    reviewItems.forEach(item => {
        const itemValue = item.value.trim();
        const itemNumber = parseInt(itemValue, 10);

        if (itemValue === '') {
            setError(item, 'This field is required');
            isFormValid = false;
        } else if (isNaN(itemNumber) || itemNumber < 1 || itemNumber > 10) {
            setError(item, 'Please enter a number between 1 and 10');
            isFormValid = false;
        } else {
            setSuccess(item);
        }
    });

    return isFormValid;
};
