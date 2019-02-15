import * as actions from '../actions/actions';

const dataMock = {
    "1": {
        "id": 1,
        "title": "My first note",
        "date": "01.01.2019",
        "description": "trying out my notes"
    },
    "2": {
        "id": 2,
        "title": "My second note",
        "date": "04.01.2019",
        "description": "trying out my notes second time"
    },
    "3": {
        "id": 3,
        "title": "My note",
        "date": "08.01.2019",
        "description": "It's already a week..."
    }
};

export const fetchNotes = () => {
    return dispatch => {
        dispatch(actions.requestInProgress());
        // request for data here
        dispatch(actions.receivedNotes(dataMock));
    };
}

export const updateNote = (note, dispatch) => {
    dispatch(actions.requestInProgress());
    // request for data update here
    dispatch(actions.updateNote(note));
}

export const removeNote = (noteId, dispatch) => {
    dispatch(actions.requestInProgress());
    // request for data removal here
    dispatch(actions.deleteNote(noteId));
}
