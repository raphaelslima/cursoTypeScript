/*
  Converter para tirar a possibilidade de ser um null
*/

const body1 = document.querySelector('body');

// condicional
if (body1) body1.style.background = 'red';

const body2 = document.querySelector('body') as HTMLBodyElement;

// condicional
body2.style.background = 'red';
