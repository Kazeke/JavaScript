// CRUD - create, read, update, delete, add

// CRUD - create
//Массив
// let heroes = ["Superman", "Djoker", "Halk", "Spiderman", "Chudo jenshina"];
// let dataTypes = ["Hello", 365, true, false, null];

//Вывод массива
// document.write(heroes);
// console.log(heroes);
// document.write("<hr>");

//Получение элементов массива
// let hero1 = heroes[0];
// let hero2 = heroes[1];
// let hero3 = heroes[2];
// let hero4 = heroes[3];

// document.write("Имя 1 героя - " + hero1);
// document.write("<br>");
// document.write("Имя 2 героя - " + hero2);
// document.write("<br>");
// document.write("Имя 3 героя - " + hero3);
// document.write("<br>");
// document.write("Имя 4 героя - " + hero4);
// document.write("<br>");
// document.write("Имя 5 героя - " + heroes[4]);
// document.write("<br>");
// document.write("<hr>");

//Последний элемент
// let lastElem = heroes[heroes.length - 1];
// document.write("Последний элемент - " + lastElem);
// document.write("<hr>");
// Массив [Массив.length - 1];

// Длина массива
// document.write("Длина моего массива - " + heroes.length);
// document.write("<hr>");

//Добавление элементов по ключам в массиве
// heroes[5] = "Капитан америка";
// heroes[6] = "Loki";
// heroes[7] = "Капитан марвел";
// document.write(heroes);

// let fio = ["Кадыров", "Казбек", "Файзылдаевич"];
// document.write("<hr>");
//Меня зовут Ф И О
// document.write("Меня зовут - " + fio[0] + " " + fio[1] + " " + fio[2]);
// document.write("<hr>");

// let nums = [25, 55, 365];
// let four = nums[0] + nums[1] + nums[2];
// document.write(four);
// nums[3] = four;
// document.write("<hr>");
// document.write(nums);
// document.write("<hr>");

// let num1 = [5, "10", 23, "50"];
// let num2 = num1[0] + +num1[1] + num1[2] + +num1[3];
// document.write(num2);
// document.write("<hr>");

// let num3 = [];
// let num4 = [2,4,6,8];
// let num5 = num4[0]**3;
// let num6 = num4[1]**3;
// let num7 = num4[2]**3;
// let num8 = num4[3]**3;
// document.write(num5);
// document.write("<hr>");
// document.write(num6);
// document.write("<hr>");
// document.write(num7);
// document.write("<hr>");
// document.write(num8);
// document.write("<hr>");
// num3[0] = num5;
// num3[1] = num6;
// num3[2] = num7;
// num3[3] = num8;
// document.write(num3);
// document.write("<hr>");

let num2 = [];
let num3 = [2, 4, 6, 8];
let num4 = [1, 3, 5, 7, 9];

let num5 = num3[0] + num3[1] + num3[2] + num3[3];

let num6 = num4[0] + num4[1] + num4[2] + num4[3] + num4[4];

let num7 = num5 + num6;
document.write(num7);
document.write("<hr>");