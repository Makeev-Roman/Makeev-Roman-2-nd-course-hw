
// Практика из урока:
const fibonacci = [1, 1, 2, 3, 5, 8];

// TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
const multipleByTwoFib = fibonacci.map((el) => {
    return el * 2;
});
// Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
const plusTenFib = fibonacci.map((el) => {
    return el + 10;
})
// Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
const onlyBigFib = fibonacci.filter((el) => {
    return el > 3;
})

console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
console.log(onlyBigFib); // => [5, 8]



function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);


// Задание 1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

function sortAge(people1, people2) {
  return people1.age - people2.age
}
console.log(people.sort(sortAge));

//Задание 2
function isPositive(el) {
  return el > 0
}

function isMale(el) {
  return el.gender === `male`
}

function filter(arr, callback) {
  const output = []
  arr.map(el => {
    if (callback(el)){
      output.push(el)
    }
  })

  return output;

}

console.log(filter([3, -4, 1, 9], isPositive)); 
// Должен выводить [3, 1, 9]
  
const peopls = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopls, isMale));
// Должен выводить [{name: 'Глеб', gender: 'male'},
//  {name: 'Олег', gender: 'male'}]

//Задание 3

let timerId = setInterval(() => {
  const date = new Date();
  console.log(date)
}, 3000);

setTimeout(() => {
  clearInterval(timerId)
  console.log(`30 сек прошло`)
}, 30000);

function delayForSecond(callback) {
  setTimeout(() => {callback()}, 1000)
};

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

//Задание 5

// Функция delayForSecond через 1 секунду пишет 
// в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 	cb(); }

  }, 1000)
}

// Функция sayHi выводит в консоль приветствие
// для указанного имени
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))