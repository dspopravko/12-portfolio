import React, {useState} from 'react';
import s from './HeaderMobile.module.css'
import {Navbar} from "../../nav/Navbar";
import {DarkModeBtn} from "../DarkModeBtn";

export const HeaderMobile = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className={open ? s.mobileMenu : s.mobileMenu + ' shadowUp'}>
                <div className={s.btnWrapper}>
                    <button onClick={() => setOpen(!open)}
                            className={s.menuBtn}>
                        Menu
                    </button>
                    <DarkModeBtn/>
                </div>
                <div className={s.title}>
                    Demid
                </div>
            </div>
            <div className={open ? s.headerOpen : s.headerClose}>
                <Navbar/>
            </div>

        </>
    );
}