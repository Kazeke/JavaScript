let name = 'imya';

let cat ={ 
    color: 'orange',
    age: 10,
    [name]: 'murka'
};

// console.log(cat);
// console.log('imya' in cat);

// delete cat.color;
// console.log(cat);

// console.log(typeof{1: 'a', 2: 'b', 3: 'c'});

// let obj1 = {a: 1, b: 2, c: 3};
// let obj2 = obj1;

// console.log(obj2.c);

const astana = {
    isCapital: true,
    population: 1000000,
    birth: 1997,
    president: 'Nazarbaev'
};

astana.president = 'Tokaev';

console.log(astana);