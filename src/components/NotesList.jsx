import Note from "./Note";
import AddNoteButton from "./AddNoteButton";

const NotesList = (props) => {
  return (
    <div className="noteslist container-xl">
      <div className="row g-3">
        {props.notes.map((note) => (
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
