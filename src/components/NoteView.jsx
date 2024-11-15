import { useState } from "react";
import EditView from "./EditView";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosTrash } from "react-icons/io";

const NoteView = (props) => {
  const [view, setView] = useState(props.view);

  const savePressed = (newNote) => {
    props.savePressed(newNote);
    setView("view");
  };

  const editPressed = () => {
    setView("edit");
  };

  const updatePressed = (updatedNote) => {
    props.updatePressed(updatedNote);
    setView("view");
  };

  return (
    <>
      {view === "view" && (
        <div className="container-xl noteview-container">
          <div className="noteView-header">
            <div>
              <button onClick={props.backPressed}>
                <IoIosArrowBack size="1.5em" />
                All Notes
              </button>
            </div>
            <div>
              <button onClick={editPressed}>Edit</button>
              <button onClick={() => props.deletePressed(props.note.id)}>
                <IoIosTrash size="1.5em" />
              </button>
            </div>
          </div>

          <div className="noteview">
            <h3>{props.note.header}</h3>
            <p>{props.note.text}</p>
            <p className="date">{props.note.date}</p>
          </div>
        </div>
      )}

      {view === "add" && (
        <EditView
          note={props.note}
          savePressed={savePressed}
          cancelPressed={props.backPressed}
          backPressed={props.backPressed}
        />
      )}

      {view === "edit" && (
        <EditView
          note={props.note}
          savePressed={updatePressed}
          cancelPressed={() => setView("view")}
          backPressed={props.backPressed}
        />
      )}
    </>
  );
};

export default NoteView;
