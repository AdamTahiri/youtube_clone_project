import { Route, Switch } from "react-router-dom";
import About from "./components/About"
import Navbar from "./components/Navbar"
import Home from './components/Home';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path={"/youtube"} component={Home} />
        <Route path={"/about"} component={About} />
      </Switch>
    </div>
  );
}

export default App;
