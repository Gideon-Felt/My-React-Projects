import React, { useState } from "react";

export default function Card(props) {


  return (
    <div className="profile-card">
        <div className="profile-image">
            <img src={props.user.image_url}/>
        </div>
        <h2>{props.user.name}</h2>
        <h3 style={{textAlign: "center"}}>{props.user.description}</h3>
        <h3>TYPE: {props.user._type}</h3>
      
    </div>
  );
}
