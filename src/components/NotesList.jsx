import Note from "./Note";
import AddNoteButton from "./AddNoteButton";
import SearchField from "./SearchField";
import { search } from "../NotesManager";
import { useState } from "react";
import { deleteNote } from "../NotesManager";

const NotesList = (props) => {
  const [notesToDisplay, setNotesToDisplay] = useState(props.notes);
  
  const searchEntered = (text) => {
    setNotesToDisplay(search(props.notes, text))
  }

  const deletePressed = (id) => {
    setNotesToDisplay(deleteNote(notesToDisplay, id));
    props.deletePressed(id);
  }

  return (
    <div className="noteslist container-xl">
      <SearchField searchEntered={searchEntered}></SearchField>
      <div className="row g-3">
        {notesToDisplay.map((note) => (
          <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3" onClick={() => props.notePressed(note)} key={note.id}>
            <Note note={note} deletePressed={deletePressed}/>
          </div>
        ))}
        <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3" onClick={() => props.notePressed(null)}>
          <AddNoteButton />
        </div>
      </div>
    </div>
  );
};

export default NotesList;
