import { nanoid } from "nanoid";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";


const EditView = (props) => {
  const [header, setHeader] = useState(props.note.header);
  const [text, setText] = useState(props.note.text);

  const saveNote = () => {
    let newNote = props.note;
    newNote.id = nanoid();
    newNote.header = header;
    newNote.text = text;
    newNote.date = new Date().toJSON().slice(0, 10);
    return newNote;
  };

  return (
    <div className="container-xl noteview-container">
      <div className="noteView-header">
        <div>
          <button onClick={props.backPressed}>
            <IoIosArrowBack size="1.5em" />
            All Notes
          </button>
        </div>
        <div>
          <button onClick={props.cancelPressed}>Cancel</button>
          <button onClick={() => props.savePressed(saveNote())}>Save</button>
        </div>
      </div>

      <div className="noteview editview">
        <h3>
          <input
            className="editview-header"
            type="text"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          ></input>
        </h3>

        <p>
          <textarea
            autoFocus
            className="editview-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </p>
      </div>
    </div>
  );
};

export default EditView;
