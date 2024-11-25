'use strict'

function select(selector, scope = document) {
    return scope.querySelector(selector);
  }
  function listen(event, element, callback) {
    return element.addEventListener(event, callback);
  }


const elementOne = select('.first-left');
const elementTwo = select('.second-left');
const elementThree = select('.third-left');
const elementFour = select('.forth-left');
const elementFive = select('.forth-right');
const elementSix = select('.third-right');
const elementSeven = select('.second-right');
const elementEight = select('.first-right');
const elementHorizon = select('.horizon');
const titleHeading = select('.title-button')
const cityScape = select('.cityscape');

function applyEffectWithDelay() {
    setTimeout(() => {
        elementOne.classList.add('active');
        elementTwo.classList.add('active');
        elementThree.classList.add('active');
        elementFour.classList.add('active');
        elementFive.classList.add('active');
        elementSix.classList.add('active');
        elementSeven.classList.add('active');
        elementEight.classList.add('active');
        elementHorizon.classList.add('active');
    }, 1000); 
}
window.onload = applyEffectWithDelay;

  const titleToggle = elementHorizon.offsetHeight;
  
  listen("scroll", window, () => {
    const trigger = window.scrollY;
  
    if (trigger > titleToggle) {
      titleHeading.classList.add("hidden");
    } else {
      titleHeading.classList.remove("hidden");
    }
  });


