import React from "react"

import "./styles.css"

import {Link} from "react-router-dom"

import logo from "../../images/logo.svg"
import landing from "../../images/landing.svg"
import studyIcon from "../../images/icons/study.svg"
import teachIcon from "../../images/icons/give-classes.svg"
import heart from "../../images/icons/purple-heart.svg"

export default function Landing() {
    return (
        <div id="landing-container">
            <div id="landing-panel">
                <div id="hero">
                    <img src={logo} />
                    <p>Sua plataforma de <br /> estudos online!</p>
                </div>
                <header id="landing-image">
                    <img src={landing} />
                </header>
                <main>
                    <div id="welcome-text">
                        <p>Seja bem-vindo</p>
                        <strong>O que deseja fazer?</strong>
                    </div>
                    <div id="buttons-container">
                        <Link  to="/study">
                            <div className="btn">
                                <img src={studyIcon} />
                                <span>Estudar</span>
                            </div>
                        </Link>
                        <Link to="/teach">
                            <div className="btn btn-success">
                                <img src={teachIcon} />
                                <span>Dar aulas</span>
                            </div>
                        </Link>
                    </div>
                </main>
                <footer>
                    <span id="footer-message">
                        Total de 285 conexões já realizadas
                    </span>
                    <img src={heart} />
                </footer>
            </div>
        </div>
    )
}