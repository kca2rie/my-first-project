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
