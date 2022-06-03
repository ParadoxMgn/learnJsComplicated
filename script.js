'use strict';

const onScreen = document.body;

const dateNow = new Date();

const listWeeks = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

for (let item in listWeeks) {
  if (item === '5' || item === '6') {
    onScreen.insertAdjacentHTML('beforeend', `<p><i>${listWeeks[item]}</i></p>`);
  } else {
    onScreen.insertAdjacentHTML('beforeend', `<p>${listWeeks[item]}</p>`);
  }

  if (dateNow.getDay() - 1 === +item) {
    const nowDay = document.querySelectorAll('p');
    nowDay[item].innerHTML = '';
    if (item === '5' || item === '6') {
      nowDay[item].insertAdjacentHTML('beforeend', `<b><i>${listWeeks[item]}</i></b>`);
    } else {
      nowDay[item].insertAdjacentHTML('beforeend', `<b>${listWeeks[item]}</b>`);
    }
  }
}
