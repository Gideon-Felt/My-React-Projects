import React, { useState } from "react";
import axios from "axios"

import Card from "./profile-card"





export default function CardSpace() {

    const [users, setUsers ] = useState([])

    React.useEffect(() => {
        axios.get("http://localhost:5000/profiles")
        .then(response => {
            setUsers(response.data)
            console.log(response)
        })
        .catch(error => {
            console.log("data base axios error", error);
        })
    }, [])
    
    const readDb = () => {
       return users.map(user => {
            return (
                <div key={user.id} className="card-button-wrapper">
                    <Card user={user}/>
                    <button className="action-button">{user.action}</button>
                </div>
                
            )
            
        })
    }


    return(
        <div className="card-space">
            {readDb()}
        </div>
        
    )

  
}
