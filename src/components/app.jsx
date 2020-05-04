import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./authentication/login-page.component.jsx";
import Home from "./home/home.component.jsx";
import Header from "./sharedComponents/header.component.jsx";
import SignUp from "./authentication/signup-page.component.jsx";
import "./app.css";
import PageNotFound from "./page-not-found.component.jsx";
import PropTypes from 'prop-types';

const exclusionArray = [
    '/',
    '/signup',
  ]
const App = ({location}) => {
    debugger;
    return (
        <>
            {exclusionArray.includes(location.pathname) && <Header />}
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/home" component={Home} />
                <Route component={PageNotFound} />
            </Switch>
        </>
    );
}

export default App;
//            <Jumbotron id="app" className="pt-0">

App.propTypes = {
    location: PropTypes.object
}