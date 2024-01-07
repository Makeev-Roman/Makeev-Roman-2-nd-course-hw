let month = Number(prompt(`Введи номер месяца от 1 до 12`));

function seasons(month) {
    if (isNaN(month) === true) {
        alert(`Ай ай ай, ты шалишь! Я так не играю!`)
    } else if (month === 1 || month === 2 || month === 12) {
        alert('оооу, это самое холодное время года "ЗИМА"')
    } else if (month >= 3 && month <= 5) {
        alert('ееху, это "ВЕСНА" всё наченает цвести и пахнуть!')
    } else if (month >= 6 && month <= 8) {
        alert('ваау, это самое теплое время года "ЛЕТО"')
    } else if (month >= 9 && month <= 11) {
        alert('ууух, это "ОСЕНЬ" готовим сапоги и зонтики...')
    } else {
        alert(`Ай ай ай, ты шалишь! Я так не играю!`)
    }
}
seasons(month);
