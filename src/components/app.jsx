import React from 'react';
import { Route } from 'react-router-dom';
import Login from './authentication/login-page.component.jsx';
import Home from './home/home.component.jsx';
import Header from './sharedComponents/header.jsx';

function App() {

    return (
        <div className="container-fluid">
            <Header />
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
        </div>
    )
}

export default App;