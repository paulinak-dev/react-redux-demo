export const REQUEST_IN_PROGRESS = 'REQUEST_IN_PROGRESS',
    UPDATE_NOTE = 'UPDATE_NOTE',
    EDIT_NOTE = 'EDIT_NOTE',
    CANCEL_EDIT_NOTE = 'CANCEL_EDIT_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    RECEIVE_NOTES = 'RECEIVE_NOTES',

    requestInProgress = () => ({
        type: REQUEST_IN_PROGRESS,
    }),

    receivedNotes = notes => ({
        type: RECEIVE_NOTES,
        notes: notes
    }),

    updateNote = note => ({
        type: UPDATE_NOTE,
        note: note
    }),

    editNote = noteId => ({
        type: EDIT_NOTE,
        noteId: noteId
    }),

    cancelEditNote = () => ({
        type: CANCEL_EDIT_NOTE,
    }),

    deleteNote = noteId => ({
        type: DELETE_NOTE,
        noteId: noteId
    });
