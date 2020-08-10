import React from "react"

export default function FormGrup(props) {
    const {name, label, options, type, set, ...rest} = props
    if(type === "textarea") {
        return (
            <div className="form-group">
                <label>{label}</label>
                <textarea
                    name={name}
                    onChange={e => set(e.target.value)}
                    {...rest}
                ></textarea>
            </div>
        )
    } else if(type ==="select"){
        return (
            <div className="form-group">
                <label>{label}</label>
                <select name={name} onChange={e => set(e.target.value)} {...rest}>
                    {options.map((option, i) => 
                        <option
                            key={i}
                            value={option.value}
                        >{option.name}</option>)}
                </select>
            </div>
        )
    } else {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input
                    type={type}
                    name={name}
                    onChange={e => set(e.target.value)}
                    {...rest}
                />
            </div>
        )
    }
}