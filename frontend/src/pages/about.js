import React, { Component } from 'react';

export default class About extends Component {

    render() {
        return (
            <div className={"about"} style={{ backgroundColor: sessionStorage.backgroundColor }}>
                <h1>About</h1>
                <p>This is the first mandatory assignment in Node.js/React.</p>
            </div>
        );
    }
}

