import { useState, useRef } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import {
  readNotes,
  addNote,
  deleteNote,
  createEmptyNote,
  search,
  updateNote,
} from "./NotesManager";
import NoteView from "./components/NoteView";

function App() {
  const [notes, setNotes] = useState(readNotes());
  const [noteToView, setNoteToView] = useState(null);
  const view = useRef("view");

  const notePressed = (note) => {
    if (note) {
      setNoteToView(note);
      view.current = "view";
    } else {
      setNoteToView(createEmptyNote());
      view.current = "add";
    }
  };

  const backPressed = () => {
    setNoteToView(null);
  };

  const savePressed = (newNote) => {
    setNotes(addNote(notes, newNote));
    setNoteToView(newNote);
    console.log(newNote);
  };

  const deletePressed = (id) => {
    setNotes(deleteNote(notes, id));
    setNoteToView(null);
  };

  const updatePressed = (updatedNote) => {
    setNotes(updateNote(notes, updateNote));
  };

  return (
    <div>
      {!noteToView && (
        <NotesList
          notes={notes}
          notePressed={notePressed}
          deletePressed={deletePressed}
        />
      )}
      {noteToView && (
        <NoteView
          note={noteToView}
          backPressed={backPressed}
          savePressed={savePressed}
          updatePressed={updatePressed}
          view={view.current}
          deletePressed={deletePressed}
        />
      )}
    </div>
  );
}

export default App;
