import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./components/About"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path={"/youtube"} component={Homepage} />
        <Route path={"/about"} component={About} />
      </Switch>
    </div>
  );
}

export default App;
