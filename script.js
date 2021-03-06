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
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

// mobile popup
const data = [
  {
    title: 'Multi-Post stories',
    image: 'assets/SnapshootPortfolio.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh. Velit aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.Fames ac turpis egestas integer eget aliquet nibh praesent tristique.',

    languages: ['html', 'css', 'javaScript', 'github', 'Ruby on rails', 'Bootstrap'],
    live: 'See Live',
    source: 'See Source',
  },
  {
    title: 'Google',
    image: 'assets/SnapshootPortfolio.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh. Velit aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.Fames ac turpis egestas integer eget aliquet nibh praesent tristique.',
    languages: ['html', 'css', 'javaScript', 'github', 'Ruby on rails', 'Bootstrap'],
    live: 'See Live',
    source: 'See Source',
  },
  {
    title: 'Facebook',
    image: 'assets/SnapshootPortfolio.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh. Velit aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.Fames ac turpis egestas integer eget aliquet nibh praesent tristique.',
    languages: ['html', 'css', 'javaScript', 'github', 'Ruby on rails', 'Bootstrap'],
    live: 'See Live',
    source: 'See Source',
  },
  {
    title: 'Portfolio',
    image: 'assets/SnapshootPortfolio.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh. Velit aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.Fames ac turpis egestas integer eget aliquet nibh praesent tristique.',
    languages: ['html', 'css', 'javaScript', 'github', 'Ruby on rails', 'Bootstrap'],
    live: 'See Live',
    source: 'See Source',
  },
];

function cardGenerate(data) {
  const page = document.createElement('div');
  page.className = 'modelPage';

  const title = document.createElement('h2');
  title.className = 'port-title';
  const span = document.createElement('button');
  span.className = 'closebtn';
  const img = document.createElement('img');
  const para = document.createElement('p');
  const lang = document.createElement('div');
  lang.className = 'frameworks';
  const ul = document.createElement('ul');
  ul.className = 'lang-pop';
  const list1 = document.createElement('li');
  list1.className = 'add-border';
  const list2 = document.createElement('li');
  list2.className = 'add-border';
  const list3 = document.createElement('li');
  list3.className = 'add-border';

  const btnnice = document.createElement('div');
  btnnice.className = 'live-source';
  const btn1 = document.createElement('button');
  btn1.className = 'live';

  const btn2 = document.createElement('button');
  btn2.className = 'source';

  page.appendChild(title);
  page.appendChild(span);
  page.appendChild(img);
  page.appendChild(para);
  page.appendChild(lang);
  lang.appendChild(ul);
  ul.appendChild(list1);
  ul.appendChild(list2);
  ul.appendChild(list3);
  btnnice.appendChild(btn1);
  btnnice.appendChild(btn2);
  page.appendChild(btnnice);

  img.src = data[0].image;
  img.className = 'project-image';
  title.innerText = data[0].title;
  span.innerText = 'x';

  para.innerText = data[0].text;
  para.className = 'para1';
  const arr = data[0].languages;
  const [lang1, lang2, lang3] = arr;
  list1.innerText = lang1;
  list2.innerText = lang3;
  list3.innerText = lang2;

  btn1.innerHTML = `${data[0].live} <img id="live-btn" src="./live.png" alt="btn">`;
  btn2.innerHTML = `${data[0].source} <i id="github" class="fab fa-github"></i>`;

  const [language1, language2, language3] = data[0].languages;
  list1.innerText = language1;
  list2.innerText = language2;
  list3.innerText = language3;

  btn1.innerHTML = `${data[0].live}<img id="live-btn" src="./live.png" alt="btn">`;
  btn2.innerHTML = `${data[0].source}<i id="github" class="fab fa-github"></i>`;
  const mainContent = document.querySelector('.main');

  return mainContent.appendChild(page);
}

const btnn = document.querySelectorAll('.btn');

function popUp() {
  document.body.appendChild(cardGenerate(data));

  const del = document.querySelector('.modelPage');
  const closeBtn = document.querySelector('.closebtn');
  document.querySelector('#bg-nice').classList.add('blurred');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(del);
    document.querySelector('#bg-nice').classList.remove('blurred');
  });
}

const btnsMobileArr = Array.from(btnn);

btnsMobileArr.forEach((btn, idx) => {
  btn.setAttribute('id', idx);

  btnn[idx].addEventListener('click', popUp);
});
