//1 проверьте на существование свойства этого объекта
let obj1 = {x: 1, y: 2, z: 3};

let kluchi = Object.keys(obj1);
console.log(obj1);

//2 Удалите свойство из объекта 
let obj2 = {x: 1, y: 2, z: 3};

delete obj2.y;
console.log(obj2);

//3 Проверьте тип данных obj2, если это объект, то выведите на экран число 444

if(typeof{obj2}=='object'){ 
    console.log('444');
}


//4 Проверьте тип данных ключа x в obj2

console.log(typeof(obj2.x));

//5 Передайте объект let arr1 = [1, 2, 3]; ссылкой на другую переменную
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2);