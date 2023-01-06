let country = {
  name: "Kazakhstan",
  capital: "Astana",
  population: 20000000,
  continent: "Evrasia"
};

console.log("Strana - " + country["name"]);
console.log('Столица - ' + country['capital']);
console.log('Население - ' + country['population']);
console.log('Материк - ' + country['continent']);

console.log(country);

let marathon = {
    1: 'Usein',
    2: 'Magjan',
    3: 'Flash'
};

console.log(country.capital);

country.name = 'Avstria';
country.capital = 'Vena';
country.country = 'Ewropa';

console.log(country);

country.language = 'Nemetskii';
console.log(country);

let kluchi = Object.keys(country);
document.write(kluchi);
console.log(kluchi);

document.write('<hr>');
document.write(Object.keys(country).length);