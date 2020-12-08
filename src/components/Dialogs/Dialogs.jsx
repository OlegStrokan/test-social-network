import React from "react"
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import Post from "../Profile/MyPosts/Post/Post";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


// данные с сервера
const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage
    //  получаем jsx элементы
    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map((m) =>  <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody



    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*----------отрисовываем jsx элементы----------*/}
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {/*- ---------отрисовываем jsx элементы----------*/}
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'> </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>


    )
}

export default Dialogs