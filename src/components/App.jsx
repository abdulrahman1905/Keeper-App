import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";




function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return notes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((note, index) => 
                <Note 
                    key={index}
                    id={index} 
                    title={note.title} 
                    content={note.content}
                    onDelete={deleteNote} 
                />
            )}
            <Footer />
        </div>
    );
}

export default App;