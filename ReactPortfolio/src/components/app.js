// { fobar } if in brackets its not an export default, and optional if you only import one item
import React, { Component } from 'react';
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
import Auth from "./pages/auth"
import NoMatch from './pages/no-match'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)

  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }


  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />
            <h2>{this.state.loggedInStatus}</h2>

            <Switch>
              <Route path="/auth"
              render={props => (
                <Auth 
                {...props}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                />
              )}
              />
              <Route exact path="/" component={Home} />
              <Route exact path="/auth" component={Auth} />
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
