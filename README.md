# Udacity Project 2 - Dynamic Landing Page

This is the Landing Page project for the Udacity Frontend Web Developer Course. This project consists of a single landing page. The HTML file holds content sections. The JS file uses DOM manipulation to dynamically create a navigation menu at the top of the page. (It's designed this way so that the website manager or content management system, can easily add multiple sections of content at any length without having to worry about editing the nav code in any way).

In addition to the dynamic menu, the Javascript causes the page to dynamically update as the user scrolls up or down, or clicks on the navigation links -- the section closest to the top of the viewport is highlighted with a yellow headline, decorative bubbles, and a slightly darker background. The navigation link associated with this section is also highlighted. In addition, when the user scrolls below the fold, a bar appears at the bottom with a "Scroll to Top" button. 

## Technologies Used

* Javascript ES6
* HTML
* CSS

## Motivation

This class project is meant to illustrate manipulation of the DOM. In this unit, we learned how the DOM works, and how to select elements from it and  dynamically update the page content. We also learned about Event Listeners and performance. 

## How to Run

Clone the project onto your computer. Then, use your web browser to open the ```index.html``` file. Click around on the webpage. Try scrolling down to the bottom, then clicking the "Scroll to Top" button that appears.  Try scrolling up and down the page, and see how the main section highlights as you scroll, and how the tabs update when you are viewing a partiular section. 

You can also see how the dynamic navigation menu works by editing the HTML file and adding more sections to it. To try this, add a section that looks like this but replaces the capitalized sections with your own content. Saving this HTML file should result in your landing page showing the content and navigation, without touching the JS file. 

```
    <section id="SECTIONNUMBER" data-nav="TAB LABEL">
        <div class="landing__container">
          <h2>YOUR TITLE HERE</h2>
            <p>YOUR CONTENT HERE!</p>
          </div>
      </section>
```