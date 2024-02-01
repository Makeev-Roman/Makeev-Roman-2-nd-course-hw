/*Завершите метод / функцию так,
 чтобы она преобразовывала слова, разделенные тире / 
 подчеркиванием, в верхний регистр. 
 Первое слово в выходных данных должно быть написано 
 с заглавной буквы, только если исходное слово было 
 написано с заглавной буквы (известно как верхний 
 регистр Camel, также часто называемый регистром 
 Pascal).
 Следующие слова всегда должны быть 
 написаны с заглавной букв.

"the-stealth-warrior" преобразуется
в "theStealthWarrior"

"The_Stealth_Warrior" преобразуется
в "TheStealthWarrior"

"The_Stealth-Warrior" преобразуется
в "TheStealthWarrior"
Мое решение:
1. Разбить входную строку на массив слов с 
использованием разделителей "-", "_".
2. Преобразовать первую букву каждого слова 
(кроме первого) к верхнему регистру.
3. Собрать полученный массив слов в одну строку без пробелов.
*/
// реализация: 

function toCamelCase(str){
    let newStr = str.split(/[-_]/);
    for(let i = 1; i < newStr.length; i++) {
      newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }

    return newStr.join(``)
};

console.log(toCamelCase(`the-stealth-warrior`)); 
console.log(toCamelCase(`The_Stealth_Warrior`)); 
console.log(toCamelCase(`The_Stealth-Warrior`));

// Задание 1
function strCount(str, letter){ 
    const arrStr = str.split(``) 
    const newArrStr = arrStr.filter(el => el === letter)
    return newArrStr.length
}   
const inputString = "Hello";
const searchChar = "z";
const result = strCount(inputString, searchChar);
console.log(result); 

//Задание 2
function squareSum(numbers){
    const sumWithInitial = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue ** 2,
    );
    return sumWithInitial
}
console.log(squareSum([1, 2, 3]))

//Задание 3

function nearestSq(n){
let rootSq = (Math.round(Math.sqrt(n))) ** 2;

return rootSq;
}

console.log(nearestSq(111))

//Задание 4
function solution(str){
    return str.split``.reverse().join`` 
}
console.log(solution(`World`))

//Задание 5
function addLength(str) {
    let arrStr = str.split(` `);
    return arrStr.map(arrStr => `${arrStr} ${arrStr.length}`)
}
console.log(addLength(`Ghbf fds ff`));

//Задание 6
function mango(quantity, price){
    return quantity * price - Math.floor(quantity/3) * price
}
console.log(mango(4, 3))

//Задание 7
function litres(time) {
    return Math.floor(time * 1/2)
}
console.log(litres(3))

//Задание 8
function invert(array) {
    return array.map(el => -el);
}
console.log(invert([1,-2,3,4,5]))

//Задание 9
function powersOfTwo(n){
    let i = 0
    arr = []
    while (i <= n) {
        arr.push(Math.pow(2, i))
        i++

    }
    return arr
}
console.log(powersOfTwo(1))

//Задание 10
function grow(x){
    return x.reduce((i, el) => i * el);
}
console.log(grow([1, 2, 3, 4]))
