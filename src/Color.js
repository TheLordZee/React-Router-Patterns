import React from "react"
import { useParams, Link, Redirect } from "react-router-dom";

const Color = ({colors}) => {
    let {color} = useParams();
    let found = false;

    for(let c of colors){
        if(c.name === color){
            found = true;
            color = c;
        }
    }
    
    console.log(color, found)

    return (
        <>
        {
            (!found) ? <Redirect push to="/colors" /> : 
            <>
            <p>{color.name} is great!</p>
            <div style={{backgroundColor: color.value, height: "25vh"}}></div>
            <Link className="Color-return" to="/colors">Return</Link>
            </>
        }
        </>
    )
}

export default Color;