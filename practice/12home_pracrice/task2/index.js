/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const btnStart = document.querySelector('.button[data-action="start"]');
const btnStop = document.querySelector('.button[data-action="stop"]');
const body = document.querySelector('body');

const randomColor = (arr) => {
  let num = Math.floor(Math.random() * arr.length);
  // console.log(num);
  // console.log(arr[num]);
  let newColor = arr[num];
  return newColor;
}


function bodyRandomColor() {
  body.style.backgroundColor = randomColor(colors);
}

// bodyRandomColor(randomColor);

let timerID = null;

function colorStartChange() {

  timerID = setInterval(bodyRandomColor, 1000);

  btnStart.removeEventListener('click', colorStartChange);
}

function colorStopChange() {
  clearInterval(timerID);
}

btnStart.addEventListener('click', colorStartChange);
btnStop.addEventListener('click', colorStopChange);