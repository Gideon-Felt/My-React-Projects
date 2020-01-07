// { fobar } if in brackets its not an export default, and optional if you only import one item
import React, { Component } from 'react';
import moment from "moment"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Blog from './pages/blog'
import PortfolioDetail from "./portfolio/portfolio-detail"
import NoMatch from './pages/no-match'

export default class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>Gideon Felts Personal Portfolio</h1>
            <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <NavigationContainer />
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>

          </div>
        </Router>



        
      </div>
    );
  }
}
