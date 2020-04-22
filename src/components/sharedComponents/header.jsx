import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    debugger;
    const activeStyle = { color: "#F15B2A" };
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
                Login
            </NavLink>
            {" | "}
            <NavLink to="/home" activeStyle={activeStyle}>
                Home
            </NavLink>
        </nav>
    );
};

export default Header;
