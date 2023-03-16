import {NavLink} from "react-router-dom";
import React from "react";
import s from './Footer.module.css'
const Footer: React.FC = () => {
    return <div className={s.footer}>
        Directed by <NavLink
        to={'/profile/25265'}
        className={s.footer}
    >Vadim Allayarov</NavLink>
    </div>

}

export default Footer