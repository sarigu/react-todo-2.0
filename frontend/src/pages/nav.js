import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

