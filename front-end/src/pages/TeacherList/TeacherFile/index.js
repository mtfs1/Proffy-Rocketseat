import React from "react"

import fav from "./../../../images/icons/success-check-icon.svg"
import whatsapp from "./../../../images/icons/whatsapp.svg"

import "./styles.css"

export default function TeacherFile(props) {
    const {link, name, subject, bio, price} = props
    const subjects = {
        math: "Matemática"
    }
    return (
        <div className="panel teacher-file">
            <header>
                <div className="img-container">
                    <img src={link} alt="proffy profile" />
                </div>
                <div className="label">
                    <h2>{name}</h2>
                    <span>{subjects[subject]}</span>
                </div>
            </header>
            <main>
                <p>{bio}</p>
            </main>
            <footer>
                <div className="price">
                    <span>Preço/Hora</span>
                    <strong>R$ {parseFloat(price).toFixed(2)}</strong>
                </div>
                <div className="fav">
                    <button className="btn fav-btn">
                        <img src={fav} alt="fav button" />
                    </button>
                    <button className="btn whatsapp-btn">
                        <img src={whatsapp} alt="whatsapp button" />
                        <span>Entrar em contato</span>
                    </button>
                </div>
            </footer>
        </div>
    )
}