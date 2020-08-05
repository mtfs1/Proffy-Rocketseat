import React from "react"
import {Link} from "react-router-dom"

import Header from "./../../components/Header"
import FormGroup from "./../../components/formGroup"

import warning from "./../../images/icons/warning.svg"

import "./styles.css"

export default function TeacherForm() {
    const title = "Que incrível que você quer dar aulas"
    const desc = "O primeiro passo é preencher esse formulário de inscrição"
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
                    <FormGroup label="Nome completo" name="name" type="text"/>
                    <FormGroup label="Link da sua foto" name="photo" type="text"/>
                    <FormGroup label="Whatsapp" name="whatsapp" type="number" min="1000000"/>
                    <FormGroup label="Sua bio" name="bio" type="textarea"/>
                </section>
                <section>
                    <h2>Sobre a aula</h2>
                    <hr />
                    <FormGroup label="Matérias" type="select" name="subject" options={["Matemática"]} />
                    <FormGroup 
                        label="Custo da sua hora por aula" 
                        type="number" name="hourPrice" min="0" 
                    />
                </section>
                <section>
                    <h2>Horários disponíveis</h2>
                    <hr />
                    <div id="teacher-form-time">
                        <FormGroup 
                            label="Dia da semana" name="day" type="select"
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
                        <FormGroup label="Das" type="time" name="hourBegin" />
                        <FormGroup label="Até" type="time" name="hourEnd" />
                    </div>
                </section>
                <footer id="teacher-form-footer">
                    <div id="fill-data">
                        <img src={warning} />
                        <p>Importante!<br/>Preencha todos os dados</p>
                    </div>
                    <button className="btn" type="submit">Salvar cadastro</button>
                </footer>
            </form>
        </section>
        </>
    )
}