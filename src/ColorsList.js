import React from "react"
import { Link } from "react-router-dom";
import "./ColorsList.css"

const ColorsList = ({colors, setRedirect}) => {
    setRedirect(false)
    return(
        <div>
            <div className="ColorsList-header">
                <h2>Welcome to the Color Factory!</h2>
                <Link className="ColorsList-new" to="/colors/new">Add a Color</Link>
            </div>
            <p>Please Select a Color</p>
            <ul>
            {colors.map(c => 
                <li> 
                    <Link 
                        to={`colors/${c.name}`}
                        style={{color: c.value}}>{c.name}</Link> 
                </li>)}
            </ul>
        </div>
    )
}

export default ColorsList;