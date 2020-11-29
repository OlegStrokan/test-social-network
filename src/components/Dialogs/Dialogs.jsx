import React from "react"
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import Post from "../Profile/MyPosts/Post/Post";

const newPostMessage = React.createRef()

const AddMessage = () => {
    const text = newPostMessage.current.value
    alert (text)
}
// данные с сервера
const Dialogs = (props) => {

    //  получаем jsx элементы
    const dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    const messageElements = props.state.messages.map((m) =>  <Message message={m.message}/>)

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
            <div><textarea ref={newPostMessage}>

           </textarea></div>
            <button onClick={AddMessage}>Add Post</button>
            <div className={s.posts}>


            </div>
        </div>


    )
}

export default Dialogs