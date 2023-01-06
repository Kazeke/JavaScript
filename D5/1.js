let countries = {
  Россия: "Москва",
  Абхазия: "Сухум",
  Австрия: "Вена",
  Алжир: "Алжир",
  Ангола: "Луанда"
};

let vopros = prompt('Какую страну вы выбрали?');

if (vopros=='Россия'){
  alert('Вы выбрали страну ' + vopros +','+ ' Столица - ' + countries["Россия"]);
}else if(vopros=='Абхазия'){
  alert('Вы выбрали страну ' + vopros +','+ ' Столица - ' + countries["Абхазия"]);
}else if(vopros=='Австрия'){
  alert('Вы выбрали страну ' + vopros +','+ ' Столица - ' + countries["Австрия"]);
}else if(vopros=='Алжир'){
  alert('Вы выбрали страну ' + vopros +','+ ' Столица - ' + countries["Алжир"]);
}else if(vopros=='Ангола'){
  alert('Вы выбрали страну ' + vopros +','+ ' Столица - ' + countries["Ангола"]);
}else{ 
  alert('Нет такой страны');
};