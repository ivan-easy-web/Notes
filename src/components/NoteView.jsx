import { useState } from "react";
import EditView from "./EditView";

const NoteView = (props) => {
  const [editView, setEditView] = useState(props.note.id === null);

  const savePressed = (newNote) => {
    props.savePressed(newNote);
    setEditView(false);
  };

  return (
    <div className="container-xl noteview-container">
      <div className="noteview ">
        {!editView && (
          <>
            <div className="noteview-header">
              <h3>{props.note.header}</h3>
              <span>{props.note.date}</span>
              <button onClick={props.backPressed}>Back</button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
            <span>{props.note.text}</span>
          </>
        )}

        {editView && <EditView note={props.note} savePressed={savePressed} />}
      </div>
    </div>
  );
};

export default NoteView;
