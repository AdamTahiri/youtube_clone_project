import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage"
import About from "./Components/About"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={"/youtube"} component={Homepage} />
        <Route exact path={"/about"} component={About} />
      </Switch>
    </div>
  );
}

export default App;
