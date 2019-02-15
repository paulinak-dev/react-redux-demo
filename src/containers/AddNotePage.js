import React from 'react';
import NoteForm from '../components/NoteForm';
import * as lexicon from '../common/i18n';

let AddNotesPage = () => (
    <div className="note-panel">
        <h1>{lexicon.TITLE_NOTE}</h1>
        <NoteForm noteData={{}} />
    </div>
);

export default AddNotesPage;