
//Выведите на экран зарплату Пети и Коли.
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
document.write(obj.Коля);
document.write('<hr>');
document.write(obj.Петя);
document.write('<hr>');

//Найдите длину объекта
var obj = {a: 1, b: 2, c: 3};	
document.write(Object.keys(obj).length);
document.write('<hr>');

//Измените один из элементов
var obj = {a: 1, b: 2, c: 3}; 
obj.a = 7;
document.write(obj.a);
document.write('<hr>');

//Выведите сумму значений
var obj = {a: 1, b: 2, c: 3};	
var sum = obj.a + obj.b + obj.c;
document.write(sum);
document.write('<hr>');

//Запишите в объект obj2 квадрат значений объекта obj
var obj = {a: 1, b: 2, c: 3};
let obj2 = {};

obj2.a = obj.a**2;
obj2.b = obj.b**2;
obj2.c = obj.c**2;
document.write(obj2.a);
document.write('<hr>');
document.write(obj2.b);
document.write('<hr>');
document.write(obj2.c);
document.write('<hr>');