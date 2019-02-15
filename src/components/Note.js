import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { removeNote } from '../api/notesApi';
import * as lexicon from '../common/i18n';

let Note = ({ noteData, onEditClick, onRemoveClick }) => {
    let buttons;

    buttons = (<div className="buttons-container">
        <button className="button button__edit" onClick={() => onEditClick(noteData.id)}>
            {lexicon.BUTTON_LABELS.EDIT}
        </button>
        <button className="button button__remove" onClick={() => onRemoveClick(noteData.id)}>
            {lexicon.BUTTON_LABELS.REMOVE}
        </button>
    </div>);

    return (
        <article>
            <header>{lexicon.TITLE_NOTE_PREFIX + noteData.title}</header>
            {buttons}
            <div className="note__body">
                <p>{lexicon.FIELD_LABELS.TITLE}: {noteData.title}</p>
                <p>{lexicon.FIELD_LABELS.DATE}: {noteData.date}</p>
                <p>{lexicon.FIELD_LABELS.DESCRIPTION}: {noteData.description}</p>
            </div>
        </article>
    );
};

const mapStateToProps = () => { return {} };

const mapDispatchToProps = dispatch => ({
    onEditClick: id => dispatch(actions.editNote(id), dispatch),
    onRemoveClick: id => removeNote(id, dispatch)
});

Note = connect(
    mapStateToProps,
    mapDispatchToProps
)(Note);

export default Note;
