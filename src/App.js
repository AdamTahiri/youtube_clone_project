import { Route, Switch } from "react-router-dom";
import About from "./components/About"
import Navbar from "./components/Navbar"
import Home from './components/Home';
import Video from './components/Video';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar className="nav_bar"/>
      <Switch>
        <Route path={"/youtube"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/video/:id"} component={Video} />
      </Switch>
    </div>
  );
}

export default App;
