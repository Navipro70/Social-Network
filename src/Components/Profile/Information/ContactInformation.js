import React from "react";
import Button from "@material-ui/core/Button";

const ContactInformation = ({contacts, isOwner, ...props}) => {
    const realContacts = Object.entries(contacts).filter(item => item[1]);
    if (!realContacts.length) {
        return (
            <div style={{marginLeft: "40px"}} >
                <h4>No contact information</h4>
                {isOwner && <Button onClick={() => props.setEditMode(true)}
                    variant="contained" color="primary">Set information</Button>}
            </div>
        )
    }
    return (
        <ul style={{listStyleType: "none"}}>
            {realContacts.map(item => <li key={item[0]}>{item[0]}: <a href={`//${item[1]}`}>{item[1]}</a></li>)}
            {isOwner && <Button onClick={() => props.setEditMode(true)}
                style={{marginTop: "10px"}} variant="contained" color="primary">Change information</Button>}
        </ul>
    )
};

export default ContactInformation;