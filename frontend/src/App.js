import "./Styles/styles.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screen/Home";
import Menu from "./screen/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="FirstSection">
          <Navbar />
        </div>

        <main>
          <Route path="/" exact component={Home}></Route>
          <Route path="/menu" component={Menu}></Route>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
