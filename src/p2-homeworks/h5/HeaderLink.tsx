import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import s from "./HeaderLink.module.css"

function HeaderLink() {
    return (
        <div className={s.header}>
            <div >
                <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            </div>
            <div >
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            </div>
            <div >
                <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            </div>

        </div>
    )
}

export default HeaderLink
