'use strict';

const inputText = document.getElementById('input-text');
const text = document.getElementById('text');

const debounce = (func, ms) => {
  let indexTimeout;
  return () => {
    clearTimeout(indexTimeout);
    indexTimeout = setTimeout(func, ms);
  };
};

const inputletter = () => {
  text.innerText = inputText.value;
};

inputText.addEventListener('input', debounce(inputletter, 300));
