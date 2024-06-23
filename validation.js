function validateSignup() {
    const form = document.getElementById('signupForm');
    const username = form.elements['txt'].value;
    const email = form.elements['email'].value;
    const password = form.elements['pswd'].value;
    let isValid = true;
    let errorMessage = '';

    if (!username) {
        isValid = false;
        errorMessage += 'Username is required.\n';
    }

    if (!email) {
        isValid = false;
        errorMessage += 'Email is required.\n';
    } else if (!validateEmail(email)) {
        isValid = false;
        errorMessage += 'Email is not valid.\n';
    }

    if (!password) {
        isValid = false;
        errorMessage += 'Password is required.\n';
    }

    if (!isValid) {
        alert(errorMessage);
    } else {
        alert('Signup successful!');
        // Here you can add the code to submit the form
    }
}

function validateLogin() {
    const form = document.getElementById('loginForm');
    const email = form.elements['email'].value;
    const password = form.elements['pswd'].value;
    let isValid = true;
    let errorMessage = '';

    if (!email) {
        isValid = false;
        errorMessage += 'Email is required.\n';
    } else if (!validateEmail(email)) {
        isValid = false;
        errorMessage += 'Email is not valid.\n';
    }

    if (!password) {
        isValid = false;
        errorMessage += 'Password is required.\n';
    }

    if (!isValid) {
        alert(errorMessage);
    } else {
        alert('Login successful!');
        // Here you can add the code to submit the form
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
