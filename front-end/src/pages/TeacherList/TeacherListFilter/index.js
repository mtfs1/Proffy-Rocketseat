import React from "react"
import {useState} from "react"

import FormGroup from "./../../../components/formGroup"

import filter from "./../../../images/icons/filter.png"
import arrow from "./../../../images/icons/down-arrow.png"

import "./styles.css"

export default function TeacherListFilter(props) {

  const {setTime, setDay, setSubject} = props
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)

  return (
    <div id="teacher-list-filter-menu-sm">
      <div id="teacher-list-filter-button" onClick={handleOpen}>
        <img src={filter} alt="filter simbol"/>
        <span>Filtrar por dia, hora, matéria</span>
        <img src={arrow} alt="arrow simbol" />
      </div>
      <form id="teacher-list-filter-collapse" className={open ? "open" : ""}>
        <FormGroup
          label="Matéria"
          name="subject"
          type="select"
          options={[
            {
              name: "Matemática",
              value: "math"
            }
          ]} 
          set={setSubject}
        />
        <div id="time">
          <FormGroup label="Dia da semana" name="day" type="select"
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
            set={setDay}
          />
          <FormGroup
            label="Horário"
            name="time"
            type="time"
            set={setTime}
          />
        </div>
      </form>
    </div>
  )
}