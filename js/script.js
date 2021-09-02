let n = 1000;
for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if ((i % j == 0) && (j != i)) {
      break;
    } else {
      console.log(i);
      break;
    }
  }
}



const addNumbers = num=>{
  let strOfNum = String(num);
  let length = strOfNum.lenght-1;
  let sum = 0;
  while(lenght>=0){
    sum += Number(strOfNum[lenght]);
    lenght--;
  }
}
console.log(addNumbers(19));
