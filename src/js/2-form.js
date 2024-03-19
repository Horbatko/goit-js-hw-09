
let form = document.querySelector(".feedback-form");
let email = form.querySelector('input[name = "email"]');
let textarea  = form.querySelector('textarea[name = "message"]');
const formStateKey = 'feedback-form-state';


function formSubmitHandler(event){
    event.preventDefault();
    let textEmail = email.value.trim();
    let text = textarea.value.trim();

    let infoJSON = JSON.stringify({textEmail, text});

    localStorage.setItem(formStateKey, infoJSON)

    email.value = '';
    textarea.value = '';

    console.log('Saved data:', { textEmail, text });
};


form.addEventListener('submit', formSubmitHandler);

// let jsn =  localStorage.getItem(formStateKey) ?? '';
// try{
//     let data = JSON.parse(jsn);
// textarea.value = data.text;
// form.email.value = data.textEmail
// }
// catch{
//      console.log('No saved')
// }
