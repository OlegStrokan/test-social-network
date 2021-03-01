import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.img}>
                <img src="https://i.imgur.com/ikJDyFT.jpg" alt="main-img"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
              <div>FullName: {props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo