import React from "react"

import Header from "./../../components/Header"

export default function TeacherForm() {
    const title = "Que incrível que você quer dar aulas"
    const desc = "O primeiro passo é preencher esse formulário de inscrição"
    return (
        <Header titleMax={title} description={desc} />
    )
}