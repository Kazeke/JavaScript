//Циклы - это инструмен для выполнения одного и того же кода несколько раз

//Цикл for
// for(let i = 0; i < 10; i++){
//     document.write(i);
// }

// for(let i = 0; i <= 10; i++){
//     document.write(i + '<br>');
// };

// for(let i = 8; i >= 0; i--){
//     document.write(i + '<br>');
// }



//Перебор массива
// Цикл for-of
// for (let elem of arr) {
// 	console.log(elem);
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'hello', true, false, NaN]

// for(let elem of nums){
//     document.write(elem + '<br>');
// }

//Перебор объекта
//Цикл for-in
// for (let key in obj) {
// 	console.log(key); // вывод ключей
//     console.log(obj[key]); // вывод значений
// }

// let game = {
//     name: 'flappy bird',
//     gamers: 5000.,
//     country: 'Kazakhstan'
// }

// for(let joker in game){
//     document.write('Ключ ' + joker + ' - ' + 'Значение ' + game[joker] + '<br>');

// }

// document.write('<hr>');

// Цикл while
// let i = 1;

// while (i <= 5) {
// 	console.log(i);
// 	i++;
// }

// let count = 0;

// while(count < 10){
//     document.write(count + '<br>');
//     count++;
// }


//Накопление(суммирование) чисел
// let res = 0;

// let num = 0;

// for(let i = 1; i <= 8; i++){
//     num += i; // num = num +1
// }

// document.write(num);
// document.write('<br>');

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let summa = 0;

// for(let chislo of nums){
//     summa += chislo; // summa = summa + chislo
// }
// document.write(summa);
// document.write('<br>');

// for (let i = 1; i <= 100; i++) {
// 	res = res + i;
// }

// console.log(res); // искомая сумма

//Задача: суммируйте элементы массива

//Заполнение массива

// let arr = [];

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }

// console.log(arr); // выведет [1, 2, 3, 4, 5]

// let chisla = [];

// for(let i = 3; i < 27; i++){
//     chisla.push(i);
// }

// console.log(chisla);
// document.write(chisla);
// document.write('<br>');


// let test = {};
// let keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// let values = [1, true, false, 'joker', 'superman', 3.14, 576, NuN];

// for(let i = 0; i < keys.length; i++){
//     test[keys[i]] = values[i];
// }
// console.log(test);

// let test = {};
// let keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// let values = [1, true, false, 'joker', 'superman', 3.14, 576];

// for(let i = 0; i < keys.length; i++){
//     test[keys[i]] = values[i];
// }

// for(let i = 0; i < 3; i++){
//     delete test[keys[i]];
// }

// console.log(test);

// for(let i = 0; i < 10; i++){
//     if(i % 4 == 0){
//         document.write(i + '<br>');
//     }
// }

let num1 = [1, -1, 2, -2, 3, -3, 4, -4];
let num2 = []; //Записать только положительные числа
let num3 = []; //Записать только отрицательные числа

for(let i of num1){
    if(i > 0){
        num2.push(i);
    }else{
        num3.push(i);
    }
}
console.log(num2);
console.log(num3);