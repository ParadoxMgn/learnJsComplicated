'use strict';

const outputOnDisplay = setInterval(function () {
  const dateNow = new Date();

  document.body.insertAdjacentHTML('beforeend', `<p class="one"></p>
  <p class="two"></p>`);

  const oneDate = document.querySelector('.one');
  const twoDate = document.querySelector('.two');

  const listWeeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  const listMonths = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  const dayWeekNow = dateNow.getDay() - 1;
  const yearNow = dateNow.getFullYear();
  const monthNow = dateNow.getMonth();
  const dayNow = dateNow.getDate();
  const hoursNow = dateNow.getHours();
  const minuteNow = dateNow.getMinutes();
  const secondNow = dateNow.getSeconds();

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

  oneDate.innerHTML = `Сегодня ${listWeeks[dayWeekNow]}, ${dayNow} ${listMonths[monthNow]} ${yearNow} года, ${hoursNow} ${getHours()} ${minuteNow} минут${getMinSec(minuteNow)} ${secondNow} секунд${getMinSec(secondNow)}`;

  twoDate.innerHTML = `${getZero(dayNow)}${dayNow}.${getZero(monthNow)}${monthNow}.${yearNow} - ${getZero(hoursNow)}${hoursNow}:${getZero(minuteNow)}${minuteNow}:${getZero(secondNow)}${secondNow}`;
}, 1000);
