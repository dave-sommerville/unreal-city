'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

const navBar = select(".nav-wrapper");
const heroBanner = select("header");

const headerSwitch = heroBanner.offsetHeight;

listen("scroll", window, () => {
  const trigger = window.scrollY;

  if (trigger > headerSwitch) {
    navBar.classList.add("visible");
  } else {
    navBar.classList.remove("visible");
  }
});


