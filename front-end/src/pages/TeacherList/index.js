import React, {useState, useEffect} from "react"
import axios from "axios"

import baseUrl from "./../../config/base-url"
import Header from "./../../components/Header"
import FormGroup from "./../../components/formGroup"

import TeacherFilterList from "./TeacherListFilter"
import TeacherFile from "./TeacherFile"

import "./styles.css"

export default function TeacherList() {

    const [proffies, setProffies] = useState([])
    const [subject, setSubject] = useState("math")
    const [day, setDay] = useState(1)
    const [time, setTime] = useState("")

    console.log(proffies)

    useEffect(() => {
        axios.get(baseUrl + "/classes", {
            params: {
                subject,
                day,
                time
            }
        })
        .then(res => setProffies(res.data))
        .catch(console.log)
    }, [subject, day, time])

    // const proffies = [{
    //     id: 1,
    //     name: "Matheus Ferreira Santos",
    //     img: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/83582428_1510185492464157_1520822321508515840_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeGYuF3vYurpyrT6BiF3NncUmcHl9jeYTNeZweX2N5hM15uoWF8fR-b_rwnbT5UR14pRH43NWsjqUqAmhYlsz2tr&_nc_ohc=6sfb2KQdb04AX9d5aYN&_nc_ht=scontent.fsjk2-1.fna&oh=8876fc84ae17b0b8c79f93978487de82&oe=5F5178A7",
    //     subject: "Matemática",
    //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ante massa, vitae malesuada purus placerat a. Vivamus eu consequat augue. Vestibulum elementum faucibus rutrum. Vestibulum ac ornare leo, mattis vestibulum lorem.",
    //     price: 10.0
    // }]

    return (
        <>
            <Header 
                titleMin="Proffies disponíveis"
                titleMax="Estes são os proffies disponíveis"
            >
                <TeacherFilterList
                    setSubject={setSubject}
                    setDay={setDay}
                    setTime={setTime}
                />
            </Header>
            <form id="teacher-list-filter-menu-lg" className="container">
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
                <FormGroup 
                    label="Dia da semana"
                    name="day"
                    type="select"
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
            </form>
            <div className="container">
                {proffies.length > 0 ?
                    proffies.map(proffy => 
                    <TeacherFile key={proffy.id} {...proffy} />) :
                    console.log(proffies)
                }
            </div>
        </>
    )
}