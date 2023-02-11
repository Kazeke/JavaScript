// for(let i = 0; i < 10; i++){
//     document.write('hello - ' + i + '<br>');
// }

// document.write('<hr>');

// let nums = [1, 22, 43, 58, 223];

// for(let elem of nums){
//     document.write('hello - ' + elem + '<br>');
// }

// document.write('<hr>');

// let hero = {
//     weapon: true,
//     family: false,
//     power: 'unstopble',
//     clothe: 'red'
// }

// for(let key in hero){
//     document.write(key + ' - ' + hero[key] + '<br>');
// }

// document.write('<hr>');

// let num = 0;
// while(num < 5){
//     num++;
// }
// document.write(num + '<br>');

// document.write('<hr>');

// let num2 = 2000 * 2 *2;
// let num3 = 0;
// while(num2 > 10){
//     num2 = num2 / 2; // num2 /= 2
//     num3++;
// }
// document.write(num2 + '<br> Кол-во итераций - ' + num3);
// document.write('<hr>');

// let arr = [1,2,3,4,5,6,7];
// //let sum = 0;

// for(let elem of arr){
// //    sum = sum + elem; // sum +=elem
//     if(elem == 3){
//         document.write('est - ' + elem); 
//         break;       
//     }
// }
// //document.write(sum + '<br>');
// document.write('<hr>');

// function test(){
//     document.write(123);
// }

// test();
// test();
// test();

// document.write('<br>');
// //Параметры: output(исходящий) и input(входящий)

// let dolg = math(500);
// //num = 500
// function math(num){
//     let result = num * num;
//     return result;
// }

// document.write('<hr>');

// let batman = math2(dolg);

// document.write(batman);
// //document.write(math2(dolg));

// function math2(joker){
//     return joker + joker;
// }

// function squre(num1, num2){
//     return num1* num2;
// }
// document.write(squre(2,2));

let num = 0;
function summa(){
    for(let i = 0; i <= 4; i++){
        num = num + i; //num += i
    }
    return num;
}

let arr = ['hello', true, false, NaN, 1, 2, 3.5];

if(arr.length > 3){
    document.write(summa());
}

// document.write(summa());