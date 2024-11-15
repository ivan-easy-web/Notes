import { nanoid } from "nanoid";

export const readNotes = () => {
  return [
    {
      id: nanoid(),
      header: "First note",
      text: "This is a sample note. Create yours.",
      date: "2024-14-11",
    },
    {
      id: nanoid(),
      header: "Second note",
      text: "This is a sample note. Create yours.",
      date: "2024-14-11",
    },
    {
      id: nanoid(),
      header: "Third note",
      text: "This is a sample note. Create yours.",
      date: "2024-14-11",
    },
    {
      id: nanoid(),
      header: "Forth note",
      text: "This is a sample note. Create yours.",
      date: "2024-14-11",
    },
  ];
};

export const addNote = (notes, newNote) => {
  notes.push(newNote);
  return notes.map((x) => x);
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

export const search = (notes, text) => {
  if (text === "") return notes;
  return notes.filter((note) => {
    return (
      note.header.toLowerCase().includes(text.toLowerCase()) ||
      note.text.toLowerCase().includes(text.toLowerCase())
    );
  });
};

export const updateNote = (notes, updatedNote) => {
  return notes.map((note) => (note.id === updatedNote.id ? updatedNote : note));
};
