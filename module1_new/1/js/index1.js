// 1. Задача 1
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

const ADMIN_PASSWORD ='m4ng0h4ckz';
let message;

let adminPassword = prompt('Введите пароль');
if (adminPassword === null) {
    message = 'Отменено пользователем!';
} else if (adminPassword ==='m4ng0h4ckz') {
    message ='Добро пожаловать!';
} else {
    message ='Доступ запрещен, неверный пароль!';
}
alert (message);
var arr =[1, 2, 3, 4, 5];
arr.splice(2, 2, 6, 7);