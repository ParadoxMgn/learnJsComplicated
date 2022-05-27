const num = 266219;
let productOfNum = 1;
const numArr = num.toString().split('');

for (let item of numArr) {
  productOfNum *= item;
}

console.log(productOfNum);

const powProductOfNum = productOfNum ** 3;

console.log(powProductOfNum.toString().slice(0, 2));
