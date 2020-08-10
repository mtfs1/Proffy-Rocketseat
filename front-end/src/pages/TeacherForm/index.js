import React, {useState} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

import Header from "./../../components/Header"
import FormGroup from "./../../components/formGroup"
import baseUrl from "../../config/base-url"
import Schedules from "./Schedules"

import warning from "./../../images/icons/warning.svg"

import "./styles.css"

export default function TeacherForm() {
    const title = "Que incrível que você quer dar aulas"
    const desc = "O primeiro passo é preencher esse formulário de inscrição"

    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [whatsapp, setWhatsapp] = useState(1000000)
    const [bio, setBio] = useState("")

    const [subject, setSubject] = useState("math")
    const [hourPrice, setHourPrice] = useState(0)

    const [scheduleId, setScheduleId] = useState(2)

    const [schedules, setSchedules] = useState([
        {
            id: 1,
            day: "1",
            minuteBegin: "",
            minuteEnd: ""
        }
    ])

    const handleNewSchedule = e => {
        e.preventDefault()
        setSchedules([
            ...schedules,
            {
                id: scheduleId,
                day: "1",
                minuteBegin: "",
                minuteEnd: ""
            }
        ])
        setScheduleId(scheduleId + 1)
    }

    const handleSubmit = e => {
        e.preventDefault()
        try {
            axios.post(baseUrl + "/classes", {
                name,
                link,
                whatsapp,
                bio,
                subject,
                hourPrice,
                schedules
            }, {
                headers: { 'Content-Type': 'application/json'}
            })
            window.location = "/"
        } catch(e) {
            console.log(e)
        }
        
    }

    return (
        <>
        <Header titleMax={title} description={desc} className="teacher-form">
            <div id="teacher-form-sm">
                <div id="teacher-form-sm-titles">
                    <h1>Quer ser um Proffy?</h1>
                    <p>Para começar, você precisa se cadastrar como professor na nossa plataforma web</p>
                </div>
                <Link to="/" className="btn">Tudo bem</Link>
            </div>
        </Header>
        <section id="teacher-form-lg" className="panel container">
            <form id="teacher-form-form">
                <section>
                    <h2>Seus dados</h2>
                    <hr/>
                    <FormGroup 
                        label="Nome completo"
                        name="name"
                        type="text"
                        value={name}
                        set={setName}
                    />
                    <FormGroup
                        label="Link da sua foto"
                        name="photo"
                        type="text"
                        value={link}
                        set={setLink}
                    />
                    <FormGroup
                        label="Whatsapp"
                        name="whatsapp"
                        type="number"
                        min="1000000"
                        value={whatsapp}
                        set={setWhatsapp}
                    />
                    <FormGroup
                        label="Sua bio"
                        name="bio"
                        type="textarea"
                        value={bio}
                        set={setBio}
                    />
                </section>
                <section>
                    <h2>Sobre a aula</h2>
                    <hr />
                    <FormGroup 
                        label="Matérias"
                        type="select"
                        name="subject"
                        options={[
                            {
                                name: "Matemática",
                                value: "math"
                            }
                        ]}
                        value={subject}
                        set={setSubject}
                    />
                    <FormGroup 
                        label="Custo da sua hora por aula" 
                        type="number"
                        name="hourPrice"
                        min="0"
                        value={hourPrice}
                        set={setHourPrice}
                    />
                </section>
                <section>
                    <div id="teacher-form-schedules-header">
                        <h2>Horários disponíveis</h2>
                        <button className="btn" onClick={handleNewSchedule}>Novo horário</button>
                    </div>
                    <hr />
                    <Schedules schedules={schedules} set={setSchedules} />
                </section>
                <footer id="teacher-form-footer">
                    <div id="fill-data">
                        <img src={warning} alt="warning" />
                        <p>Importante!<br/>Preencha todos os dados</p>
                    </div>
                    <button 
                        className="btn"
                        onClick={handleSubmit}>
                        Salvar cadastro
                    </button>
                </footer>
            </form>
        </section>
        </>
    )
}