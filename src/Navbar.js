import React from 'react';
import "././style.css"

export const Navbar=()=>{
    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <ul class="nav justify-content-end">
  <li class="nav-item">
    <a className="text nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="gray nav-link" href="#">About</a>
  </li>
  <li clasNames="nav-item">
    <a className="gray nav-link" href="#">Services</a>
  </li>
  <li className="nav-item">
    <a className="gray nav-link">Contact</a>
  </li>
</ul>
    </div>
  </nav>
   
    );
}