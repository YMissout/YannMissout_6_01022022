function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

// Inputs Value
const nameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");

// // Regex
const nameRegex = /^[a-z ,.'-][a-z ,.'-]+$/i;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// div where to insert error text
const errorText = ["texterrorfirstname", "texterrorlastname", "texterroremail"];

// all the error texts
const errorTexts = [
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom",
  "Veuillez entrer 2 caractères ou plus pour le champ du nom",
  "Merci de renseigner une adresse email valide",
];

// function to validate First name, Last name, Email
const validInput = (input, regex, errorTextId, errorText) => {
  let inputValue = input.value;
  if (regex.test(inputValue)) {
    document.getElementById(errorTextId).innerText = "";
    return true;
  } else {
    document.getElementById(errorTextId).innerHTML = errorText;
    return false;
  }
};

// FONCTION DE VALIDATION
// First name
const validate = () => {
  const isFirstNameValid = validInput(
    nameInput,
    nameRegex,
    errorText[0],
    errorTexts[0]
  );
  // Last name
  const isLastNameValid = validInput(
    lastNameInput,
    nameRegex,
    errorText[1],
    errorTexts[1]
  );
  // Email
  const isEmailValid = validInput(
    emailInput,
    emailRegex,
    errorText[2],
    errorTexts[2]
  );

  return isFirstNameValid && isLastNameValid && isEmailValid;
};

// form sending
document.getElementById("send").addEventListener("submit", function (event) {
  event.preventDefault(); // on le met si erreur afin de ne pas envoyé le formulaire

  if (validate(event)) {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    form.reset();
  }
});
