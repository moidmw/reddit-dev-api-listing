import React from 'react';
import { NavLink } from 'react-router-dom';


export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
            <i className="fab fa-react fa-2x" style={{color: 'dodgerblue'}}></i>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/' activeClassName='menu selected' exact={true}>HOME</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);