import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Catalogue from './Pages/Catelogue';

class App extends Component {
  render() {
    return (
     
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path ='/Catalogue' component={Catalogue} />
          <Route path ='/Contact' component={Contact} />
        </div>
      </Router>

    );
  }
}

export default App;
