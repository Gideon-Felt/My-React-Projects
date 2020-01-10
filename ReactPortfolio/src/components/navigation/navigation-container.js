import React from 'react';
import { NavLink } from 'react-router-dom'

const NavigationComponent = (props) => {

    const dynamicLink = (route, linkText) => {
        return(
            <div className="nav-link-wrapper">
            <NavLink to={route} activeClassName="nav-link-active">
                { linkText }
            </NavLink>
        </div>
        )
    }
    
    return(
        <div className="nav-wrapper">
            <div className="left-side">
                {dynamicLink("/", "Home")}
                {dynamicLink("/about-me", "About")}
                {dynamicLink("/contact", "Contact")}

                {/*  AUTHENTICATED USERS ONLY*/}
                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/blog", "Blog") : null}

            </div>
            
            <div className="right-side">
                GIDEON FELT
            </div>
        </div>
    )
}

export default NavigationComponent