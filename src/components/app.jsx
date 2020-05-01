import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./authentication/login-page.component.jsx";
import Home from "./home/home.component.jsx";
import Header from "./sharedComponents/header.jsx";
import SignUp from "./authentication/signup-page.component.jsx";

function App() {
    return (
        <div className="container-fluid">
            <Switch>
                <Route exact path="/" component={Login} />
                <Fragment>
                    <Header />
                    <Route path="/home" component={Home} />
                    <Route path="/signup" component={SignUp} />
                </Fragment>
            </Switch>
        </div>
    );
}

export default App;
