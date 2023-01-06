let countries = {
  Россия: "Москва",
  Абхазия: "Сухум",
  Австрия: "Вена",
  Алжир: "Алжир",
  Ангола: "Луанда"
};

let vopros = prompt('Какую страну вы выбрали?');

if (vopros in countries){ 
  alert('Вы выбрали страну ' + vopros +','+ ' Столица - ' + countries["vopros"]);
}else{ 
  alert('Нет такой страны');
};