import { nanoid } from "nanoid"
import { useState } from "react"

const EditView = (props) => {
    const [header, setHeader] = useState(props.note.header)
    const [text, setText] = useState(props.note.text)

    const saveNote = () => {
        let newNote = props.note;
        newNote.id = nanoid();
        newNote.header = header;
        newNote.text = text;
        newNote.date = new Date().toJSON().slice(0, 10);
        return newNote;
    }

    return (
        <div className="noteview container-xl">
            <input type="text" value={header} onChange={e => setHeader(e.target.value)}></input>
            <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={() => props.savePressed(saveNote())}>Save</button>
        </div>
    )
}

export default EditView;