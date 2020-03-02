
// Get document sections and navbar UL
const pageSections = document.querySelectorAll('section'); 
const navList = document.querySelector('#navbar__list');

// Create document fragment 
const docFragment = document.createDocumentFragment();

// Create LIs, anchor links, and add to fragment
for (section of pageSections) {
    const newListItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.textContent = section.getAttribute('data-nav');
    const linkAnchor = "#" + section.getAttribute('id');
    newLink.setAttribute('href', linkAnchor);
    newListItem.appendChild(newLink);
    docFragment.appendChild(newListItem);
}

// Put the fragment into the DOM inside the list 
navList.appendChild(docFragment);

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