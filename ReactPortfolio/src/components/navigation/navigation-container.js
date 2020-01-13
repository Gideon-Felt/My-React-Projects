import React from 'react';
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'


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
    

    const handleSignOut = () => {
        axios.delete("https://api.devcamp.space/logout", { withCredentials: true})
        .then(response => {
            if (response.status === 200) {
                props.history.push("/")
                props.handleSuccessfulLogout()
            }
            return response.data
        }).catch(error => {console.log("error signing out:", error)})
    }

    return(
        <div className="nav-wrapper">
            <div className="left-side">

                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>

                {dynamicLink("/about-me", "About")}
                {dynamicLink("/contact", "Contact")}
                {dynamicLink("/blog", "Blog")}

                {/*  AUTHENTICATED USERS ONLY*/}
                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/portfolio-manager", "Portfolio Manager") : null}

            </div>

            <div className="right-side">
                GIDEON FELT

                {props.loggedInStatus === 'LOGGED_IN' ? <a onClick={handleSignOut}>Sign Out</a> : null}
            </div>
        </div>
    )
}

export default withRouter(NavigationComponent);