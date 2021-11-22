import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";
import Home from "./pages/Home";
import Video from "./components/Video";
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Navbar className="nav_bar" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={Videos} />
          <Route path="/videos/:id" component={Video} />
          {/* <Route path={"/videos"} component={VideoList} /> */}
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
