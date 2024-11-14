import Note from "./Note";
import AddNoteButton from "./AddNoteButton";
import SearchField from "./SearchField";
import { search } from "../NotesManager";
import { useState } from "react";

const NotesList = (props) => {
  const [notesToDisplay, setNotesToDisplay] = useState(props.notes);
  
  const searchEntered = (text) => {
    setNotesToDisplay(search(props.notes, text))
  }

  return (
    <div className="noteslist container-xl">
      <SearchField searchEntered={searchEntered}></SearchField>
      <div className="row g-3">
        {notesToDisplay.map((note) => (
          <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3" onClick={() => props.notePressed(note)}>
            <Note note={note} deletePressed={props.deletePressed}/>
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
