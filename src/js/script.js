'use strict'

const elementOne = document.querySelector('.one');
const elementTwo = document.querySelector('.two');
const elementThree = document.querySelector('.three');
const elementFour = document.querySelector('.four');
const elementFive = document.querySelector('.five');
const elementSix = document.querySelector('.six');
const elementHorizon = document.querySelector('.horizon');

function applyEffectWithDelay() {
    setTimeout(() => {
        elementOne.classList.add('active');
        elementTwo.classList.add('active');
        elementThree.classList.add('active');
        elementFour.classList.add('active');
        elementFive.classList.add('active');
        elementSix.classList.add('active');
        elementHorizon.classList.add('active');
    }, 1000); 
}
window.onload = applyEffectWithDelay;

