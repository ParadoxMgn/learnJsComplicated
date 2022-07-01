'use strict';

let user;

const getData = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(data => sendData('https://jsonplaceholder.typicode.com/posts', data))
    .catch(error => console.log(error));
};

const sendData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error));
};

getData('./db.json');
