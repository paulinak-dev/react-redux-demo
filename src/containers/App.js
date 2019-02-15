import React from 'react';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';
import HomePage from './HomePage';
import NotesPage from './NotesPage';
import AddNotePage from './AddNotePage';
import * as lexicon from '../common/i18n';
import { fetchNotes } from '../api/notesApi';
import { connect } from 'react-redux';


class App extends React.Component {
  componentDidMount() {
    if (!this.props.notes) {
      this.props.fetchNotes();
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  fetchNotes
};

App = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

const Header = () => (
  <nav>
    <ul className='main-menu'>
      <li className='main-menu_item app-name'><span>{lexicon.APP_NAME}</span></li>
      <li className='main-menu_item'><NavLink exact to='/'>{lexicon.TAB_HOME}</NavLink></li>
      <li className='main-menu_item'><NavLink to='/notes'>{lexicon.TAB_NOTES}</NavLink></li>
      <li className='main-menu_item'><NavLink to='/addNote'>{lexicon.TAB_ADD_NOTE}</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/notes' component={NotesPage} />
      <Route path='/addNote' component={AddNotePage} />
    </Switch>
  </main>
);

export default App;