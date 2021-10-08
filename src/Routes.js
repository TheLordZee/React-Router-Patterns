import {  Switch, Route, Redirect } from "react-router-dom"
import React, { useState } from "react"
import ColorsList from "./ColorsList"
import Color from "./Color"
import ColorForm from "./ColorForm"
import {v4 as uuid} from 'uuid';

const Routes = () => {
    const INITIAL_COLORS = [{name: "Red", value: "red"}, {name: "Blue", value: "blue"}, {name: "Green", value: "green"}]
    const INITIAL_STATE = {
        name: "",
        value: ""
    }
    const [colors, setColors] = useState(INITIAL_COLORS)
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [redirect, setRedirect] = useState(false)

    const addColor = (colorData) => {
        const color = {...colorData, id: uuid()}
        setColors(c => [color, ...c])
    }

    const onChange = e => {
        let {name, value} = e.target;
        setFormData(fD => ({
            ...fD,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        addColor(formData);
        setRedirect(true);
        setFormData(INITIAL_STATE);
    }
    
    return (
        <Switch>
        <Route exact path="/colors/new">
          <ColorForm 
            onChange={onChange} 
            formData={formData} 
            handleSubmit={handleSubmit} 
            redirect={redirect}
            />
        </Route>
        <Route exact path="/colors/:color">
          <Color colors={colors} />
        </Route>
        <Route exact path="/colors">
          <ColorsList colors={colors} setRedirect={setRedirect}/>
        </Route>
        <Redirect to="/colors"></Redirect>
      </Switch>
    )
}

export default Routes;