import React from "react";
import "./Dog.css"

const Dog = ({dog}) => {
    return(
    <div className="Dog">
        <p>{dog.name}</p>
        <p>Age: {dog.age}</p>
        <img src={dog.src}/>
        <div className="Dog-facts">
            <p>Facts:</p>
            <ul>
                {dog.facts.map(f =>
                    <li>{f}</li>
                )}
            </ul>
        </div>
    </div>
    )
}

export default Dog;