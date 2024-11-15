import { useState } from "react";
import EditView from "./EditView";

const NoteView = (props) => {
  const [view, setView] = useState(props.view);

  const savePressed = (newNote) => {
    props.savePressed(newNote);
    setView('view');
  };

  const editPressed = () => {
    setView('edit');
  };

  const updatePressed = (updatedNote) => {
    props.updatePressed(updatedNote);
    setView('view');
  };

  return (
    <div className="container-xl noteview-container">
      <div className="noteview ">
        {(view === 'view') && (
          <>
            <div className="noteview-header">
              <h3>{props.note.header}</h3>
              <span>{props.note.date}</span>
              <button onClick={props.backPressed}>Back</button>
              <button onClick={editPressed}>Edit</button>
              <button onClick={() => props.deletePressed(props.note.id)}>Delete</button>
            </div>
            <span>{props.note.text}</span>
          </>
        )}

        {(view === 'add') && <EditView note={props.note} savePressed={savePressed} cancelPressed={props.backPressed}/>}
        {(view === 'edit') && <EditView note={props.note} savePressed={updatePressed} cancelPressed={() => setView('view')}/>}
      </div>
    </div>
  );
};

export default NoteView;
