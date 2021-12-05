import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// styles
import GlobalStyle from './GlobalStyles.styled';
import './App.css';

// components & pages
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router>
        <Sidebar />
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/projects/:id'>
              <Project />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
