import React, { Component } from 'react';
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/Home'

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component= { Home } />
          </Switch>
         
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;