'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

const headerSmall = select("nav");
const headerLarge = select("h1");
const heroBuffer = select(".hero-buffer");
const headerSwitchTrigger = heroBuffer.offsetHeight;

listen("scroll", window, () => {
  const trigger = window.scrollY;

  if (trigger > headerSwitchTrigger) {
    headerSmall.classList.add("visible");
    headerLarge.classList.add("hidden");
  } else {
    headerSmall.classList.remove("visible");
    headerLarge.classList.remove("hidden");
  }
});


