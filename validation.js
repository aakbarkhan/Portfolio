const form = document.querySelector('#contact-form');
const warningtxt = document.querySelector('#warningtxt');

form.addEventListener('submit', (event) => {
  const emailstring = document.getElementById('email').value;

  if (emailstring !== emailstring.toLowerCase()) {
    warningtxt.innerHTML = 'Please fill out the email with lower case only. Thank you.';
    event.preventDefault();
  }
});

const formm = document.querySelector('#contact-formm');
const warningtxtt = document.querySelector('#warningtxtt');

formm.addEventListener('submit', (event) => {
  const emailstring = document.getElementById('emaill').value;

  if (emailstring !== emailstring.toLowerCase()) {
    warningtxtt.innerHTML = 'Please fill out the email with lower case only. Thank you.';
    event.preventDefault();
  }
});