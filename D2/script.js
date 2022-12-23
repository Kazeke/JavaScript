// alert("Hello world");

// // переменные
// let x = 5;
// let y = 7;
// let result = x + y;

// document.write(result);

// document.write("<hr>");
// document.write("Меня зовут Казеке");

// document.write("<hr>");
// document.write(5 + 4 * 3 - 15 + 5 * 6 + 35);
// document.write("<hr>");

// // много переменных это хорошо
// let joker, dog, rezultat;

// joker = 10 / 5;
// dog = 7 + 3;
// rezultat = joker + dog - (joker * joker) / dog;
// document.write(rezultat + 200);

// let name, surname, fathername;
// name = "Казбек";
// surname = "Кадыров";
// fathername = "Файзылдаевич";

// document.write(surname + " " + name + " " + fathername + "!<hr>");

// let slovo = "Hello"; // String
// let = year = 365; - // Number
// let PI = 3.14;
// let vopros = true

// NaN
// Null - существует или ничего
// Underfind
// Infinity

// let password = 555; // number
// let password2 = "555"; //string

// password === password2? document.write("Пароль верный"): document.write("Пароль не верный");
// document.write("<hr>");

// document.write(typeof password);
// document.write("<hr>");

// password2 = +password2;
// password2 = Number(password2);
// document.write(typeof password2);
// document.write("<hr>");

// let num1, num2;

// num1 = '5';
// num2 ='9';

// document.write(+num1 + +num2);
// document.write("<hr>");
// document.write(num1 *num2);
// document.write("<hr>");

// let hero = '123456789';
// let one = hero[0];
// let two = hero[8];

//document.write(hero[3]);
// document.write(+one + +two  / 2 * 500);

let year = 365;
let month = 31;
let week = 7;
let day = 24;
let minut = 60;
let second = 60;

// day
let secondDay = day * minut * second;
document.write(secondDay);
document.write("<hr>");

// week
let secondWeek = week * day * minut * second;
document.write(secondWeek);
document.write("<hr>");

// month
let secondMonth = month * week * day * minut * second;
document.write(secondMonth);
document.write("<hr>");

// year
let secondYear = year * month * week * day * minut * second;
document.write(secondYear);
document.write("<hr>");

document.write(10 ** 24);

let chislo = '4567';
document.write((+chislo[2] * +chislo[3])**(+chislo[0] * +chislo[1]));

document.write('Бывает, проснешься как птица,<br>');
document.write('Крылатой пружиной на взводе.<br>');
document.write('И хочется жить и трудиться,<br>');
document.write('Но к завтраку это проходит.<br>');
