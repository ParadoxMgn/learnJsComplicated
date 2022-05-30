'use strict';

// 1)
const lang = prompt('Введите язык', 'ru/en');
const daysWeek = {
  'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  'en': ['Monday', 'Thusday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

// a) через if
if (lang === 'ru') {
  for (let item of daysWeek[lang]) {
    console.log(item);
  }
} else if (lang === 'en') {
  for (let item of daysWeek[lang]) {
    console.log(item);
  }
} else {
  console.log('Неизвестный язык');
}

// b) через switch-case
switch (lang) {
  case 'ru':
    console.log(daysWeek[lang]);
    break;
  case 'en':
    console.log(daysWeek[lang]);
    break;
  default:
    console.log('Неизвестный язык');
}

// c) через многомерный массив без ифов и switch
console.log(daysWeek[lang]);

// 2)
const namePerson = prompt('Введите имя');

console.log(namePerson === "Артем" ? "директор" : namePerson === "Александр" ? "преподаватель" : "студент");