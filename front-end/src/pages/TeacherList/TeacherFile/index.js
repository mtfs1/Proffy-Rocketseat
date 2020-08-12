import React, { useState, useEffect } from "react"

import fav from "./../../../images/icons/success-check-icon.svg"
import whatsapp from "./../../../images/icons/whatsapp.svg"

import "./styles.css"

export default function TeacherFile(
    {favourite, id, link, name, subject, bio, price}
  ) {

  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    const initialJson = localStorage.getItem("@proffy/favourites")
    const fav = JSON.parse(initialJson)
    if(fav) {
      if(fav.includes(id)){
        setIsFav(true)
      } else {
        setIsFav(false)
      }
    } else {
      const json = JSON.stringify([])
      localStorage.setItem("@proffy/favourites", json)
    }
  }, [])

  const handleFav = () => {
    const initialJson = localStorage.getItem("@proffy/favourites")
    const fav = JSON.parse(initialJson)
    if(isFav){
      const finalArray = fav.filter(fv => fv !== id)
      const json = JSON.stringify(finalArray)
      localStorage.setItem("@proffy/favourites", json)
      setIsFav(false)
    } else {
      const finalArray = [...fav, id]
      const json = JSON.stringify(finalArray)
      localStorage.setItem("@proffy/favourites", json)
      setIsFav(true)
    }
  }

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
          <button
            className={isFav ? "btn fav-btn is-fav" : "btn fav-btn"}
            onClick={handleFav}
          >
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