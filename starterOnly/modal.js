function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//---------------------------------------------------------------------------------------

//selecting close btn
const modalCloseBtn = document.querySelector(".close");
//binding event listener
modalCloseBtn.addEventListener("click",closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Element selection
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const cgu = document.getElementById("checkbox1");
const form = document.getElementsByName("reserve");


// Validation functions 
function firstNameValidation() {
  if(firstName.value.length <= 2){
      firstName.insertAdjacentHTML('afterend','<p class="error-message">Veuillez entrer 2 caractères ou plus pour le champ du prénom.</p>');
      return false;
  }
  return true;
}
function lastNameValidation() {
  if(lastName.value.length <= 2){
      lastName.insertAdjacentHTML('afterend','<p class="error-message">Veuillez entrer 2 caractères ou plus pour le champ du nom.</p>');
      return false;
  }
  return true;
}
function birthdateValidation() {
  if(birthdate.value == ""){
      birthdate.insertAdjacentHTML('afterend','<p class="error-message">Vous devez entrer votre date de naissance.</p>');
      return false;
  }
  return true;
}
function emailValidation() {
  if(email.value.includes("@") == false){
    email.insertAdjacentHTML('afterend','<p class="error-message">Vous devez entrer un email valide</p>');
    return false;
  }
  return true;
}
function quantityValidation() {
  if( isNaN(parseInt(quantity.value))){
    quantity.insertAdjacentHTML('afterend','<p class="error-message">Vous devez entrer un nombre</p>');
    return false;
  }
  return true;
}
function cguValidation() {
  if(cgu.checked == false){
    let cguError = document.querySelector("[for=checkbox1]");
    cguError.insertAdjacentHTML('afterend', '<p class="error-message">Vous devez vérifier que vous acceptez les termes et conditions.</p>');
    return false;
  }    
  return true;
}
function locationValidation() {
  let locations = document.querySelectorAll('input[type=radio]');  
  for (let location of locations) {
    if(location.checked) {
      return true;
    }
  }
  let locationElement = document.querySelector("[for=location6]")
  locationElement.insertAdjacentHTML('afterend', '<p class="error-message">Vous devez choisir une option.</p>');
  return false;
}


//TODO: toute les validations doivent s'executer et pas s'arreter a la premiere erreur
function formValidation() {

    if(
      firstNameValidation() &&
      lastNameValidation() &&
      emailValidation() &&
      birthdateValidation() &&
      quantityValidation() &&
      locationValidation() &&
      cguValidation()
      ){
        return true;
      }
      return false;
}
function errorMessageCleanUp() {
  let errorMessages = document.querySelectorAll(".error-message");
  for( let message of errorMessages) {
    message.remove();
  }
}

form[0].addEventListener('submit', (e) => {
  e.preventDefault();
  errorMessageCleanUp();
  if(formValidation()) {
    form[0].style.display = "none";
    document.querySelector(".modal-body").insertAdjacentHTML('afterbegin','<p>Merci! Votre réservation a été reçue.</p>')
  }
})

