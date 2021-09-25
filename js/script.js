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

// Задача 3 Реализуйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его.  Для пустого массива возвращается null.

const getMax = (coll) => {
  if (coll.length === 0) {
      return null;
  }
  let [max, ...rest] = coll;
  for(let i = 0; i < rest.length; i++) {
      const currentElement = rest[i];
      if(currentElement > max) {
         max = currentElement;
      }
  }
  return max;
};
console.log(getMax([]));
console.log(getMax([1, 10, 8]));



// Task 7 

'use strict';

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 * @param {number} [course.category]
 */

const getCountProperties = course => {
    return Object.keys(course).length;
}

// Sample usage - do not modify
console.log(getCountProperties({id: 1, name: "Learn JavaScript", year: 2021, category: "Programming"})); // 4
console.log(getCountProperties({name: "Learn JavaScript", category: "Programming"})); // 2
console.log(getCountProperties({})); // 0

// Task 8

'use strict';

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
const getUpperCasedProperties = course => {
    return Object.keys(course).map(key => key.toUpperCase());
}

// Sample usage - do not modify
console.log(getUpperCasedProperties({id: 1, name: "Learn JavaScript", year: 2021})); // ["ID", "NAME", "YEAR"]
console.log(getUpperCasedProperties({name: "Learn JavaScript", category: "Programming"})); // ["NAME", "CATEGORY"]
console.log(getUpperCasedProperties({})); // []

// Task 9

'use strict';

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
const logValues = course => {
	return Object.values(course);
}

// Sample usage - do not modify
logValues({id: 1, name: "Learn JavaScript", year: 2021}); 
// should log (separately): 1, "Learn JavaScript", 2021

// Task 12

'use strict';

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
 const visualizeEntries = course => {
	return Object.entries(course);
}

// Sample usage - do not modify
console.log(visualizeEntries({id: 1, name: "Learn JavaScript", year: 2021}));
// [ [ 'id', 1 ], [ 'name', 'Learn JavaScript' ], [ 'year', 2021 ] ]

console.log(visualizeEntries({name: "Learn JavaScript", category: "Programming"}));
// [ [ 'name', 'Learn JavaScript' ], [ 'category', 'Programming' ] ]

console.log(visualizeEntries({})); // []
