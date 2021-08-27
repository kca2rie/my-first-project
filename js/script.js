start=1; finish=100;

num=start-(start%2)+1;
while(num<=finish) {
  console.log(num);
  num+=2;
}



const num1 = a;
const num2 = b;
const num3 = c;
if(num1>num2 && num1>num3)
console.log(num1);
else if(num2>num1 && num2>num3) 
console.log(num2);
else if(num3>num1 && num3>num2)
console.log(num3);
else if(num1<num2 && num1<num3)
console.log(num1);
else if(num2<num1 && num2<num3)
console.log(num2);
else if(num3<num1 && num3<num2)
console.log(num3);



const rev = (str) => {
    return str.split('')
  };
  
  console.log(rev('hello, world!'));
