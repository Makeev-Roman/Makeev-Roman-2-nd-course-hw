//Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] == 10) break;
	console.log(arr[i]);
}

//Задание 2
const arrTask2 = [1, 5, 4, 10, 0, 3];
alert(`Индекс числа 4 в массиве второго задания = ${arrTask2.indexOf(4)}`);
//использовал alert просто для разнообразия и что бы проверить 
//работает ли это так же как с переменной

//Задание 3
const arrTask3 = [1, 3, 5, 10, 20];
console.log(arrTask3.join(` `));

//Задание 4
const arrTask4 = [];

for (i = 0; i < 3; i++) {
    arrTask4[i] = []
    for (e = 0; e < 3; e++) {
        arrTask4[i][e] = 1
    }
}
console.log(arrTask4);

//Задание 5
const arrTask5 = [1, 1, 1];
arrTask5.push(2, 2, 2);
console.log(arrTask5);

//Задание 6
const arrTask6 = [9, 8, 7, 'a', 6, 5];
arrTask6.sort();
arrTask6.pop();
console.log(arrTask6);

//Задание 7
const arrTask7 = [9, 8, 7, 6, 5];
if (arrTask7.includes(+prompt(`Угадай число`))) {
    alert(`Угодал`)
} else {
    alert(`Не угодал`)
}

//Задание 8
let string = `abcdef`
let arrTask8 = string.split(``)
arrTask8.reverse();
string = arrTask8.join(``);
console.log(string);

//задание 9 
const arrTask9 = [[1, 2, 3,],[4, 5, 6]];

let flatArrTask9 = arrTask9.flat();
console.log(flatArrTask9);

//Задание 10
const arrTask10 = [1, 3, 5, 7, 9, 2, 4, 8, 10]
for (let i = 0; i < arrTask10.length - 1; i++) {
    console.log(arrTask10[i] + arrTask10[i + 1]);
}

//Задача 11
const arrTask11 = [3, 4, 5, 5, 7]
function squareNumber(arrTask11) {
    return arrTask11.map(num => num ** 2);
}
console.log(squareNumber(arrTask11));

//Задача 12
const arrTask12 = [`слово`, ``, `слог`, `длинное предложение`, `буква`];

function transformation(arrTask12) {
    return arrTask12.map(item => item.length)
}

console.log(transformation(arrTask12));

//Задача 13
const arrTask13 = []
function filterPositive(arrTask13) {
    return arrTask13.filter(item => item < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2]))