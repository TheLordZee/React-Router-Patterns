import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./ColorForm.css"

const ColorForm = ({onChange, formData, handleSubmit, redirect}) => {
    return (
        <>
        {(redirect) ? <Redirect push to="/colors"/> : null}
        <form onSubmit={handleSubmit} className="ColorForm">
            <label htmlFor="value">Color:</label>
            <input 
                type="color"
                name="value"
                className="ColorForm-input"
                onChange={onChange}
                value={formData.value}
            />
            <label htmlFor="name">Name:</label>
            <input 
                type="text"
                name="name"
                className="ColorForm-input"
                onChange={onChange}
                value={formData.name}
            />
            <button>Submit</button>
        </form>
        <Link className="Color-return" to="/colors">Cancel</Link>
        </>
    )
} 

export default ColorForm;