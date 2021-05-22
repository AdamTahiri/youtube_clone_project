<<<<<<< HEAD
import './App.css';
import Home from './components/Home';

=======
import { Route, Switch } from "react-router-dom";
import About from "./components/About"
import Navbar from "./components/Navbar"
import Home from './components/Home';
import "./App.css";
>>>>>>> 2c1d971fd75f8726512c1d55704f9c5c5abd8a6e

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Home />
=======
      <Navbar />
      <Switch>
        <Route path={"/youtube"} component={Home} />
        <Route path={"/about"} component={About} />
      </Switch>
>>>>>>> 2c1d971fd75f8726512c1d55704f9c5c5abd8a6e
    </div>
  );
}

export default App;
