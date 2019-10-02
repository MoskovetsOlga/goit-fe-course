/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://api.github.com/users/";

form.addEventListener("submit", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
  evt.preventDefault();
  const searchUser = input.value;
  fetch(`${API_URL}${searchUser}`)
    .then(res => res.json())
    .then(createResult)
    .catch(console.log)

  function createResult(obj) {
    let res = `<p>Avatar: <img src=${obj.avatar_url} width=20px height=20px></p>
        <p>Username: ${obj.login}</p>
        <p>Bio: ${obj.bio}</p>
        <p>Public repos: ${obj.public_repos}</p>`;
    result.innerHTML = res;
  }
}
