import React from 'react';
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';
import { connect } from 'react-redux';

import * as _ from 'lodash';
import * as lexicon from '../common/i18n';

class NotesPage extends React.Component {
    render() {
        let content = [];
        let loadingText;
        let errorText;

        if (this.props.loading) {
            loadingText = <h3>{lexicon.LOADING_TEXT}</h3>;
        }

        if (this.props.requestError) {
            errorText = <div>requestError</div>
        }

        content = _.keys(this.props.notes).map(note => {
            let component;
            if (this.props.editingNote === +note) {
                component = <NoteForm noteData={this.props.notes[note]} />;
            } else {
                component = <Note noteData={this.props.notes[note]} showButtons={true} />;
            }
            return <div key={note} className="note">{component}</div>;
        });

        return (
            <div className="note-panel">
                <h1>{lexicon.TITLE_NOTE}</h1>
                {loadingText}
                {errorText}
                {content}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        notes: state.notes,
        loading: state.loading,
        editingNote: state.editingNote,
        requestError: state.requestError
    };
};

NotesPage = connect(
    mapStateToProps,
    null
)(NotesPage);

export default NotesPage;