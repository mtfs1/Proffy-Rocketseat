import React from "react"

import fav from "./../../../images/icons/success-check-icon.svg"
import whatsapp from "./../../../images/icons/whatsapp.svg"

import {useSelector, useDispatch} from "react-redux"
import {actionAddFavourite, actionRemoveFavourite} from "./../../../redux/ducks/favourites"

import "./styles.css"

export default function TeacherFile({id, link, name, subject, bio, price}) {

  const dispatch = useDispatch()
  const favourite = useSelector(store => store.favourites.ids.includes(id))

  const handleFav = () => {
    favourite
    ? dispatch(actionRemoveFavourite(id))
    : dispatch(actionAddFavourite(id))
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
            className={favourite ? "btn fav-btn is-fav" : "btn fav-btn"}
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