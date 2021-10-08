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


// mobile popup
const data = [
  {
    title: 'Multi-Post stories',
    image:'assets/SnapshootPortfolio.png',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing\
      elit, sed do eiusmod tempor incididunt ut labore et dolore \
      magna aliqua. Sem et tortor consequat id porta nibh. Velit \
      aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.\
      Fames ac turpis egestas integer eget aliquet nibh praesent \
      tristique.',
    languages:['html','css','javaScript','github','Ruby on rails','Bootstrap'],
    live : 'See Live',
    source: 'See Source' 
  },
  {
    title: 'Google',
    image:'assets/SnapshootPortfolio.png',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing\
      elit, sed do eiusmod tempor incididunt ut labore et dolore \
      magna aliqua. Sem et tortor consequat id porta nibh. Velit \
      aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.\
      Fames ac turpis egestas integer eget aliquet nibh praesent \
      tristique.',
    languages:['html','css','javaScript','github','Ruby on rails','Bootstrap'],
    live : 'See Live',
    source: 'See Source' 
  },
  {
    title: 'Facebook',
    image:'assets/SnapshootPortfolio.png',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing\
      elit, sed do eiusmod tempor incididunt ut labore et dolore \
      magna aliqua. Sem et tortor consequat id porta nibh. Velit \
      aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.\
      Fames ac turpis egestas integer eget aliquet nibh praesent \
      tristique.',
    languages:['html','css','javaScript','github','Ruby on rails','Bootstrap'],
    live : 'See Live',
    source: 'See Source' 
  },
  {
    title: 'Portfolio',
    image:'assets/SnapshootPortfolio.png',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing\
      elit, sed do eiusmod tempor incididunt ut labore et dolore \
      magna aliqua. Sem et tortor consequat id porta nibh. Velit \
      aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.\
      Fames ac turpis egestas integer eget aliquet nibh praesent \
      tristique.',
    languages:['html','css','javaScript','github','Ruby on rails','Bootstrap'],
    live : 'See Live',
    source: 'See Source' 
  }
]


  function cardGenerate(data) {
    const page = document.createElement('div');
    page.className = 'modelPage';
    
    const title = document.createElement('h2');
    title.className = 'port-title'
    const span = document.createElement('button');
    span.className = "closebtn"
    const img = document.createElement('img');
    const para = document.createElement('p');
    const lang = document.createElement('div');
    lang.className ='frameworks'
    const ul = document.createElement('ul');
    ul.className = 'lang-pop';
    const list1 = document.createElement('li');
    const list2 = document.createElement('li');
    const list3 = document.createElement('li');
    const btn1 =  document.createElement('button');
    btn1.className = 'live';
    
    const btn2 =  document.createElement('button');
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
      page.appendChild(btn1);
      page.appendChild(btn2);
      
      img.src = data[0].image;
      img.className = 'project-image';
      title.innerText = data[0].title;
      span.innerText = 'x';

      para.innerText = data[0].text;
      para.className = 'para1'
      list1.innerText = data[0].languages[0];
      list2.innerText = data[0].languages[4];
      list3.innerText = data[0].languages[2];
      // btn1.innerText = data[0].live;
      btn1.innerText =data[0].live;
      btn2.innerHTML = `${data[0].source}` +'<i class="fab fa-github"></i>';
      const mainContent = document.querySelector('.main');

      return mainContent.appendChild(page);

  }
  
  const btnn = document.querySelectorAll('.btn');
  // console.log(btn)

  
  //   popup function
  // const model = document.querySelector('.page');
  
  function popUp() {    
    document.body.appendChild(cardGenerate(data));
    console.log('clicked!');    
    
      let  del = document.querySelector('.modelPage');
      let  closeBtn = document.querySelector('.closebtn');
      console.log(del);
      closeBtn.addEventListener('click', ()=> {
        document.body.removeChild(del);
        console.log("del")
      })
  }
  
  var btnsMobileArr = Array.from(btnn);

  btnsMobileArr.forEach((btn, idx) => {
    btn.setAttribute('id', idx);
      console.log(btn,idx)
    btnn[idx].addEventListener('click',popUp );
    btnn[idx].addEventListener('click',()=>{
      // btnn[idx].disabled = true;  
    } )
  })
  


function desktopPop(data) {
  const desktop = document.querySelector('.desktopPage');
  desktop.innerHTML = data.map( (item,index) =>{

    return (
      `
      <div class="desktoppopup">
      <div class="head">
      <h2 class ="">${item.title}</h2>
      <button class="cross-btn">&times;</button>
      </div>
      <img src=${'assets/SnapshootPortfolio.png'} alt="">
      <p>${item.text}</p>
      <ul class="frameworks">
        <li class="lang-pop">${item.languages[0]}</li>
        <li class="lang-pop">${item.languages[2]}</li>
        <li class="lang-pop">${item.languages[4]}</li>
        <li class="lang-pop">${item.languages[1]}</li>
      </ul>
      <div class="links">
          <button class="live">See Live</button>
          <button class"source">See Source <i class="fab fa-linkedin-in"></i></button>
          </div>
      </div>    
    `
    )
  })
}
const desktop = document.querySelector('.desktopPage');
desktopPop(data)
desktop.style.display = 'none';
// select the button
const btnDesktop = document.querySelectorAll('.btn');
var btnsArr = Array.from(btnDesktop);
// console.log(btnsArr);
btnsArr.forEach((btn, idx) => {
  btn.setAttribute('id', idx)
    console.log(btn,idx)
})
// select the title of the page 
const desktoppopup = document.querySelectorAll('.desktoppopup');
var desktopArr = Array.from(desktoppopup);
// console.log(desktopArr); // array 
desktopArr.forEach((btn, idx) => {
  btn.setAttribute('id', idx)
    console.log(btn,idx)
})

// link the title with the button.
