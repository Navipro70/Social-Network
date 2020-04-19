import classes from "../../Information.module.css";
import ContactInformation from "./ContacInformation/ContactInformation";
import React from "react";


export const StaticInfo = ({profile, isOwner, setEditMode}) => {
    return (
        <div>
            <ul className={classes.contact_information}>
                <li>About me: {profile.aboutMe}</li>
            </ul>
            <ContactInformation
                isOwner={isOwner}
                setEditMode={setEditMode}
                contacts={profile.contacts}/>
        </div>
    )
};