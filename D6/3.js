//Условный оператор
// if(5 < 7){
//     document.write('Да');
// }
// else{
//     document.write('Нет');
// }

// let x = 7;
// let y = 12;
// let result = 5 * 23;

// if(15 <= y){
//     document.write(result);
// }
// else if(15 == x){
//     document.write("hello");
// }
// else if(50 >= y + x){
//     document.write("world");
// }
// else{
//     document.write(result - 50);
// };


// let h = 10;
// let j = 5;

// let peremennaya = {
//     [j]: 'abs'
// };

// let peremennaya2 = {
//     [h]: 'opk'
// }

// if(h>j){
//     console.log(peremennaya);
// }else{
//     console.log(peremennaya2);
// };


// не - инвертирование

// if(5 != true){
//     document.write(5);
// }
// else{
//     document.write(false);
// };

// let login1 = 'qwerty';

// let login2 = prompt('Ваш логин');
// if(login1 == login2){
//     document.write("Доступ разрешен!");
// }
// else{
//     document.write("Доступ запрещен!");
// }

// document.write("<hr>");

// let login1 = 555;

// let login2 = prompt('Ваш логин');
// login2 = +login2;
// document.write(typeof(login2));



// document.write("<hr>");

// if(login1 === login2){
//     document.write("Доступ разрешен!");
// }
// else{
//     document.write("Доступ запрещен!");
// }

// document.write("<hr>");
// let l = 3, f = 23, p = 10;

// if(l + p < f && f - p < l){
//     document.write(l * f * p);
// }
// else if(5 > 3 || 6 / 2 == 3 || 55 + 45 < 101){
//     document.write(123456789);
// };


// let nums = {
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5
// }

// //Если длина объекта равна или больше 5, то добавить свойство six: 6

// if(Object.keys(nums).length >= 5){
//     nums.six = 6
//     console.log(nums.six);
// };

// if(Object.keys(nums).length == 6){
//     delete nums.two;
//     console.log(nums);
// };

let counter_strike = {
    type: 'terrorist',
    health: 100,
    weapon: 'ak-47'
};


//Игрок получает урон через prompt
//Выходит сообшение: Вы получили урон в размере 25, ваш уровень жизни равен 75

let ataka = prompt('Введите число: ');
counter_strike.health = counter_strike.health - ataka;
alert('Вы получили урон в размере ' + ataka +','+ ' ваш уровень жизни равен - ' + counter_strike["health"]);
alert('Ваш остаток жизни - ' + counter_strike.health);