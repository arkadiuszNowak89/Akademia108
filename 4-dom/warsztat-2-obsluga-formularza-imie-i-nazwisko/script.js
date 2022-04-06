function submitForm(e) {
  e.preventDefault();
  const firstName = document.querySelector('input[name="fname"]').value;
  const lastName = document.querySelector('input[name="lname"]').value;
  console.log(firstName, lastName);
}

document
  .querySelector('input[type="submit"]')
  .addEventListener("click", submitForm);
