'use strict';

const myFuction = function (someArg) {
  if (typeof someArg === "string") {
    const cutSomeArg = someArg.trim();
    if (cutSomeArg.length > 30) {
      return cutSomeArg.substring(0, 30) + "...";
    } else {
      return cutSomeArg;
    }
  } else {
    return 'Это не строка';
  }
};

console.log(myFuction('         Lorem ipsum dolor, sit amet consectetur adipisicing elit.         '));
