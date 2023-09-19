import "./index.css";
import "./index.js";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Header from "./Header";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {
  const [notes, setNotes] = useState(() => {
  const localNotes = localStorage.getItem("notes");
  return localNotes ? JSON.parse(localNotes) : [];
});


  const [activeNote, setActiveNote] = useState(false);
  

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {

    const newNote = {

      id: uuidv4(),
      title: "",
      body: "",
      lastModified: Date.now(), 
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };
  
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };


  const onDeleteNote = (idToDelete) => {
    if(window.confirm('Are you sure ?') === true)
    {
    setNotes(notes.filter((note) => note.id !== idToDelete));
    };
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote) ;
  };

  return (
  <div className="App">
    <Header/> 
   
    
    <Sidebar
    notes={notes} 
    onAddNote={onAddNote} 
    onDeleteNote={onDeleteNote}
    activeNote={activeNote}
    setActiveNote={setActiveNote}
    />
    <Main 
    activeNote={getActiveNote()}
    onUpdatedNote={onUpdateNote}
    onDeleteNote={onDeleteNote}
    notes={notes}
    />
  
  </div>


  );

}

export default App;
