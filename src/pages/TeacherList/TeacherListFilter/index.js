import React from "react"
import {useState} from "react"

import FormGroup from "./../../../components/formGroup"

import filter from "./../../../images/icons/filter.png"
import arrow from "./../../../images/icons/down-arrow.png"

import "./styles.css"

export default function TeacherListFilter(props) {

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open)

    return (
        <div id="teacher-list-filter-menu-sm">
            <div id="teacher-list-filter-button" onClick={handleOpen}>
                <img src={filter} />
                <span>Filtrar por dia, hora, matéria</span>
                <img src={arrow} />
            </div>
            <form id="teacher-list-filter-collapse" className={open && "open"}>
                <FormGroup label="Matéria" name="subject" type="select" options={["Matemática"]} />
                <div id="time">
                    <FormGroup label="Dia da semana" name="day" type="select"
                        options={[
                            "Domingo",
                            "Segunda",
                            "Terça",
                            "Quarta",
                            "Quinta",
                            "Sexta",
                            "Sábado"
                        ]}
                    />
                    <FormGroup label="Horário" name="time" type="time" />
                </div>
            </form>
        </div>
    )
}