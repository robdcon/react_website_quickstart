import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Wrapper
import PageWrapper from './containers/PageWrapper'
//Components
import ExpandableSidebar from './components/ExpandableSidebar'
//Pages
// PAGES
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
        <PageWrapper> 

            <ExpandableSidebar>
            </ExpandableSidebar> 

            <Route 
              exact={true}
              path='/'
              component={Home}
            /> 

            <Route 
              exact={true}
              path='/about'
              component={About}
            /> 

            <Route 
              exact={true}
              path='/services'
              component={Services}
            /> 

            <Route 
              exact={true}
              path='/portfolio'
              component={Portfolio}
            /> 

            <Route 
              exact={true}
              path='/contact'
              component={Contact}
            /> 

        </PageWrapper>
        </Router>

      </div>
    );
  }
}

export default App;
