import React, { useState } from "react";
import api from "../api";
import getNotes from './Home';

function CreateNote() {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    const createNote = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("text", text); // Changed the field name to "text"
        formData.append("author", author);

        try {
            const res = await api.post("/api/notes/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.status === 201) {
                alert("Note created!");
                getNotes();
            } else {
                alert("Failed to create note.");
            }
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote} encType="multipart/form-data">
                
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        required
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />
                </div>
                <div>
                    <label htmlFor="text">Text:</label>
                    <textarea // Changed input to textarea
                        id="text"
                        name="text"
                        required
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default CreateNote;
