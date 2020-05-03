import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./authentication/login-page.component.jsx";
import Home from "./home/home.component.jsx";
import Header from "./sharedComponents/header.component.jsx";
import SignUp from "./authentication/signup-page.component.jsx";
import { Jumbotron } from "react-bootstrap";
import './app.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Fragment>
                <Jumbotron id="app" className="pt-0">
                    <Header />
                    <hr/>
                    <Route path="/home" component={Home} />
                </Jumbotron>
            </Fragment>
        </Switch>
    );
}

export default App;
