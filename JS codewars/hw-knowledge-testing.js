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
