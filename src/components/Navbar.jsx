import React, { Component } from 'react';

import {Link} from 'react-router-dom';

export default class Navbar extends Component {

/*     constructor(props) {
        super(props);
    }
 */

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Home</Link>

                    <Link className="navbar-brand" to="/jobs">Jobs</Link>
                    <Link className="navbar-brand" to="/companies">Companies</Link>
                    <Link className="navbar-brand" to="/cities">Cities</Link>
                    <Link className="navbar-brand" to="/countries">Countries</Link>
                </div>
            </nav>
        )
    }
}
