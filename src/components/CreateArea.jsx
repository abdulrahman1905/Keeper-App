import React, { useState } from "react";

function CreateArea(props){
    const [noteInput, setNoteInput] = useState({
        title: "",
        content: ""
    });

    function handleInput(event){
        const {name, value} = event.target;
        setNoteInput(prevValue => {
            return {...prevValue, [name]: value};
        });
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInput} name="title" placeholder="Title" value={noteInput.title}></input>
                <textarea onChange={handleInput} name="content" placeholder="Take a note..." value={noteInput.content} rows="3"></textarea>
                <button onClick={() => {
                        props.onAdd(noteInput);
                        setNoteInput({title: "", content: ""})
                    }
                }>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;