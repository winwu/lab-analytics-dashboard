import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';

function Dashboard() {
    return <h2>Dashboard</h2>;
}
  
function Users() {
    return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path='/'>
                    <Redirect to="/dashboard" />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
