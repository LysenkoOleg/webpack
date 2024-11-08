/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

function component(text) {
  var element = document.createElement('h1');
  element.textContent = text;
  return element;
}
document.body.prepend(component('Проект собран на Webpack'));
/******/ })()
;