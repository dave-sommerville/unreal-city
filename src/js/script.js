'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

window.addEventListener("scroll", () => {
  // Check if the user has scrolled to the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    console.log("You've reached the bottom of the page!");
    // Trigger your desired effect here
  }
});
