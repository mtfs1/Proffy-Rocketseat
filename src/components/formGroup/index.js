import React from "react"

export default function FormGrup(props) {
    if(props.type === "textarea") {
        return (
            <div className="form-group">
                <label>{props.label}</label>
                <textarea type="number" name={props.name} {...props}></textarea>
            </div>
        )
    } else if(props.type ==="select"){
        return (
            <div className="form-group">
                <label>{props.label}</label>
                <select name={props.name}>
                    {props.options.map(option => <option>{option}</option>)}
                </select>
            </div>
        )
    } else {
        return (
            <div className="form-group">
                <label>{props.label}</label>
                <input type="number" name={props.name} {...props}/>
            </div>
        )
    }
}