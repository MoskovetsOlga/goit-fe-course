/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://restcountries.eu/rest/v2/name/";

form.addEventListener("submit", fetchCountryData);


function drawResult(arr) {
  const countryInfo = arr.reduce((acc, el) =>
    acc +
    `<p>Country name: ${el.name}</p>
    <p>Capital: ${el.capital}</p>
    <p>Main currency: ${el.currencies[0].name}</p>
    <p>Flag: <img src=${el.flag} alt=${el.name} width=100% height=100% /></p>
    <hr>`, '')

  // console.log(countryInfo); 
  result.innerHTML = countryInfo;
}
// drawResult()



function fetchCountryData(evt) {
  evt.preventDefault();
  fetch(`${API_URL}${input.value}`)
    .then(res => res.json())
    // .then(console.log)
    .then(data => drawResult(data))
    .catch(error => alert('no country with this name'))
}
