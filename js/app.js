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

// Create global document fragment 
const docFragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Event listener function. When nav bar item is clicked, 
// the appropriate section scrolls into view. 
function clickNav(event) {
    const section = event.target.getAttribute('data-section');
    const sectionElement = document.getElementById(section);
    event.preventDefault();
    sectionElement.scrollIntoView({behavior: 'smooth'});
}

// Event listener function. When "Scroll to Top" button
// is clicked, page scrolls to top.
function goToTop(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the nav. Create new elements, populate their attributes,
// and append them to the document fragment. 
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
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildMenu(pageSections);

// Scroll to section on link click

// Set sections as active

// Create LIs and anchor links. Add to fragment

//my stuff




// tab turns color if its section is in view
function highlightTab(turnOn, tabId){
    console.log(turnOn, 'function called');
    const tab = document.getElementById(tabId + '_tab');
    if (turnOn) {
        console.log("turn on the tab");
        tab.classList.add('active-tab');
    } else {
        console.log("turn off the tab");
        tab.classList.remove('active-tab');
    }
}

// Put the fragment into the DOM inside the list 
navList.appendChild(docFragment);


// call back for observer of main area
function showHideBar(entries, observer) {
    const isAboveFold = entries[0].isIntersecting;
    if (isAboveFold) {
        console.log('is above fold');
        console.log(buttonBar.classList.remove('bar-visible'));
        console.log(buttonBar.classList.add('bar-invisible'));        
    } else {
        console.log('is beneath fold');
        console.log(buttonBar.classList.remove('bar-invisible'));
        console.log(buttonBar.classList.add('bar-visible'));
    }
}

// Callback function for highlighting section.
// Runs whenever a section comes into view
// Adds current-section class to things entering, removes from things exiting
function highlightSection (entries, observer) {
    const currentSection = entries[0].target;
    const enteringView = entries[0].isIntersecting;
    if (enteringView) {
        currentSection.classList.add('current-section');
        // change nav link to active
        highlightTab(true, currentSection.getAttribute('id'));
    } else {
        currentSection.classList.remove('current-section');
        // change nav link to inactive
        highlightTab(false, currentSection.getAttribute('id'));
    }
}

// Intersection Observer Options 
const options = {
    threshold: 0.9
}

// Create an intersection observer object for sections
const intObserver = new IntersectionObserver(highlightSection, options);

// Create an intersection observer object for bottom buttonbar
const intObserverButton = new IntersectionObserver(showHideBar, options);

// Target page top with observer
intObserverButton.observe(mainTitle);

// Target each section with observer
for (section of pageSections) {
    intObserver.observe(section);
}

// Create an event listener for nav links
navList.addEventListener('click', clickNav);

// Create an event listener for the "back to top" button
const topButton = document.getElementById('return-to-top');
topButton.addEventListener('click', goToTop);
