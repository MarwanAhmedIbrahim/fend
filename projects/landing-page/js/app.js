/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navBar        = document.getElementById('navbar__list');
const collection    = document.getElementsByTagName('section');
let items           = [...collection];
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createItem() {
    for (let i = 0; i < items.length; i++) {
        const item = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.setAttribute('class', 'menu__link');
        anchor.setAttribute('href', '#' + items[i].getAttribute('id'));
        anchor.innerHTML = items[i].getAttribute('data-nav');
        navBar.appendChild(item);
        item.appendChild(anchor);
        
    }
}
    createItem();
    

// Add class 'active' to section when near top of viewport


function changeSectionState(event) {
  let i = sections.length;

  while(--i && window.scrollY + 400 < sections[i].offsetTop) {}
  
  for (let section of sections) {
    section.classList.remove('your-active-class');
    sections[i].classList.add('your-active-class');
  }
  for (let navLink of navItemsLinksArr) {
    navLink.classList.remove('active-link');
    navItemsLinksArr[i].classList.add('active-link');
  }
  
}
window.addEventListener('scroll', changeSectionState);


// Scroll to anchor ID using scrollTO event
const navItemsLinks = document.querySelectorAll("a");
const navItemsLinksArr = [...navItemsLinks];

    
for (let i = 0; i < navItemsLinksArr.length; i++) {
        navItemsLinksArr[i].addEventListener("click", smoothScroll);
        
}

function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      window.scrollTo({
        top: targetId==="#" ? 0 : document.querySelector(targetId).offsetTop,
        behavior: "smooth"
      });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


