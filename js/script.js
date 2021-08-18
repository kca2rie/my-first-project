function fizzBuzz(begin, end) {
    for (let i = begin; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz");
        else if (i % 5 === 0)
        console.log("Buzz");
        else if (i % 3 === 0)
        console.log("Fizz");
        else console.log(i)
    }
}
fizzBuzz(11, 20);

// Task 2
const someVal = null; 
console.log(someVal.foo);  //TypeError


const a = 1;
console.log(b)  //SyntaxError


function numbers () {
    const num1 = 2;
    const num2 = 3;
    return num1 + num2;
  }
  console.log(num1);  //ReferenceError
