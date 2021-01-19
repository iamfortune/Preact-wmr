import { useState } from 'preact/hooks';
import { FaTrash } from "react-icons/fa";
import styles from './style.module.css';

export default function NoteApp() {
    const [Notes, setNotes] = useState([]);
    const [currNote, setcurrNote] = useState('');


    const addNote = note_content => {
        Notes.push({
            id: Notes.length,
            note: note_content
        });
        setcurrNote('');
    }

    const deleteNote = note_idx => {
        const notes = Notes.filter(note => note.id !== note_idx);
        setNotes(notes);
    } 
    
    const extractNotes = () => (
        Object.values(Notes).map(note => (
            <li key={note.id} class={styles.noteItem}>
                <span class={styles.deleteIcon} onClick={ e => deleteNote(note.id) }>
                    <FaTrash size={20} color={"red"} />
                </span>
                { note.note }
            </li>
        ))        
    )

    return (
        <section class={styles.wmr_app}>
            <h1>WMR Note App</h1>
            <div class={styles.inputArea}>
                <input
                    class={styles.inputField} 
                    type="text" value={currNote} 
                    onChange={ e => setcurrNote(e.currentTarget.value) } 
                    onKeyUp={ e => e.key == 'Enter' ? addNote(currNote) : null }
                />
                <button class={styles.button} onClick={ () => addNote(currNote) }>Add</button>
            </div>
            <div class={styles.notes_list_wrapper}>
                <ul class={styles.unstyled_list}>
                    { extractNotes() }
                </ul>
            </div>
        </section>
    )
}
