// 1) В переменной month лежит какое-то число из интервала от 1 до 12. 
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let num = prompt('Vvedite chislo: ');

// if(num == 1 || num==2 || num==3){
//     document.write('zima');
// }else if(num == 4 || num==5 || num==6){
//     document.write('leto');
// }else if(num == 7 || num==8|| num==9){
//     document.write('vesna');
// }
// else if(num == 10 || num==11 || num==12){
//     document.write('osen');
// };

// let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// p

// if(month[0] == 1){
//     document.write('зима - месяц - ' + month[0]);
// }
// else{
//     document.write('Vi ne vveli chislo');
// }

// 2) Дана строка, состоящая из символов, например, 'abcde'. 
// Проверьте, что первым символом этой строки является буква 'a'. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = 'abcde';

// if(str[0] == 'a'){
//     document.write('Da');
// }else{
//     document.write('Net');
// };
// document.write('<hr>');

// 3) Дано число, например, 12345. 
// Проверьте, что первым символом этого числа является цифра 1, 2 или 3. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

// let chislo = 12345;
// chislo = String(chislo)

// if(+chislo[0] === 1){
//     document.write('Da');

// }else if(+chislo !== 1){
//     document.write('Net');
// };

// document.write('<hr>');

// 4) Дано трехзначное число. Найдите сумму цифр этого числа.

// let nums = 123;

// nums = String(nums)
// let numbers = +nums[0] + +nums[1] + +nums[2];
// document.write(numbers);
// document.write('<hr>');

// 5) Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

// let nums = 123123;
// nums = String(nums)

// let numbers1 = +nums[0] + +nums[1] + +nums[2];
// let numbers2 = +nums[3] + +nums[4] + +nums[5];
// numbers1 == numbers2? document.write('Da') : document.write('net');;
// document.write('<hr>');
