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

// Get document sections and assign to global variables
const mainTitle = document.querySelector('#main-title');
const pageSections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');
const buttonBar = document.querySelector('.sticky-bar');
const topButton = document.getElementById('return-to-top');

// Create global document fragment
const docFragment = document.createDocumentFragment();

// Set Intersection Observer options
const options = {threshold: 0.9};

/**
 * End Global Variables
 * Begin Main Functions
 *
*/

/**
 * Event listener function. When nav bar item is clicked,
 * the appropriate section scrolls into view.
*/
function clickNav(event) {
    const section = event.target.getAttribute('data-section');
    const sectionElement = document.getElementById(section);
    event.preventDefault();
    sectionElement.scrollIntoView({behavior: 'smooth'});
}


/**
 * Event listener function. When "Scroll to Top" button
 * is clicked, page scrolls to top.
*/
function goToTop(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}


/**
 * Builds top navbar. Creates elements, populates their
 * attributes, appends them to the document fragment,
 * and adds the fragment to the DOM.
*/
function buildMenu(sections) {
    for (section of sections) {
        const newListItem = document.createElement('li');
        const newLink = document.createElement('a');
        const sectionID = section.getAttribute('id');
        const linkAnchor = "#" + sectionID;
        newLink.textContent = section.getAttribute('data-nav');
        newLink.setAttribute('href', linkAnchor);
        newLink.setAttribute('data-section', sectionID);
        newLink.setAttribute('class', 'menu__link');
        newLink.setAttribute('id', sectionID + "_tab");
        newListItem.appendChild(newLink);
        docFragment.appendChild(newListItem);
    }
    navList.appendChild(docFragment);
}


/**
 * Adds tab class 'active-tab' when section is in view
 * Removes it when it's not in view
*/
function highlightTab(turnOn, tabId){
    const tab = document.getElementById(tabId + '_tab');
    if (turnOn) {
        tab.classList.add('active-tab');
    } else {
        tab.classList.remove('active-tab');
    }
}


/**
 * Callback function for observer of main area
 * When below the fold, "Scroll to top" button bar visible
 * When above the fold, it's not visible
*/
function showHideBar(entries, observer) {
    const isAboveFold = entries[0].isIntersecting;
    if (isAboveFold) {
        buttonBar.classList.remove('bar-visible');
        buttonBar.classList.add('bar-invisible');
    } else {
        buttonBar.classList.remove('bar-invisible');
        buttonBar.classList.add('bar-visible');
    }
}


/**
 * Callback function for observer of sections
 * Runs whenever a section comes into the main view area
 * Highlights that section with yellow header text
*/
function highlightSection (entries, observer) {
    const currentSection = entries[0].target;
    const enteringView = entries[0].isIntersecting;
    if (enteringView) {
        currentSection.classList.add('current-section');
        highlightTab(true, currentSection.getAttribute('id'));
    } else {
        currentSection.classList.remove('current-section');
        highlightTab(false, currentSection.getAttribute('id'));
    }
}


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildMenu(pageSections);

// Create an intersection observer object for highlighting sections
const intObserver = new IntersectionObserver(highlightSection, options);

// Create an intersection observer object for hiding buttonbar
const intObserverButton = new IntersectionObserver(showHideBar, options);

// Target page top ("above the fold") with observer
intObserverButton.observe(mainTitle);

// Target each section with observer
for (section of pageSections) {
    intObserver.observe(section);
}

// Create an event listener for nav links
navList.addEventListener('click', clickNav);

// Create an event listener for the "back to top" button
topButton.addEventListener('click', goToTop);
