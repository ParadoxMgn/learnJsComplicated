'use strict';

const getData2 = () => {
  const get = new XMLHttpRequest();
  get.open('GET', './db.json');
  get.send();

  get.onload = function () {
    if (get.status != 200) {
      console.log(`Ошибка ${get.status}: ${get.statusText}`);
    } else {
      sendData2(JSON.parse(get.response));
    }
  };
};

const sendData2 = (get) => {
  const send = new XMLHttpRequest();
  send.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  send.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  send.send(JSON.stringify(get));

  send.onload = function () {
    if (send.status != 201) {
      console.log(`Ошибка ${send.status}: ${send.statusText}`);
    } else {
      console.log(JSON.parse(send.response));
    }
  };
};

getData2();
