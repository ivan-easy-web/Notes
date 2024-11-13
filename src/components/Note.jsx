import { MdDeleteForever } from "react-icons/md";

const Note = (props) => {
  return (
    <div className="note">
      <div className="note-header">
        <h3>{props.note.header}</h3>
        <span>{props.note.text}</span>
      </div>

      <div className="note-footer">
        <small>{props.note.date}</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
