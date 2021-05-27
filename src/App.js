import { Route, Switch } from "react-router-dom";
import { useState } from 'react'
import About from "./components/About"
import Navbar from "./components/Navbar"
import Home from './components/Home';
import Video from './components/Video';
import VideoList from './components/VideoList';

import "./App.css";

const App = () => {
  // const goback = () => {
  //   History.push(“/“)
  // }
  
  return (
    <div className="App">
      <Navbar className="nav_bar"/>
      <Switch>
        <Route path={"/videos/:id"} component={Video} />
        {/* <Route path={"/videos"} component={VideoList} /> */}
        <Route path={"/about"} component={About} />
        <Route path={"/"} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
