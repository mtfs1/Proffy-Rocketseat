import React from "react"

import Header from "./../../components/Header"
import FormGroup from "./../../components/formGroup"

import TeacherFilterList from "./TeacherListFilter"
import TeacherFile from "./TeacherFile"

import "./styles.css"

export default function TeacherList() {

    const proffies = [{
        id: 1,
        name: "Matheus Ferreira Santos",
        img: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/83582428_1510185492464157_1520822321508515840_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeGYuF3vYurpyrT6BiF3NncUmcHl9jeYTNeZweX2N5hM15uoWF8fR-b_rwnbT5UR14pRH43NWsjqUqAmhYlsz2tr&_nc_ohc=6sfb2KQdb04AX9d5aYN&_nc_ht=scontent.fsjk2-1.fna&oh=8876fc84ae17b0b8c79f93978487de82&oe=5F5178A7",
        subject: "Matemática",
        desc: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ante massa, vitae malesuada purus placerat a. Vivamus eu consequat augue. Vestibulum elementum faucibus rutrum. Vestibulum ac ornare leo, mattis vestibulum lorem.",

            "Sed ultricies placerat nunc ac facilisis. Morbi tincidunt scelerisque porttitor. Etiam finibus sollicitudin metus id sagittis. Suspendisse porttitor libero et enim placerat viverra. Mauris at purus dapibus, sodales urna quis, eleifend libero. Sed efficitur condimentum purus auctor interdum. Proin rhoncus pulvinar massa luctus ullamcorper."
        ],
        price: 10.0
    }]

    return (
        <>
            <Header titleMin="Proffies disponíveis"titleMax="Estes são os proffies disponíveis">
                <TeacherFilterList />
            </Header>
            <form id="teacher-list-filter-menu-lg" className="container">
                <FormGroup label="Matéria" name="subject" type="select" options={["Matemática"]} />
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
            </form>
            <div className="container">
                {proffies.map(proffy => <TeacherFile key={proffy.id} {...proffy} />)}
            </div>
        </>
    )
}