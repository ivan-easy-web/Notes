import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNote] = useState([
    {
      id: nanoid(),
      header: "First note",
      text: "This is a sample note. Create yours.",
      date: "14.11.2024",
    },
    {
      id: nanoid(),
      header: "Second note",
      text: "This is a sample note. Create yours.",
      date: "14.11.2024",
    },
    {
      id: nanoid(),
      header: "Third note",
      text: "This is a sample note. Create yours.",
      date: "14.11.2024",
    },
    {
      id: nanoid(),
      header: "Forth note",
      text: "This is a sample note. Create yours.",
      date: "14.11.2024",
    },
  ]);

  return (
    <div>
      <h3>Notes</h3>
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
