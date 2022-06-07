'use strict';

document.body.insertAdjacentHTML('beforeend', `<p class="one"></p>
  <p class="two"></p>`);

const oneDate = document.querySelector('.one');
const twoDate = document.querySelector('.two');

const outputOnDisplay = setInterval(function () {
  const dateNow = new Date();

  const dayWeekNow = dateNow.getDay() - 1;
  const yearNow = dateNow.getFullYear();
  const monthNow = dateNow.getMonth();
  const dayNow = dateNow.getDate();
  const hoursNow = dateNow.getHours();
  const minuteNow = dateNow.getMinutes();
  const secondNow = dateNow.getSeconds();
  let dayWeek = dateNow.toLocaleString('ru', { weekday: 'long' });
  dayWeek = dayWeek[0].toUpperCase() + dayWeek.slice(1);
  let dayMonth = dateNow.toLocaleString('ru', { month: 'long' });

  if (dayMonth[dayMonth.length - 1] === 'ь') {
    dayMonth = dayMonth.replace('ь', 'я');
  } else {
    if (dayMonth[dayMonth.length - 1] === 'й') {
      dayMonth = dayMonth.replace('й', 'я');
    } else {
      dayMonth += 'a';
    }
  }


  const getHours = function () {
    if (hoursNow > 4 && hoursNow < 21 || hoursNow === 0) {
      return 'часов';
    }
    if (hoursNow > 1 && hoursNow < 5 || hoursNow > 21 && hoursNow < 25) {
      return 'часа';
    }
    if (hoursNow === 1 || hoursNow === 21) {
      return 'час';
    }
  };

  const getMinSec = function (num) {
    if (num === 0 || num > 4 && num < 21 || num > 24 && num < 31 || num > 34 && num < 41 || num > 44 && num < 51 || num > 54 && num < 61) {
      return '';
    }
    if (num > 1 && num < 5 || num > 21 && num < 25 || num > 31 && num < 35 || num > 41 && num < 45 || num > 51 && num < 55) {
      return 'ы';
    }
    if (num === 1 || num === 21 || num === 31 || num === 41 || num === 51) {
      return 'а';
    }
  };

  const getZero = function (num) {
    if (num.toString().length === 1) {
      return 0;
    } else {
      return '';
    }
  };

  oneDate.innerHTML = `Сегодня ${dayWeek}, ${dayNow} ${dayMonth} ${yearNow} года, ${hoursNow} ${getHours()} ${minuteNow} минут${getMinSec(minuteNow)} ${secondNow} секунд${getMinSec(secondNow)}`;

  twoDate.innerHTML = `${getZero(dayNow)}${dayNow}.${getZero(monthNow)}${monthNow}.${yearNow} - ${getZero(hoursNow)}${hoursNow}:${getZero(minuteNow)}${minuteNow}:${getZero(secondNow)}${secondNow}`;
}, 1000);
