import React from "react";
import s from './Navbar.module.css';

const c1 = 'item'
const c2 = 'active'
let classes = `${s.item} ${s.active}`

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><a href="#">Profile</a></div>
            <div><a className={classes} href="#">Message</a></div>
            <div className={s.item}><a href="#">News</a></div>
            <div className={s.item}><a href="#">Music</a></div>
            <div className={s.item}><a href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar

