import s from "./ProfileInfo.module.css";
import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import img from '../../../assets/images/img.jpg'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile,status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }
    return (
        <div>
            <div className={s.img}>
                <img src="https://i.imgur.com/ikJDyFT.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img  className={s.userImg} src={profile.photos.large || img}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm  initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} isOwner={isOwner} profile={profile}/>}

                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        { isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div><b>Full name: </b>{profile.fullName}</div>
        <div><b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}</div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
        }

        <div><b>About me: </b>{profile.aboutMe}</div>
        <div><b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}><b>{contactTitle}:</b>{contactValue}</div>
}


export default ProfileInfo