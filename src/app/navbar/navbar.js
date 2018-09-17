import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/post/hot">
            <i
                className="fab fa-reddit-alien fa-2x"
                style={{ color: '#FF4500' }}
            />
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#menu">
            <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to="/post/new" activeClassName="menu selected">
                            New
                        </NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink
                            to="/post/hot"
                            activeClassName="menu selected"
                            exact={true}>
                            Hot
                        </NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to="/post/top" activeClassName="menu selected">
                            Top
                        </NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink
                            to="/post/rising"
                            activeClassName="menu selected">
                            Rising
                        </NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);
