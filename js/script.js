// Задача 1

function capitalize(str) {
  let x = "";
  for (i = 0; i < str.length; i++) {
    if (str[i - 1] === " " || i === 0) {
      x += str[i].toUpperCase();
} else {
  x += str[i];
    }
  }
return x;
}


// Задача 2

const invertCase = (str) => { 
  let index = 0;
  let result = '';
  let lowerStr = str.toLowerCase();
  let upperStr = str.toUpperCase();
  for (; index < str.length; index++) {
    if (str[index] === lowerStr[index]) {
      result +== upperStr[index];
    }
    else result +== lowerStr[index];
  }
  return result;
}


// Задача 3

function isPowerOfThree() {
  let n = "";
  while (n % 3 === 0) {
    // я не знаю
