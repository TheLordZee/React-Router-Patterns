import { red } from "jest-matcher-utils/node_modules/chalk";
import React, { useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import Dog from "./Dog";
import "./DogDetails.css"

const DogDetails = ({dogs}) => {
    let {name} = useParams()
    let redirect = false;
    let dog;

    
    for(let d of dogs){
        if(d.name.toLowerCase() === name){
            dog = d;
        }
    }
    if(dog === undefined){
        redirect = true;
    }
    return(
        <>
            {(redirect) ? <Redirect push to="/dogs" /> : <>
                <Dog dog={dog}/>
                <Link className="DogDetails-return" to="/dogs">Return</Link>
            </>}
           
        </>
    )
}

export default DogDetails;