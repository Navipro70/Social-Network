import React, {useEffect, useState} from "react";
import { reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import classes from "../Information.module.css";
import {emptyField, urlValidator} from "../../../../utils/validators";
import {ContactsItem} from "./InformationFormItems/ContactsItem";
import {CheckboxItem} from "./InformationFormItems/CheckboxItem";
import {SnackbarError} from "./InformationFormItems/SnackbarError";

const InformationForm = ({profile, error, setEditMode, ...props}) => {
    const [open, setOpen] = useState(false);
    useEffect(() => setOpen(typeof error === "string"), [error]);

    const contactsMap = [...Object.keys(profile.contacts)];
    return (
        <form onSubmit={props.handleSubmit} className={classes.fullForm}>
            <ul className={classes.profileInfoForm}>
                <ContactsItem name="aboutMe" placeholder="About you" validators={[emptyField]}/>
                {contactsMap.map(i => <ContactsItem key={i} name={`contacts.${i}`} validators={[urlValidator]} placeholder={i}/>)}
                <CheckboxItem/>
                <ContactsItem name={"lookingForAJobDescription"} placeholder={"What job is your favourite?"} validators={[emptyField]}/>
                <ContactsItem name="fullName" placeholder="Your full name" validators={[emptyField]}/>
            </ul>
            <Button type="submit" variant="contained" color="primary">Set changes</Button>
            <Button onClick={() => setEditMode(false)} variant="contained">Cancel</Button>
            <SnackbarError open={open} setOpen={setOpen} error={error}/>
        </form>
    )
};

export const InformationFormProvider = reduxForm({
    form: "settings"
})(InformationForm);

