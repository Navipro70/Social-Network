import React from "react";
import Button from "@material-ui/core/Button";

const ContactInformation = ({contacts, isOwner, ...props}) => {
    const realContacts = Object.entries(contacts).filter(item => item[1]);
    const editModeHandler = () => props.setEditMode(true);
    const profileContacts = realContacts.map(i => <li key={i[0]}>{i[0]}: <a href={`//${i[1]}`}>{i[1]}</a></li>);
    if (!realContacts.length) {
        return (
            <div style={{marginLeft: "40px"}}>
                <h4>No contact information</h4>
                {isOwner && <Button onClick={editModeHandler}
                    variant="contained" color="primary">Set information</Button>}
            </div>
        )
    }
    return (
        <ul style={{listStyleType: "none"}}>
            {profileContacts}
            {isOwner && <Button onClick={editModeHandler}
                style={{marginTop: "10px"}} variant="contained" color="primary">Change information</Button>}
        </ul>
    )
};

export default ContactInformation;