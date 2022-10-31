import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css'

// pages & components 
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup"
import Project from "./pages/project/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/projects/:id">
            <Project />
          </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App
