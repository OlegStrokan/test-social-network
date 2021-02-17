import React from "react"
import s from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import handleSubmit from "redux-form/lib/handleSubmit";
import {Field, reduxForm} from "redux-form";

// данные с сервера
const Dialogs = (props) => {
    let state = props.dialogsPage
    //  получаем jsx элементы
    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = state.messages.map((m) =>  <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
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
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return  <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs