import React from "react"

import teachIcon from "./../../../images/icons/give-classes.svg"
import fav from "./../../../images/icons/success-check-icon.svg"

import {useSelector, useDispatch} from "react-redux"
import {actionFavouriteTrue, actionFavouriteFalse} from "./../../../redux/ducks/favourites"

import "./styles.css"

export default function FavouritesFooter() {
    const favourite = useSelector(store => store.favourites.favourite)
    const dispatch = useDispatch()

    return (
        <div id="favourites-footer">
            <button 
                onClick={() => dispatch(actionFavouriteFalse())}
                className={ favourite ? "":"active"}
            >
                <img src={teachIcon} alt="teachers"/>
                <span>Proffies</span>
            </button>
            <button
                onClick={() => dispatch(actionFavouriteTrue())}
                className={ favourite ? "active":""}
            >
                <img src={fav} alt="favourite" />
                <span>Favoritos</span>
            </button>
        </div>
    )
}