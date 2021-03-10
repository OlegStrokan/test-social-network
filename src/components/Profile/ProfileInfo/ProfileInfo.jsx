import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({profile,status, updateStatus}) => {
    if (!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.img}>
                <img src="https://i.imgur.com/ikJDyFT.jpg" alt="main-img"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
              <div>FullName: {profile.fullName}</div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo