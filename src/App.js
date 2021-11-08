import './App.css';
import Contacts from './componets/Contacts';
import Header from './componets/Header';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddContact from './componets/AddContact';
import EditContact from './componets/EditContact';

function App() {
  return (
    <div className="App">

     <Router>
      <Header/>

 <Switch>
    <Route exact path="/" component={Contacts}></Route>
    <Route exact path="/contacts/add" component={AddContact}></Route>
     <Route exact path="/contacts/edit/:id" component={EditContact}></Route>
</Switch>
    
  </Router>

   
    </div>
  );
}

export default App;
