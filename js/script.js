// Задача 1




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
