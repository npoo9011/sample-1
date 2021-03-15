import React  from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup"

function App  (){
  
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route  path="/Signup" component={Signup} />

        </div>
      </Router>
    );
  
}
export default App;


