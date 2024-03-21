let form = document.querySelector(".feedback-form");
let email = form.querySelector('input[name="email"]');
let textarea = form.querySelector('textarea[name="message"]');
const formStateKey = 'feedback-form-state';


function saveFormData() {

    let emailValue = email.value.trim() || ''; 
    let message = textarea.value.trim() || '';


    let formData = { email: emailValue, message: message };


    let formDataJSON = JSON.stringify(formData);


    localStorage.setItem(formStateKey, formDataJSON);
}

function loadFormData() {
    let formDataJSON = localStorage.getItem(formStateKey);
    if (formDataJSON) {
        try {
            let formData = JSON.parse(formDataJSON);
            email.value = formData.email || ''; 
            textarea.value = formData.message || ''; 
        } catch (error) {
            console.error('Error parsing saved data:', error);
        }
    }
}


window.addEventListener('load', loadFormData);


email.addEventListener('input', saveFormData);
textarea.addEventListener('input', saveFormData);


function formSubmitHandler(event) {
    event.preventDefault();

    let emailValue = email.value.trim();
    let message = textarea.value.trim();

    if (!emailValue || !message) {
        alert("Please fill in all fields.");
        return;
    }

    localStorage.removeItem(formStateKey);

    console.log('Saved data:', { emailValue, message });

    email.value = '';
    textarea.value = '';
}

form.addEventListener('submit', formSubmitHandler);
