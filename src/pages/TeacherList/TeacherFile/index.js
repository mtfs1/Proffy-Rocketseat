import React from "react"

import fav from "./../../../images/icons/success-check-icon.svg"
import whatsapp from "./../../../images/icons/whatsapp.svg"

import "./styles.css"

export default function TeacherFile(props) {
    return (
        <div className="panel teacher-file">
            <header>
                <div className="img-container">
                    <img src={props.img}/>
                </div>
                <div className="label">
                    <h2>{props.name}</h2>
                    <span>{props.subject}</span>
                </div>
            </header>
            <main>
                {props.desc.map(paragraph => <p>{paragraph}</p>)}
            </main>
            <footer>
                <div className="price">
                    <span>Preço/Hora</span>
                    <strong>R$ {props.price.toFixed(2)}</strong>
                </div>
                <div className="fav">
                    <button className="btn fav-btn">
                        <img src={fav}/>
                    </button>
                    <button className="btn whatsapp-btn">
                        <img src={whatsapp}/>
                        <span>Entrar em contato</span>
                    </button>
                </div>
            </footer>
        </div>
    )
}