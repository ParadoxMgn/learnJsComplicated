'use strict';

const arr = [
  '4245453',
  '8678565345',
  '3645634535',
  '2453544353',
  '657575354',
  '96759545345',
  '2352434535',
];

for (let item of arr) {
  if (item[0] === '2' || item[0] === '4') {
    console.log(item);
  }
}

for (let num = 2; num <= 100; num++) {
  let isSimpleNum = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isSimpleNum = false;
      break;
    }
  }
  if (isSimpleNum) {
    console.log(num, ('Делители этого числа 1 и ' + num));
  }
}
