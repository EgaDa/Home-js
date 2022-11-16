var a = +prompt('Сколько вам лет?')

if (a > 0 && a <= 18) {
    console.log('Вы ещё молоды, вам нужно учиться');
} else if (a > 18 && a <= 50) {
    console.log('Вам нужно работать');
} else if (a > 50 && a <= 59) {
    console.log('Вам скоро на пенсию');
} else if (a > 59 && a <= 150) {
    console.log('Вы пенсионер');
} else {
    console.log('Что-то пошло не так!');
}