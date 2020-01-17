import React, { useState } from "react";
import axios from "axios"

export default function Navbar() {

  const [users, setUsers ] = useState([])

    React.useEffect(() => {
        axios.get("http://gdf-profile-card-flask-api.herokuapp.com/profiles")
        .then(response => {
            setUsers(response.data)
            console.log(response)
        })
        .catch(error => {
            console.log("data base axios error", error);
        })
    }, [])

    const findLoggedInProfile = () => {
      return users.map(user => {
        console.log("USER", user.name, "LOGGED IN STATUS", user.loggedIn)
        if (user.loggedIn) {
          return user.name
        }
      })
    }


  return (
    <div className="nav-bar">
      <div className="logo-wrapper">
        <div className="desc-logo">
            ---------------------
        </div>
        <div className="desc-logo">
            Descriptive Logo
        </div>
        
        <div className="desc-logo">
            ---------------------
        </div>
      </div>
      
      <div className="nav-link-wrapper">
          <div className="nav-link">
              <button className="nav-button">nav button</button>
          </div>
          <div className="nav-link">
              <button className="nav-button">nav button</button>
          </div>
          <div className="nav-link">
              <button className="nav-button">nav button</button>
          </div>
          <div className="nav-link">
              <button className="nav-button">nav button</button>
          </div>
      </div>
      <div className="user-space">
        <button className="nav-button">{findLoggedInProfile()}</button>
      </div>
    </div>
  );
}
