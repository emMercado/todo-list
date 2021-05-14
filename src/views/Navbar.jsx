import React, { Component } from 'react';

import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <p>
                <Link to="/">Home</Link>
                <Link to="/companies">Companies</Link>
                <Link to="/cities">Cities</Link>
                <Link to="/countries">Countries</Link> 
                
            </p>
        )
    }
}
