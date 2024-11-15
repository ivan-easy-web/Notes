
import { IoIosTrash } from "react-icons/io";

const Note = (props) => {
  return (
    <div className="note">
      <div className="note-header">
        <h3 className="notelist-header">{props.note.header}</h3>
        <p className="notelist-text">{props.note.text}</p>
      </div>

      <div className="note-footer">
        <small>{props.note.date}</small>
        <IoIosTrash
          className="delete-icon"
          size="1.3em"
          onClick={(e) => {
            props.deletePressed(props.note.id);
            e.stopPropagation();
            e.preventDefault();
          }}
        />
      </div>
    </div>
  );
};

export default Note;
