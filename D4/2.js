let week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};

document.write(week);
alert(week);

let year = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь',
};

console.log(year);

let user = { 
    name: 'Magjan',
    surname: 'Tolibay',
    patronik: 'Arman'

};

document.write('<hr>');
document.write(user.surname + ' ' + user.name + ' ' + user.patronik);

let nums = {
    num1: 2,
    num2: 5,
    num3: 4
};

let cube = {};

cube.cube1 = nums.num1 ** 3;
cube.cube2 = nums.num2 ** 3;
cube.cube3 = nums.num3 ** 3;
console.log(cube);
