import React from "react"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

// превратить часть стейта в пропсы
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
// коллбеки, которые будут отправлены в презентационную компоненту
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer

