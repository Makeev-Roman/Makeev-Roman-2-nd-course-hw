//Задание 1
let str = `js`
console.log(str.toLocaleUpperCase());

//Задание 2
//Преобразуем каждую строку и масив к нижнему регистру, 
//далее проверяем через фильтр и возвращаем 
//только те элементы которые начинаются так же 
//как и слово переданое в строке.

function searchStart(array, str) {
    let lowerCaseStr = str.toLowerCase();
    let result = array.filter(el => el.toLowerCase().startsWith(lowerCaseStr));
    return result;
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); 

//Задача 3
let num = 32.54884;
// 1. округляем до меньшего целого числа с помощью метода
// Math.floor()
let numFloor = Math.floor(num);
console.log(numFloor); //32

// 2. округляем до большего целого числа с помощью метода
// Math.ceil()
let numCeil = Math.ceil(num);
console.log(numCeil); //33

// 3. округляем до ближайшего целого числа с помощью метода
// Math.round()
let numRound = Math.round(num);
console.log(numRound); //33

//Задача 4
const arrNum = [52, 53, 49, 77, 21, 32];
const maxNum = Math.max(...arrNum);
const minNum = Math.min(...arrNum);

console.log(maxNum);
console.log(minNum);

//задача 5
function toRandomNum() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
}
toRandomNum();

//Задание 6 
function getRandomArrNumbers(maxNumber) {
    const arrayLength = Math.floor(maxNumber / 2);
    const randomArray = [];

    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.round(Math.random() * (maxNumber + 1));
        randomArray.push(randomNumber);
    }

    return randomArray;
}

console.log(getRandomArrNumbers(7)); // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
console.log(getRandomArrNumbers(12)); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6

//Задание 7
function RandomNumberFromTwo(oneNum, twoNum) {
    oneNum = Math.round(oneNum);
    twoNum = Math.round(twoNum);
    return Math.round(Math.random() * (oneNum - twoNum) + twoNum);
}
console.log(RandomNumberFromTwo(3, 10));

//Задание 8
let date = new Date();
console.log(`Текушая дата: ${date}`);

//Задание 9
let currentDate = new Date(date);
currentDate.setDate(date.getDate() + 73);
console.log(`Через 73 дня будет дата:  ${currentDate}`);

//Задание 10
function formatDateTime(date) {
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    const formattedDate = `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;

    return `${formattedDate}\n${formattedTime}`;
}

const formattedDateTime = formatDateTime(date);
console.log(formattedDateTime);
