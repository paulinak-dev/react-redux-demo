import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { updateNote } from '../api/notesApi';
import * as lexicon from '../common/i18n';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                title: '',
                date: '',
                description: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            note: Object.assign(
                {},
                this.state.note,
                this.props.noteData
            )
        });
    }

    handleChange(event, fieldName) {
        this.setState({
            note: Object.assign(
                {},
                this.state.note,
                { [fieldName]: event.target.value }
            )
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onUpdateClick(this.state.note, this.props.maxId);
        this.setState({
            note: {
                title: '',
                date: '',
                description: ''
            }
        });
    }
    render() {
        let buttons;

        if (this.state.note.id) {
            buttons = (
                <div className="form-buttons-container">
                    <button className="button button__save" type="submit">
                        {lexicon.BUTTON_LABELS.SAVE}
                    </button>
                    <span className="button button__neutral" onClick={this.props.onCancelClick}>
                        {lexicon.BUTTON_LABELS.CANCEL}
                    </span>
                </div>);
        } else {
            buttons = (
                <div className="form-buttons-container__single">
                    <button className="button button__save" type="submit">
                        {lexicon.BUTTON_LABELS.SAVE}
                    </button>
                </div>);
        }

        return (
            <div className="note">
                <article className="note">
                    <header>{this.state.note.id ? lexicon.TITLE_EDIT_NOTE : lexicon.TITLE_NEW_NOTE}</header>
                    <div className="note__body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>{lexicon.FIELD_LABELS.TITLE}</label>
                                <input
                                    type="text"
                                    name="titleValue"
                                    value={this.state.note.title}
                                    onChange={event => this.handleChange(event, 'title')}
                                />
                            </div>
                            <div className="form-group">
                                <label>{lexicon.FIELD_LABELS.DATE}</label>
                                <input
                                    type="text"
                                    name="dateValue"
                                    value={this.state.note.date}
                                    onChange={event => this.handleChange(event, 'date')}
                                />
                            </div>
                            <div className="form-group">
                                <label>{lexicon.FIELD_LABELS.DESCRIPTION}</label>
                                <input
                                    type="text"
                                    name="descriptionValue"
                                    value={this.state.note.description}
                                    onChange={event => this.handleChange(event, 'description')}
                                />
                            </div>
                            {buttons}
                        </form>
                    </div>
                </article>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const maxId = state.notes ? Math.max(...Object.keys(state.notes)) : null;
    return {
        maxId: maxId,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => ({
    onCancelClick: () => dispatch(actions.cancelEditNote()),
    onUpdateClick: (note, maxId) => {
        if (!note.id) {
            note.id = maxId + 1;
        }
        updateNote(note, dispatch);
    }
});
// something with connect not working
NoteForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteForm);

export default NoteForm;