import React, { useState } from "react";


export default function footer() {
  return (
    <div className="footer">
        
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

      <div className="copyright-footer">
          Copyright Here
      </div>
    </div>
  );
}
