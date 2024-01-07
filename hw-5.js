//Задание 1
let lesserNumber = function (a, b) {
    if (a <= b) {
        return a
    } else {
        return b
    }
}
console.log(lesserNumber(8, 4))

//Задание 2
const num = Number(prompt(`Введи число`))

function parityIsOdd (num) {
    if (num % 2 === 0) {
        alert(`Число четное`)
    } else {
        alert(`Число нечетное`)
    }
}
parityIsOdd(num)

//Задание 3.1
function squareNum (num) {
    console.log(num ** 2)
}
squareNum(num)

//Задание 3.2
function squareNumReturn (num) {
    return (num ** 2)
}
console.log(squareNumReturn(num))

//Задание 4
let age = Number(prompt(`Сколько тебе лет?`))

function ageVerification(age) {
    if (age < 0) {
        alert(`Вы ввели не правильное значение!`)
    } else if (age > 0 && age <= 12 ) {
        alert(`Привет Друг!`)
    } else {
        alert(`Добро пожаловать!`)
    }
}
ageVerification(age);

//Задание 5
let oneNum = (prompt(`Введи перовое число`))
let whoNum = (prompt(`Введи второе число`))

function checkingDataType(oneNum, whoNum) {
    if (isNaN(oneNum) === false && isNaN(whoNum) === false) {
        console.log(oneNum * whoNum);
    } else {
        return console.log(`Одно или оба значения не являются числом`);
    }
}
checkingDataType(oneNum, whoNum)


//Задание 6
let userNum = Number(prompt(`Запрашиваю число для задания №6`))
function verificationUserNum(userNum) {
    if (isNaN(userNum) === false) {
        let valueСube = userNum ** 3;
        return alert(`${userNum} в кубе ровняется ${valueСube}`)
    } else {
        alert(`Переданный параметр не является числом`)
    }
}
verificationUserNum(userNum);

//Задание 7
function getArea() {
    area = this.radius ** 2 * Math.PI;
    return console.log(area);
}

function getPerimeter () {
    perimeter = 2 * Math.PI * this.radius;
    return console.log(perimeter);
}

const circle1 = {
    radius: 2,
    getArea: getArea,
    getPerimeter: getPerimeter
} 


const circle2 = {
    radius: 4,
    getArea: getArea,
    getPerimeter: getPerimeter
}

circle1.getArea();
circle1.getPerimeter();
circle2.getArea();
circle2.getPerimeter();






