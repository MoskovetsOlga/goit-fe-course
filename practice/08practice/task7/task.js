/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)

  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.

  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"

  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

const root = document.querySelector('#root');

const createBoxes = (num) => {
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < num; i += 1) {
    const div = document.createElement('div');
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.background = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}
        )`;

    fragment.append(div);
    size += 10;
  }

  root.append(fragment);
}

createBoxes(10);