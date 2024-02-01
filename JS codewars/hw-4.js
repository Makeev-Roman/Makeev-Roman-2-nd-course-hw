//задание 1
let i = 1

while (i < 3) {
    console.log('привет')
    i++
}

//Задание 2
let c = 1

while (c < 6) {
    console.log(c)
    c++
}

//Задание 3
let num = 7

while (num < 23) {
    console.log(num)
    num++
}

//Задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}
for (let salary in obj) {
    alert(`${salary} - зарплата ${obj[salary]} долларов.`)
}

//Задание 5
for (n = 1000, num = 1; n > 50; num++) {
    n /= 2
    console.log(num)
}
alert(n)

//задание 6
for (day = 5; day <= 31; day += 7) {
    alert(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
}

