import {React, useState} from 'react'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.current.value)
    }
    return <div>
        {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>Status: {props.status || '-----'}</span>
            </div>}
        {editMode &&
        <div>
            <br/>
                <input autoFocus={true}
                onBlur={deactivateEditMode}
                onChange={onStatusChange}
                value={status}/>
            </div>}
    </div>
}

export default ProfileStatusWithHooks