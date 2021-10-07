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



function Card (title, image) {
    this.title = title;
    this.image=image;
    this.text='Lorem ipsum dolor sit amet, consectetur adipiscing\
      elit, sed do eiusmod tempor incididunt ut labore et dolore \
      magna aliqua. Sem et tortor consequat id porta nibh. Velit \
      aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.\
      Fames ac turpis egestas integer eget aliquet nibh praesent \
      tristique. Egestas diam in arcu cursus euismod quis viverra \
      nibh. Nisl rhoncus mattis rhoncus urna neque.';
    this.languages={
      'first' : 'html',
      'second' : 'css',
      'third' : 'javaScript',
      'fourth' : 'github',
      'fifth' : 'ruby',
      'sixth' : 'Bootstrap'
    };
    this.links={
      'live' : 'See Live',
      'source' : 'See Source',
    }
  };
   
  let card1 = new Card('MULTI-POST STORIES','assets/SnapshootPortfolio.png');
  let card2 = new Card('MULTI-POST STORIES','assets/SnapshootPortfolio.png');
  let card3 = new Card('MULTI-POST STORIES','assets/SnapshootPortfolio.png');
  let card4 = new Card('MULTI-POST STORIES', 'assets/SnapshootPortfolio.png');

  function cardGenerate(card1) {
    const page = document.createElement('div');
    page.className = 'modelPage';
    
    const title = document.createElement('h2');
  
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
    const btn2 =  document.createElement('button');
    
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
      
      img.src = 'assets/SnapshootPortfolio.png';
      img.className = 'project-image';
      title.innerText = card1.title;
      span.innerText = 'x';

      para.innerText = card1.text;
      para.className = 'para1'
      list1.innerText = card1.languages.first;
      list2.innerText = card1.languages.second;
      list3.innerText = card1.languages.third;
      btn1.innerText = card1.links.live;
      btn2.innerText = card1.links.source;
      const mainContent = document.querySelector('.main');

      return mainContent.appendChild(page);

  }
  
  const btn = document.querySelector('.btn');
  console.log(btn)

  
  //   popup function
  // const model = document.querySelector('.page');
  
  function popUp() {
    document.body.appendChild(cardGenerate(card1));
    // model.classList.add('showMenu');
    // model.style.display = "block";
    // model.style.display = 'block'
    console.log('clicked!');
    // const model = document.body.querySelector('.modelPage');
    // console.log(model)
    const closeBtn = document.querySelector('.closebtn');
    console.log(closeBtn)
      let  del = document.querySelector('.modelPage');
      let  dele = document.querySelector('.closebtn');
      console.log(del);
      dele.addEventListener('click', ()=> {
        console.log('del')
        document.body.removeChild(del);
      })
  }

  
  
  
  // function closePopup() {
    //   model.classList.remove('showMenu')
    //   model.style.display = "none";
    //   console.log('hide')
    // }
    
  
  btn.addEventListener('click',popUp );
 
  // closeBtn.addEventListener('click',closePopup );
  
// let arr = ["Portfolio","About","Contact"]
//   function listItems(arr){
//       let unorderList = document.createElement('ul');
//       unorderList.setAttribute('class','menuMenu')

//       for (let i = 0; i < arr.length; i++) {
//           let list = document.createElement('li');
//           list.setAttribute('class','nav-tag');
//           list.appendChild(document.createTextNode(arr[i]));
//           unorderList.appendChild(list)
//       }

//       return unorderList;
//   }

//   console.log(listItems(arr));

//   const mobile = document.querySelector('.mobile');
//   mobile.appendChild(listItems(arr));
let searchClosebtn = document.querySelector('.closebtn');
    console.log(searchClosebtn);
    searchClosebtn.addEventListener('click',()=>{
    console.log("Hello");  
    
  }
    )