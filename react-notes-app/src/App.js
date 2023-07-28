import React from 'react';
import Sidebar from "./Components/Sidebar"
import Editor from "./Components/Editor";
import { v4 as uuidv4 } from 'uuid';
import './style.css';

function App() {

  const [notes,setNotes] = React.useState(() => JSON.parse(localStorage.getItem("notes"))||[]);
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    console.log('function call check')
    const newNote = {
      id: uuidv4(), 
      body: "# Type your markdown note's title here"
    };
    console.log('new notes',newNote)
    setNotes(prevNotes => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  };

  function updateNote(text){
    setNotes(oldNotes => {
      const newArray = []
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text })
        } else {
          newArray.push(oldNote)
        }
      }
      return newArray;
    })
  };

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
  };

  function findCurrentNote() {
    return notes.find(note => note.id === currentNoteId) || notes[0];
  };

  return (
     <div className="split-container">
      {notes.length > 0 ? (
       <div className="split-left">
           <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNote={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          /> 
          {currentNoteId && notes.length > 0 && ( 
            <div className="split-right">
            <Editor className="split-right" currentNote={findCurrentNote()} updateNote={updateNote} /> 
            </div>
           ) }
           </div>
           
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}
          >
            Create one now
          </button>
        </div>
      )}
    </div>
  );
}

export default App;