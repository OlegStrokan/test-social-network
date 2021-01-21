import React from "react"
import s from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

// данные с сервера
const Dialogs = (props) => {
    let state = props.dialogsPage
    //  получаем jsx элементы
    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = state.messages.map((m) =>  <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*----------отрисовываем jsx элементы----------*/}
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {/*- ---------отрисовываем jsx элементы----------*/}
                <div className={s.message}>{messageElements}</div>
                <div className={s.wrapper}>
                    <div><textarea  className="form-control"  rows="3" value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'> </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs