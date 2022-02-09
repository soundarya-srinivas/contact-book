
import { Provider } from 'react-redux';
import './App.css';
import { Contact } from './components/contacts/Contact';
import { Navbar } from './components/Navbar';
import store from './store';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import { AddContact } from './components/contacts/AddContact';
import { EditContacts } from './components/contacts/EditContacts';

function App() {
  return (
    <Provider store={store}>
      <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
      <div className="py-3">
        <Routes>
        <Route exact path="/" element={<Contact/>}/>
          <Route exact path="/contacts/add" element={<AddContact/>}/>
          <Route exact path="/contacts/edit/:id" element={<EditContacts/>}/>
       </Routes>
      </div>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
