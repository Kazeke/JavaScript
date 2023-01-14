// //Условный оператор
// //Больше и меньше

// if(5 > 10){ //Условие
//     //Результат
//     document.write("Пять меньше десяти");
// }
// //исключение
// else{
//     document.write("Пять не больше десяти");
// }

// document.write("<hr>");

// //Проверка на равенство

// if(75 == 75){
//     document.write(5 + 10 * 2);
// }
// document.write("<hr>");
// // = присвоение
// // == сравнение

// //Проверка на неравенство
// //НЕ - инвертирование
// if(30 != 25){
//     document.write('30 не равен 25');
// }
// document.write("<hr>");
// //Сравнение переменных

// let x = 2, y = 3, z = 8, result = z ** y / x;

// if(x > y){
//     document.write("x > y");
// }
// else if(z > y){
//     document.write("z > y");
// }
// else if(x + x > y){
//     document.write("x + x > y");
// }
// else if(x ** y == z){
//     document.write("x ** y == z");
// }
// else{
//     document.write('Ничего не сработало!');
// };
// //Равенство строк

// document.write("<hr>");
// let str1 = 'Привет';
// let str2 = 'Мир';

// if(str1 == 'Привет'){
//     document.write('Привет');
// }

// document.write("<hr>");

// if(str2 == 'Мир'){
//     document.write('Мир');
// }
// //Сравнение строк и чисел
// document.write("<hr>");
// let num1 = '5';

// if(num1 == 5){
//     document.write('5 == 5');
// }
// document.write("<hr>");

// if(num1 === 5){
//     document.write('5 == 5');
// }
// else{
//     document.write('Ты сравниваешь строку и число!');
// }
// document.write("<hr>");

// //Равенство по значению и типу

// if(num1 !== 5){
//     document.write('5 !== 5');
// }
// document.write("<hr>");

// //Неравенство по значению и типу


//Логическое И

if(5 > 2 && 6<3){
    document.write('надпись сработало');
}
else{
    document.write('не сработало');
}
document.write("<hr>");

//Логическое ИЛИ

if(5 > 1 || 6 < 2 || 55/11 > 5){
    document.write('Сработало');
}
document.write("<hr>");

if(5 > 1 && 4 < 6|| 6 < 2 || 55/11 > 5){
    document.write('Сработало');
}
document.write("<hr>");

let num = 6;

switch(num){
    case 1: document.write('num = 1'); break;
    case 2: document.write('num = 2'); break;
    case 3: document.write('num = 3'); break;
    case 4: document.write('num = 4'); break;
    case 5: document.write('num = 5'); break;

    default: document.write('Не найдено!');
}