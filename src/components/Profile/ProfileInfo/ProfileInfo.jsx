import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";

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
                ava + desk
            </div>
        </div>
    )
}

export default ProfileInfo