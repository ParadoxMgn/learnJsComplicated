'use strict';

const inputText = document.getElementById('input-text');
const text = document.getElementById('text');

const debounce = (func, ms) => {
  return () => {
    let prevChar = this.char;
    this.char = Date.now();
    if (prevChar && (this.char - prevChar) <= ms) {
      clearTimeout(this.indexChar);
    }
    this.indexChar = setTimeout(() => { func(); }, ms);
  };
};

const inputletter = () => {
  text.innerText = inputText.value;
};

inputText.addEventListener('input', debounce(inputletter, 300));
