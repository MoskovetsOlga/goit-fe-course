/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// class version

const list = document.querySelector('.list');

const createList = array => {
  const fragment = document.createDocumentFragment();

  array.forEach(el => {
    const li = document.createElement('li');
    li.textContent = el;
    fragment.append(li);
  })

  list.append(fragment);
}

createList(elements);


