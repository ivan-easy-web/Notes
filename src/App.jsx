import { useState } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import { readNotes, addNote, deleteNote, createEmptyNote, search } from "./NotesManager";
import NoteView from "./components/NoteView";

function App() {
  const [notes, setNotes] = useState(readNotes());
  const [noteToView, setNoteToView] = useState(null);

  const notePressed = (note) => {
    if (note) {
      setNoteToView(note);
    } else {
      setNoteToView(createEmptyNote())
    }
  }

  const backPressed = () => {
    setNoteToView(null)
  }

  const savePressed = (newNote) => {
    setNotes(addNote(notes, newNote))
    setNoteToView(newNote)
  }

  const deletePressed = (id) => {
    setNotes(deleteNote(notes, id))
  }

  return (
    <div>
      <h3>Notes</h3>
      {!noteToView && <NotesList notes={notes} notePressed={notePressed} deletePressed={deletePressed}/>}
      {noteToView && <NoteView note={noteToView} backPressed={backPressed} savePressed={savePressed}/>}
    </div>
  );
}

export default App;
