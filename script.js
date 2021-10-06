const menu = document.querySelector('.menuMenu');
const menuItems = document.querySelectorAll('.nav-tag');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
closeIcon.style.display = 'none';
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


const data = 
  {
  theme: "Multi-Post Stories",
  button: "X",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
  html: "html",
  ruby:"Ruby on rails",
  css: "css",
  live: "See Live",
  source: "Source Code"
};
// create a section
// const mode = document.querySelector('.model');
// // create a div
// const workDiv = document.createElement('div')
// workDiv.classList.add('work')
// // create a textnode
// const heading = document.createElement('h2');
// const text = document.createTextNode(data.theme)
// console.log(text)
// heading.id = 'js-post-heading';
// console.log(document.getElementById("js-post-heading"));

// heading.appendChild(text);
// workDiv.appendChild(heading);
// // aapend the div in the mode section
// mode.appendChild(workDiv);
// // append the mode in the body document.
// // mode.style.display = 'none';
// document.getElementById("js-post-heading").style.color = 'black'

// document.body.appendChild(mode)

// console.log(mode)