import * as actions from '../actions/actions';


const reducer = (state = {}, action) => {
    switch (action.type) {
        case actions.UPDATE_NOTE:
            return {
                ...state,
                notes: { ...state.notes, [action.note.id]: action.note },
                editingNote: false,
                loading: false
            };
        case actions.EDIT_NOTE:
            return { ...state, editingNote: action.noteId };
        case actions.CANCEL_EDIT_NOTE:
            return { ...state, editingNote: '-' };
        case actions.DELETE_NOTE:
            let newNotes = { ...state.notes };
            delete newNotes[action.noteId];
            return { ...state, notes: newNotes, loading: false };
        case actions.REQUEST_IN_PROGRESS:
            return { ...state, loading: true };
        case actions.RECEIVE_NOTES:
            return {
                ...state,
                notes: action.notes,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
