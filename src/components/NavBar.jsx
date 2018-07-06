import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
             <div className="navbar-collapse collapse" id="navbarsExample03" >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Catalogue">Cata</Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Link</Link>
                </li>
                
              </ul>
             
            </div>
            </div>
          </nav>
        );
    }
}

export default NavBar;