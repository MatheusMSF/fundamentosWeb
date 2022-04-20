let email = document.querySelector('#email');

let txtEmail = document.querySelector('#txtEmail');
txtEmail.innerHTML = '&nbsp;';



function validaEmail() {
   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
     email.style.borderBottomColor = 'red';
     txtEmail.innerHTML = 'email inválido';

   } else {
     email.style.borderBottomColor = 'green';
     txtEmail.innerHTML = 'email válido';
   }
 }