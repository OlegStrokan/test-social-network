import s from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.img}>
                <img src="https://i.imgur.com/ikJDyFT.jpg" alt="main-img"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desk
            </div>
        </div>
    )
}

export default ProfileInfo