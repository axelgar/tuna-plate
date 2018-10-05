'use strict';

function main () {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    button.className = 'button-reverse';
  })
}

window.addEventListener('load', main);