import React from 'react';
import s from './Dialogs.module.css';



const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog+' ' + s.active}>
                <NavLink to="dialogs/1"> Dimuch</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="dialogs/2">Andrey</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="dialogs/3">Sveta</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="dialogs/4">Sasha</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="dialogs/5">Dimuch</NavLink>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi </div>
                <div className={s.dialog}>How is your IT-KAMASUTRA</div>
                <div className={s.dialog}>Yo</div>
            </div>

        </div>
    )
}

export default Dialogs;