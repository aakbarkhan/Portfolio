const menu = document.querySelector(".menuMenu");
const menuItems = document.querySelectorAll(".nav-tag");
const hamburger =  document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

menu.innerHTML = `

        <li class="nav-tag">
        <a  href="#">Portfolio</a>
        </li>
        <li class="nav-tag">
        <a  href="#">About</a>
        </li>
        <li class="nav-tag">
        <a  href="#">Contact</a>
        </li>
        
`

function toggleMenu() {
    if (menu.classList.contains(".showMenu")) {
        menu.classList.remove(".showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add(".showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);
