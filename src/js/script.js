'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

const aboutButton = select('.about');
const galleryButton = select('.gallery');
const poetryButton = select('.poetry');
const gamesButton = select('.games');

