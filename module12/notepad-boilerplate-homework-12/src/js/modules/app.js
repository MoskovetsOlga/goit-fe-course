import { PRIORITY_TYPES, NOTIFICATION_MESSAGES } from '../utils/constants';
import { Notepad } from './notepad-model';
import initialNotes from '../../assets/notes.json';
import renderNoteList from './view-template';

const shortid = require('shortid');
import { Notyf } from 'notyf';
const notyf = new Notyf();
import 'notyf/notyf.min.css';
import MicroModal from 'micromodal';
const debounce = require('lodash/debounce');


const refs = {
  form: document.querySelector('.note-editor'),
  noteList: document.querySelector('.note-list'),
  searchForm: document.querySelector('form.search-form'),
  modalForm: document.querySelector('button[data-action="open-editor"]')
}


let userNotes = localStorage.getItem('_notes') ? JSON.parse(localStorage.getItem('_notes')) : initialNotes;
const notepad = new Notepad(userNotes);


renderNoteList(refs.noteList, notepad.notes);


function handleSubmitForm(event) {
  event.preventDefault();
  let [title, body] = document.querySelectorAll('.note-editor__input');
  if (!title.value || !body.value) {
    return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
  }

  notepad.saveNote({
    id: shortid.generate(),
    title: title.value,
    body: body.value,
    priority: PRIORITY_TYPES.LOW,
  })
    .then(savedNote => {
      setTimeout(() => {
        renderNoteList(refs.noteList, [savedNote]);
        notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
        MicroModal.close("note-editor-modal");
        event.target.reset();
      }, 100);
    })
}

function removeListItem(event) {
  if (event.target.nodeName === "I" && event.target.closest('.action').dataset.action === 'delete-note') {
    notepad.deleteNote(event.target.closest('.note-list__item').dataset.id);
    event.target.closest('.note-list__item').remove();
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
  } else {
    return;
  }
}

function filterNotes(event) {
  refs.noteList.innerHTML = '';
  notepad.filterNotesByQuery(event.target.value)
    .then(result => renderNoteList(refs.noteList, result))
}

function openModal(event) {
  if (event.target.closest('.action').dataset.action === "open-editor") {
    MicroModal.show("note-editor-modal")
  }
}

refs.form.addEventListener('submit', handleSubmitForm);
refs.noteList.addEventListener('click', removeListItem);
refs.searchForm.addEventListener('input', debounce(filterNotes, 500));
refs.modalForm.addEventListener('click', openModal);