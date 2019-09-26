// 'use strict';

// import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS, } from './utils/constants';

// import  initialNotes from '../assets/notes.json';

// import Notepad from './utils/notepad-model';

// import {getRefs, renderNoteList, createListItem} from './utils/view.js';

// const shortid = require('shortid');

// const REFS = getRefs();

// const notepad = new Notepad(initialNotes);

// renderNoteList(REFS.list, notepad.notes);

//  const addListItem = (listRef, note) => {
//     listRef.appendChild(createListItem(note));
//   }
  
//  const removeListItem = (item) => {
//     notepad.deleteNote(item.dataset.id);
//     item.remove();
//   }

// const checkListItem = () => {
  
//   if (!REFS.inputField.value || !REFS.titleField.value) return alert('Необходимо заполнить все поля!');
//   const newNote = {
//   id: shortid.generate(),
//   title: REFS.titleField.value,
//   body: REFS.inputField.value,
//   priority: PRIORITY_TYPES.LOW,} 

//   notepad.saveNote (newNote);
   
//   addListItem(REFS.list, newNote);

//   REFS.inputField.value = '';
//   REFS.titleField.value = '';
// }

// REFS.form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   checkListItem();
// });

// REFS.list.addEventListener('click', (e) => {
// if (e.target.parentNode.dataset.action === 'delete-note') 
// removeListItem(e.target.closest('li')); 
// });

// REFS.search.addEventListener('input', (e) => {
// renderNoteList(REFS.list, notepad.filterNotesByQuery(e.target.value));
// });


// !!!!geolocation


// const getPositionSucess = info => {
//   console.log(info)
// };

// const getPositionError = error => {
//   console.log(error)
// };


// window.navigator.geolocation.getCurrentPosition(info => {
//   console.log(info.coords)
// })

// window.navigator.geolocation.getCurrentPosition(
//   getPositionSucess,
//   getPositionError);

//   const getPosition = () => {
//     return new Promise((resolve, reject) => {
//       window.navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//   };

//    getPosition()
//    .then(info => console.log(info.coords))
//    .catch(console.log);


axios.get{"https://newsapi.org/v2/top-headlines?country=ua&apiKey=7c3a37959eb94dc390f27c80ee3fa21b&q=${this.page}"
}
.then(console.log);

// for html
// container
// button
input type="search" class="querty"


// for import
import work from "work";


// for export 
const axios from "axios";
export default {
  page: 1,
  api:
  "https://newsapi.org/v2/top-headlines?country=ua&apiKey=7c3a37959eb94dc390f27c80ee3fa21b&q=apple"
  fechNews: function () {
    this.nextPage()
    console.log(this.page)
    return axios.get(`${this.api}page=${this.page}`);
   },
   nextPage() {
     this.page+= 1;
   }
   
};




const rets ={
  next: document.querySelector(".next")
  container: document.querySelector(".next")

};

axios.get{https://newsapi.org/v2/everything?q=apple&apiKey=7c3a37959eb94dc390f27c80ee3fa21b&q=apple
}
.then(data => {
  console.log(data.data.articles);
  const renderToHtml =
  data.data.articles.map(elem => `<img width='300' src ='${elem.urlToImage}'/>`);
  .join("");
  console.log(renderToHtml);
  refs.container.insertAdjacentHTML("beforeend", renderToHtml)
});

const getNextImages = () => {
  axios
  .get{https://newsapi.org/v2/everything?q=apple&apiKey=7c3a37959eb94dc390f27c80ee3fa21b&q=apple
  }
  .then(data => {
    console.log(data.data.articles);
    const renderToHtml =
    data.data.articles.map(elem => `<img width='300' src ='${elem.urlToImage}'/>`);
    .join("");
    console.log(renderToHtml);
    refs.container.insertAdjacentHTML("beforeend", renderToHtml)
  });
}

refs.next.addEventlistener('click', getNextImages);

const getQuerty = evt => {
  console.log(evt.target.value);
};

refs.querty.addEventlistener('input', getQuerty)

