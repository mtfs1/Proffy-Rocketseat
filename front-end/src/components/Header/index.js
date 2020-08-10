import React from "react"

import { Link } from "react-router-dom"

import logo from "../../images/logo.svg"
import back from "../../images/icons/back.svg"

import "./styles.css"

export default function Header(props) {
    return (
        <header id="page-header" className={props.className}>
            <div id="page-header-icons">
                <Link to="/" ><img src={back} alt="home" /></Link>
                <img src={logo} alt="logo" />
            </div>
            <div className="container">
                <div id="titles">
                    <h1 id="title-max">{props.titleMax}</h1>
                    <h1 id="title-min">{props.titleMin}</h1>
                    {props.description && <p id="desc">{props.description}</p>}
                </div>
                {props.children && (
                    <div id="header-children">
                        {props.children}
                    </div>
                )}
            </div>
        </header>
    )
}