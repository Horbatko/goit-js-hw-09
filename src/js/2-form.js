
let form = document.querySelector(".feedback-form");
let email = form.querySelector('input[name="email"]');
let textarea = form.querySelector('textarea[name="message"]');
const formStateKey = 'feedback-form-state';

function formSubmitHandler(event) {
    event.preventDefault();

    let emailValue = email.value.trim();
    let message = textarea.value.trim();

    if (!emailValue || !message) {
        alert("Please fill in all fields.");
        return;
    }

    let infoJSON = JSON.stringify({ email: emailValue, message: message });

    localStorage.setItem(formStateKey, infoJSON);

    email.value = '';
    textarea.value = '';

    console.log('Saved data:', { emailValue, message });
}

form.addEventListener('submit', formSubmitHandler);


window.addEventListener('load', function() {
    let jsn = localStorage.getItem(formStateKey);
    if (jsn) {
        try {
            let data = JSON.parse(jsn);
            if (data.email !== undefined) {
                email.value = data.email;
            }
            if (data.message !== undefined) {
                textarea.value = data.message;
            }
        } catch (error) {
            console.error('Error parsing saved data:', error);
        }
    }
});
