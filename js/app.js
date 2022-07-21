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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const selectSections = document.querySelectorAll("section");
const navBarMenu = document.getElementsByClassName("navbar__menu");
const navBarList = document.getElementById("navbar__list");
const docFregmant = document.createDocumentFragment();

/**
 * End Global Variables
 */

// build the nav
function buildNav() {
  for (section of selectSections) {
    const dataAttr = section.getAttribute("data-nav");
    const listItem = document.createElement("li");
    const listItemLink = document.createElement("a");
    listItemLink.setAttribute("href", "#" + section.id);
    listItemLink.textContent = dataAttr;
    listItemLink.setAttribute("class", "menu__link");
    listItem.appendChild(listItemLink);
    docFregmant.appendChild(listItem);
  }
  navBarList.appendChild(docFregmant);
}

buildNav();

// Scroll to anchor ID using scrollTO event & Add class 'active' for ancher tag

function scrollToSectin(event) {
  const link = this; // a Tag
  const liTag = document.querySelectorAll("li");

  // Add class 'active' for ancher tag

  liTag.forEach((e) => {
    e.firstElementChild === link
      ? e.classList.add("active")
      : e.classList.remove("active");
  });

  // Scroll to anchor ID using scrollTO event

  const secId = this.getAttribute("href").slice(1);
  const selectedSection = document.getElementById(secId);
  selectedSection.scrollIntoView({ behavior: "smooth", block: "center" });
  event.preventDefault();
}

//* End Main Functions

/* Begin Events */

// Scroll to section on link click

function scrollMe() {
  const aTag = document.getElementsByClassName("menu__link");

  for (a of aTag) {
    a.addEventListener("click", scrollToSectin);
  }
}

scrollMe();

// Set sections as active

window.onscroll = () => {
  selectSections.forEach((active) => {
    if (
      active.getBoundingClientRect().top >= -200 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });
};

// click on menu button to show

function showMenu() {
  navBarList.classList.toggle("toggle");
}
