import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css"

const DogList = ({dogs}) => {
    return(
        <div>
            <h1>Dogs</h1>
            {dogs.map((d) =>
                <div className="DogList-dog">
                    <h2>{d.name}</h2>
                    <Link to={`/dogs/${d.name.toLowerCase()}`}>
                    <img src={d.src}/>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default DogList;