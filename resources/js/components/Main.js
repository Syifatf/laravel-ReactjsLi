import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./employee/Form"
import List from "./employee/List"
import Edit from "./employee/Edit"

// import Switch from "react-router-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
  
function Main(){
  return (
    <div className="home">
    <Router>
    <main>
      <Nav/>
      <Switch>
        <Route path="/employee/index" exact component={List} />
        <Route path="/employee/form"  component={Form} />
        <Route path="/employee/edit/:id" component={Edit} />
      </Switch>

      <script src="../css/app.css"></script>
      
    </main>
  </Router>
    </div>
  )
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById('main-employee'));
