import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = ({names}) => {
    return (
        <nav>
            {names.map(n => 
            <NavLink 
                className="Nav-link" 
                to={`/dogs/${n.toLocaleLowerCase()}`}>
                {n}
            </NavLink>)}
        </nav>
    )
}

export default Nav;