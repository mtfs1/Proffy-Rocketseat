import React from "react"
import FormGroup from "../../../components/formGroup"

export default function Schedules(props) {
    const {schedules, set} = props

    const handleChange = (id, field) => {
        return e => {
            const newValue = e.target.value
            const newState = schedules.map(sch => {
                if(sch.id === id) {
                    const newState = {...sch}
                    newState[field] = newValue
                    return newState
                } else {
                    return sch
                }
            })
            set(newState)
            console.log(newState)
        }
    }
    
    return (
        schedules.map(sch => (
            <div key={sch.id} className="teacher-form-time">
                <FormGroup 
                    label="Dia da semana" name="day" type="select"
                    options={[
                        {
                            name: "Domingo",
                            value: 1
                        },
                        {
                            name: "Segunda",
                            value: 2
                        },
                        {
                            name: "Terça",
                            value: 3
                        },
                        {
                            name: "Quarta",
                            value: 4
                        },
                        {
                            name: "Quinta",
                            value: 5
                        },
                        {
                            name: "Sexta",
                            value: 6
                        },
                        {
                            name: "Sábado",
                            value: 7
                        }
                    ]}
                    onChange={handleChange(sch.id, "day")}
                />
                <FormGroup
                    label="Das"
                    type="time"
                    name="minuteBegin"
                    onChange={handleChange(sch.id, "minuteBegin")}
                />
                <FormGroup 
                    label="Até"
                    type="time"
                    name="minuteEnd"
                    onChange={handleChange(sch.id, "minuteEnd")} 
                />
            </div>
        ))
    )
}