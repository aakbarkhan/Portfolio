// adds stuffs inside localstorage
function addStorageArr() {
    const name = document.querySelector('#name_input').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    const storObj = { name, email, message };
    const storStr = JSON.stringify(storObj);
    localStorage.setItem('formcont', storStr);
  }
  const formInput = document.querySelectorAll('.form_input');
  formInput.forEach((inp) => {
    inp.addEventListener('input', () => {
      addStorageArr();
    });
  });
  
  if (localStorage.getItem('formcont') !== null) {
    let getformcont = window.localStorage.getItem('formcont');
    getformcont = JSON.parse(getformcont);
    document.querySelector('#name_input').value = getformcont.name;
    document.querySelector('#email').value = getformcont.email;
    document.querySelector('#message').value = getformcont.message;
  }