// Задача 1

const money = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
const getTotalAmount = (money, currency) => {
  let summ = 0;
  for(let i = 0; i < money.length; i++) {
    const bill = money[i].split(' ');
    if(currency === bill[0]) {
      summ += +bill[1]; 
    }
  }
  return summ;
}
console.log(getTotalAmount(money, 'usd'))
console.log(getTotalAmount(money, 'rub'))
console.log(getTotalAmount(money, 'eur'))


// Задача 2

const task2 = (cities, index) => {
  if(index < cities.length) {
    return cities[index];
  } else {
    return null;
  }
} 
const cities = ['moscow', 'london', 'berlin', 'porto'];
console.log(task2(cities, 1))

// Задача 3

