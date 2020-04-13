import React, {useState} from "react";
import {Field, reduxForm, reset} from "redux-form";
import Button from "@material-ui/core/Button";
import classes from "./Information.module.css";
import {SettingField} from "../../Common/FieldControls";
import {emptyField, urlValidator} from "../../../utils/validators";

const InformationFormContainer = props => {
    const onSubmit = (data, dispatch, {...props}) => {
        const fullData = {
            aboutMe: data.aboutMe,
            contacts: {
                facebook: data.facebook,
                github: data.github,
                instagram: data.instagram,
                mainLink: data.mainLink,
                twitter: data.twitter,
                vk: data.vk,
                website: data.website,
                youtube: data.youtube
            },
            lookingForAJob: data.lookingForAJob,
            lookingForAJobDescription: data.lookingForAJobDescription,
            fullName: data.fullName
        };
        props.thunkPutUserInformation(fullData, props.profile.userId);
        dispatch(reset("settings"));
        props.setEditMode(false);
    };

    return <div>
        <InformationFormProvider initialValues={props.profile}
            setEditMode={props.setEditMode} profile={props.profile}
            thunkPutUserInformation={props.thunkPutUserInformation}
            onSubmit={onSubmit}/>
    </div>
};

const InformationForm = ({profile, ...props}) => {
    const contacts = profile.contacts;
    return (
        <form onSubmit={props.handleSubmit} className={classes.fullForm} >
            <ul className={classes.profileInfoForm}>
                <li><Field name={"fullName"} validate={[emptyField]}  placeholder={"Your full name"} component={SettingField} /></li>
                <li><Field name={"aboutMe"} validate={[emptyField]} placeholder={"About you"} component={SettingField} /></li>
                <li><Field name={"facebook"} validate={[urlValidator]} placeholder={"Facebook"} component={SettingField} /></li>
                <li><Field name={"github"} validate={[urlValidator]} placeholder={"Github"} component={SettingField} /></li>
                <li><Field name={"instagram"} validate={[urlValidator]} placeholder={"Instagram"} component={SettingField} /></li>
                <li><Field name={"mainLink"} validate={[urlValidator]} placeholder={"MainLink"} component={SettingField}/></li>
                <li><Field name={"twitter"} validate={[urlValidator]} placeholder={"Twitter"} component={SettingField} /></li>
                <li><Field name={"vk"} validate={[urlValidator]} placeholder={"Vk"} component={SettingField} /></li>
                <li><Field name={"website"} validate={[urlValidator]} placeholder={"Website"} component={SettingField} /></li>
                <li><Field name={"youtube"} validate={[urlValidator]} placeholder={"YouTube"} component={SettingField} /></li>
                <li><Field name={"lookingForAJob"} id={"lookingForAJob"} component={"input"}
                           type={"checkbox"} /><label htmlFor="lookingForAJob">Looking for a job?</label></li>
                <li><Field name={"lookingForAJobDescription"} validate={[emptyField]}  placeholder={"What job is your favourite?"} component={SettingField} /></li>
            </ul>
            <Button type={"submit"}
                    variant="contained" color="primary">Set changes</Button>
            <Button onClick={() => props.setEditMode(false)}
                    variant="contained">Cancel</Button>
        </form>
    )
};

const InformationFormProvider = reduxForm({
    form: "settings"
})(InformationForm);

export default InformationFormContainer;