import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage"
import About from "./Components/About"

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
