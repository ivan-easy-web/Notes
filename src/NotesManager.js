import { nanoid } from "nanoid";

export const readNotes = () => {
  return [
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
  ];
};

export const addNote = (notes, newNote) => {
  notes.push(newNote);
  return notes;
};

export const deleteNote = (notes, deleteId) => {
  return notes.filter((note) => note.id !== deleteId);
};

export const createEmptyNote = () => {
  return {
    id: null,
    header: "New Note",
    text: "",
    date: new Date().toJSON().slice(0, 10),
  };
};
