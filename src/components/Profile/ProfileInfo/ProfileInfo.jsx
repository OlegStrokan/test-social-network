import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import img from '../../../assets/images/img.jpg'

const ProfileInfo = ({profile,status, updateStatus, isOwner, savePhoto}) => {
    if (!profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.img}>
                <img src="https://i.imgur.com/ikJDyFT.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img  className={s.userImg} src={profile.photos.large || img}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
              <div>FullName: {profile.fullName}</div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo