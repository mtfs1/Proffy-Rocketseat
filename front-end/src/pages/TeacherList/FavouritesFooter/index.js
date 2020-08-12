import React from "react"
import {Link, Redirect} from "react-router-dom"

import teachIcon from "./../../../images/icons/give-classes.svg"
import fav from "./../../../images/icons/success-check-icon.svg"

import "./styles.css"

export default function FavouritesFooter({set, favourite}) {
    return (
        <div id="favourites-footer">
            <button onClick={() => set(false)} className={ favourite ? "":"active"}>
                <img src={teachIcon} />
                <span>Proffies</span>
            </button>
            <button onClick={() => set(true)} className={ favourite ? "active":""}>
                <img src={fav} />
                <span>Favoritos</span>
            </button>
        </div>
    )
}