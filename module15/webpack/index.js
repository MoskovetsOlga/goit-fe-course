"use strict";

export default class Notepad {
  constructor(notes = []){
     this._notes = notes; 
  }

  static Priority = { LOW: 0, NORMAL: 1, HIGH: 2,}

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    for (let note of this._notes) {
      if (note.id === id) return note;
    }
    return;
  }

  saveNote(note) {
    this._notes.push(note);
    return note;
  }

  deleteNote(id) {
    this._notes.splice(this._notes.indexOf(this.findNoteById(id)), 1);
    return this._notes
  }

  updateNoteContent(id, updatedContent) { 
    if (this.findNoteById(id)){  
    return  this._notes[this._notes.indexOf(this.findNoteById(id))] = {...this.findNoteById(id), ...updatedContent}
      
    }     
  }

  updateNotePriority(id, priority) {
    for (let note of this._notes) {
      if (note.id === id) {
        note.priority = priority;
        return note;
      }
    }
  }

  filterNotesByQuery(query) {
    const res = [];

    for (let note of this._notes) {
      if (
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
      ) {
        res.push(note);
        return res;
      }
    }
  }

  filterNotesByPriority(priority) {
    const res = [];

    for (let note of this._notes) {
      if (note.priority === priority) {
        res.push(note);
      }
    }
    return res;
  }


};