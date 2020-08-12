import React, {useState, useEffect} from "react"
import axios from "axios"

import baseUrl from "./../../config/base-url"
import Header from "./../../components/Header"
import FormGroup from "./../../components/formGroup"

import FavouritesFooter from "./FavouritesFooter"
import TeacherFilterList from "./TeacherListFilter"
import TeacherFile from "./TeacherFile"

import "./styles.css"

export default function TeacherList() {

    const [proffies, setProffies] = useState([])
    const [downloadedProffies, setDownloadedProffies] = useState([])
    const [subject, setSubject] = useState("math")
    const [day, setDay] = useState(1)
    const [time, setTime] = useState("")
    const [favourite, setFavourite] = useState(false)
    const [favouriteProffies, setFavouriteProffies] = useState([])

    const isFavourite = id => {
        const match = favouriteProffies.filter(prf => prf.id === id)
        return match.length === 1
    }

    const setFavouriteProffy = id => {    
        const proffy = downloadedProffies.filter(prf => prf.id === id)
        setFavouriteProffies([
            ...favouriteProffies,
            {...proffy[0]}
        ])
    }

    const unsetFavouriteProffy = id => {
        setFavouriteProffies(favouriteProffies.filter(prf => prf.id !== id))
    }

    useEffect(() => {
        axios.get(baseUrl + "/classes", {
            params: {
                subject,
                day,
                time
            }
        })
        .then(res => setDownloadedProffies(res.data))
        .catch(console.log)
    }, [subject, day, time])

    useEffect(() => {
        if (favourite) {
            setProffies(favouriteProffies)
        } else {
            setProffies(downloadedProffies)
        }
    }, [favourite, downloadedProffies])

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
                    <TeacherFile
                        isFavourite={isFavourite}
                        setFavouriteProffy={setFavouriteProffy}
                        unsetFavouriteProffy={unsetFavouriteProffy}
                        key={proffy.id}
                        id={proffy.id}
                        {...proffy} 
                    />) :
                    console.log(proffies)
                }
            </div>
            <FavouritesFooter set={setFavourite} favourite={favourite} />
        </>
    )
}