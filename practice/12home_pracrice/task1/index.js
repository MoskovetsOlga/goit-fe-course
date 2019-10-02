/*
 * Ознакомься с содержанием панелей HTML и CSS.
 *
 * Напиши скрипт который сохраняет выбранную пользователем
 * тему в localStorage и, при следующих посещениях страницы,
 * устанавливает ее автоматически. По умолчанию пусть будет светлая тема.
 *
 * При выборе темы, добавляй на элемент body соответствующий класс.
*/


const refs = {
  body: document.querySelector('body'),
  btnLight: document.querySelector('button[data-theme="light"]'),
  btnDark: document.querySelector('button[data-theme="dark"]'),
}

// local storage fn
function userTheme() {
  if (localStorage.length === 0) {
    refs.body.classList.add('theme-light');
    localStorage.setItem('theme', 'light');
  } else {
    if (localStorage.getItem('theme') === 'light') {
      refs.body.classList.add('theme-light');
    } else {
      refs.body.classList.add('theme-dark')
    }
  }
}

// handler
function setTheme(event) {
  console.log(event.target.dataset.theme);
  refs.body.className = "";
  if (event.target.dataset.theme === 'light') {
    refs.body.classList.add('theme-light');
    localStorage.setItem('theme', 'light');
  } else {
    refs.body.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
  }
}

userTheme();

refs.btnLight.addEventListener('click', setTheme);
refs.btnDark.addEventListener('click', setTheme);
