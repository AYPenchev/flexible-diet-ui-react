import React from "react";
import { Route } from "react-router-dom";
import Login from "./authentication/login-page.component.jsx";
import Home from "./home/home.component.jsx";

function App() {
    return (
        <div className="container-fluid">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
        </div>
    )
}

export default App;