import React from "react";
import { Link } from "react-router-dom";
import './home.component.css';
import PropTypes from 'prop-types';

const Home = ({match, location}) => (
    <div id="home" className="jumbotron mt-0 pt-0">
        <h1>{match.path}</h1>
        <h1>{location.pathname}</h1>

        <p>HOME</p>
        <Link to="" className="btn btn-primary btn-lg">
            Login
        </Link>
    </div>
);

export default Home;

Home.propTypes = {
    match: PropTypes.object,
    location: PropTypes.object
}