// Get document sections and navbar UL
const pageSections = document.querySelectorAll('section'); 
const navList = document.querySelector('#navbar__list');
const buttonBar = document.querySelector('.sticky-bar');
const mainTitle = document.querySelector('#main-title');

// Create document fragment 
const docFragment = document.createDocumentFragment();

// Create LIs and anchor links. Add to fragment
for (section of pageSections) {
    const newListItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.textContent = section.getAttribute('data-nav');
    const linkAnchor = "#" + section.getAttribute('id');
    newLink.setAttribute('href', linkAnchor);
    newLink.setAttribute('data-section', section.getAttribute('id'));
    newLink.setAttribute('class', 'menu__link');
    newLink.setAttribute('id', section.getAttribute('id') + "_tab");
    newListItem.appendChild(newLink);
    docFragment.appendChild(newListItem);
}

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

// // hide bar
// function hideBar(bar) {
//     console.log('hide');
//     bar.setAttribute('display', 'none');
// }

// //show bar
// function showBar(bar){
//     console.log('show');
//     bar.setAttribute('display', 'block');
// }


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

// Nav event listener callback
function clickNav(event) {
    const section = event.target.getAttribute('data-section');
    const sectionElement = document.getElementById(section);
    event.preventDefault();
    sectionElement.scrollIntoView({behavior: "smooth"});
    // console.log(sectionElement.getClientRects());
    // const location = sectionElement.getClientRects()[0].y;
    // window.scrollTo({
    //     top: location,
    //     left: 0, 
    //     behavior: 'smooth'
    // });
    // console.log(location);
}

// button event listener callback - scroll to top of page
function goToTop(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// Create an event listener for nav links
navList.addEventListener('click', clickNav);

// Create an event listener for the "back to top" button
const topButton = document.getElementById('return-to-top');
topButton.addEventListener('click', goToTop);

// Scroll to section
// Get x/y of each section header
// set an event on nav links
// when event happens, scroll to anchor ID instead of using href

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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active