// var a = +prompt('Сколько вам лет?')

// if (a > 0 && a <= 18) {
//     console.log('Вы ещё молоды, вам нужно учиться');
// } else if (a > 18 && a <= 50) {
//     console.log('Вам нужно работать');
// } else if (a > 50 && a <= 59) {
//     console.log('Вам скоро на пенсию');
// } else if (a > 59 && a <= 150) {
//     console.log('Вы пенсионер');
// } else {
//     console.log('Что-то пошло не так!');
// }



var time = +prompt('Введите любой час суток')

if (time >= 4 && time <= 11) {
    console.log(time + ' утра');
} else if (time >= 12 && time <= 16) {
    console.log(time + ' дня');
} else if (time >= 17 && time <= 20) {
    console.log(time + ' вечера');
} else if (time >= 21 && time <= 3) {
    console.log(time + ' ночи');
} else {
    console.log('Что-то пошло не так!');
}