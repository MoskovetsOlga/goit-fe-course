/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.

  Напишите скрипт который реализует следующее поведение:

  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal,
    должно появляться. Для этого необходимо убрать класс modal-hidden.
    Для выбора модального модального окна используйте класс js-modal-backdrop

  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
// */


// MINE
// let btnOpenModal = document.querySelector('[data-action="open-modal"]');
// let modal = document.querySelector('.js-modal-backdrop');
// let closeModalBtn = document.querySelector('[data-action="close-modal"]')

// function handleModal() {
//   modal.classList.remove('modal-hidden');
// }

// function closeModal(event) {
//   event.stopPropagation();
//   console.log(event.target);
//   if (event.target.classList.contains('js-modal-backdrop') || event.target.classList.contains('close-btn')) {
//     modal.classList.add('modal-hidden')
//   } else {
//     return;
//   }
// }

// btnOpenModal.addEventListener('click', handleModal);
// modal.addEventListener('click', closeModal);

// Комментарий:
// Я не сбрасывал условия перезагрузки страницы при валидации формы. По идее при нажатитт на Subscribe страница должна перезагружаться, но этого не поисходит и preventDefault я не прописывал. Тут два варианта, либо stopPropagation "ложит" это все, либо в данном случае надо дописывать событие на Subscribe...

/*
// 2 events listener realization
function closeModal() {
  modal.classList.add('modal-hidden')
}

function closeModalByBackground(event) {
  event.stopPropagation();
  console.log(event.target);
  console.dir(event.target);
  if (event.target.classList.contains('js-modal-backdrop')) {
    modal.classList.add('modal-hidden')
  }
}

closeModalBtn.addEventListener('click', closeModal)
modal.addEventListener('click', closeModalByBackground)
*/



const btn = document.querySelector('.btn');
const modal = document.querySelector('.js-modal-backdrop');

btn.addEventListener('click', () => modal.classList.remove('modal-hidden'));

modal.addEventListener('click', ({ target }) => {
  if (target.dataset.action === 'close-modal' || target.classList.contains('js-modal-backdrop')) {
    modal.classList.add('modal-hidden')
  }
})
