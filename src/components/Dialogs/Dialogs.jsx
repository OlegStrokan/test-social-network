import React from "react"
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

// функции добавления тега

// данные с сервера
const Dialogs = (props) => {

    //  получаем jsx элементы
    const dialogsElements = props.dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>)

    const messageElements = props.messages
        .map((m) =>  <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*----------отрисовываем jsx элементы----------*/}
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {/*- ---------отрисовываем jsx элементы----------*/}
                {messageElements}
            </div>
        </div>

    )
}

export default Dialogs