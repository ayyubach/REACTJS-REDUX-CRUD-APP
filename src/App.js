import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import { Provider } from 'react-redux';
import store from './store/Store';

import NavBar from './components/NavBar'
import ListUsers from './components/ListUsers'
import EditUser from './components/EditUser'
import AddUser from './components/AddUser'

function App() {


//store.dispatch({type:'ADD_USER',payload:{id:'3',name:'33',email:'ayyub@email.com'}});
  return (
        <Provider store={store}>
        <Router>
        <div className="App">
          <Switch>

          <Route path='/' exact >
           <NavBar To='/adduser' value='Add User' />
           <ListUsers />
          </Route>

          <Route path='/edit/:id' exact component={EditUser} /> 

          <Route path='/adduser' exact>
            <AddUser />
          </Route>
          </Switch>

        </div>  

        </Router>
        </Provider>


  );
}

export default App;
