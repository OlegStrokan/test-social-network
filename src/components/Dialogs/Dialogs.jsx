import React from "react"
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

// функции добавления тега

// данные с сервера
const Dialogs = (props) => {
     const dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]
    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'It is your first project?'},
        {id: 4, message: 'Maybe I will call you later...'},
        {id: 5, message: 'Yo'}
    ]
    //  получаем jsx элементы
    const dialogsElements = dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>)

    const messageElements = messages
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