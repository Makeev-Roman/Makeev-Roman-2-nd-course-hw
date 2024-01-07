//задание 1
let password = 'пароль'
let input = prompt('Введите пароль')
let verification = input === password ? alert('Пароль введен верно') : alert('Служба безопастности выявила, что вы ввели не верный пароль и подлежите уничтожению')
console.log(verification)

//задание 2
let c = prompt('Введите значение переменной C')
if (c < 10 && c > 0) {
    alert('Верно')
}
else alert('Неверно')

//задание 3
let e = 1
let d = 400
if (e > 100 || d > 100) {
    alert('Верно')
}
else alert('Неверно')

//задание 4
let a = '2'
let b = '3'
alert(Number(a) + Number(b))

//задание 5

let monthNumber = Number(prompt('Введи номер месяца, который тебя интересует'))
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert(`${monthNumber}-й месяц принадлежит к сезону «зима».`);
        break;
    case 3: 
    case 4: 
    case 5: 
        alert(`${monthNumber}-й месяц принадлежит к сезону «весна».`);
        break;
    case 6: 
    case 7: 
    case 8: 
        alert(`${monthNumber}-й месяц принадлежит к сезону «лето».`);
        break;
    case 9: 
    case 10: 
    case 11: 
        alert(`${monthNumber}-й месяц принадлежит к сезону «осень».`);
        break;
    default: alert('не верное значение');
	    break;
}


