// Задача 1 Реализуйте функцию, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по-умолчанию.

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


// Задача 2 функцию, которая принимает на вход в виде массива кошелек с деньгами и название валюты и возвращает сумму денег указанной валюты.

const task2 = (cities, index) => {
  if(index < cities.length) {
    return cities[index];
  } else {
    return null;
  }
} 
const cities = ['moscow', 'london', 'berlin', 'porto'];
console.log(task2(cities, 1))

// Задача 3 Реализуйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его.  Для пустого массива возвращается null 
// getMax([]); // null 
// getMax([1, 10, 8]); // 10 
// Эта функция реализуется просто и мы уже делали подобное ранее. Сейчас же мы учимся использовать rest-оператор. 
// Используйте его вместе с деструктуризацией, для извлечения первого элемента и всех остальных. 
//Первый элемент становится начальным значением максимального, а остальные перебираются в цикле для определения максимального.

