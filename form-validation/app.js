// Form blur event listener
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);
document.getElementById('email').addEventListener('blur', validateEmail);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[A-Za-z]{3,10}$/;
  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZipcode() {
  const zipcode = document.getElementById('zipcode');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if (!re.test(zipcode.value)) {
    zipcode.classList.add('is-invalid');
  } else {
    zipcode.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  // something@somethingelse.someotherthing
  const re = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}