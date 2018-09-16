import React from 'react';
import { NavLink } from 'react-router-dom';


export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
            <i className="fab fa-reddit-alien fa-2x" style={{color: '#FF4500'}}></i>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/hot' activeClassName='menu selected'  exact={true}>Hot</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/new' activeClassName='menu selected'>New</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/top' activeClassName='menu selected'>Top</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/rising' activeClassName='menu selected'>Rising</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);