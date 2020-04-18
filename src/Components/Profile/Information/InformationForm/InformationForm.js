import React, {useEffect, useState} from "react";
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import classes from "../Information.module.css";
import {SettingField} from "../../../Common/FieldControls";
import {emptyField, urlValidator} from "../../../../utils/validators";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

const InformationFormContainer = props => {
    const onSubmit = (data, dispatch, {...props}) => {
        props.thunkPutUserInformation(data, props.profile.userId);
        props.setEditMode(true);
    };

    return <div>
        <InformationFormProvider initialValues={{...props.profile, ...props.profile.contacts}}
            setEditMode={props.setEditMode} profile={props.profile}
            thunkPutUserInformation={props.thunkPutUserInformation}
            onSubmit={onSubmit} />
    </div>
};

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const InformationForm = ({profile, ...props}) => {
    const [open, setOpen] = useState(false);
    useEffect(() => setOpen(typeof props.error === "string"), [props.error]);

    return (
        <form onSubmit={props.handleSubmit} className={classes.fullForm} >
            <ul className={classes.profileInfoForm}>
                <li><Field name={"aboutMe"} validate={[emptyField]} placeholder={"About you"} component={SettingField} /></li>
                <li><Field name={"contacts.facebook"} validate={[urlValidator]} placeholder={"Facebook"} component={SettingField} /></li>
                <li><Field name={"contacts.github"} validate={[urlValidator]} placeholder={"Github"} component={SettingField} /></li>
                <li><Field name={"contacts.instagram"} validate={[urlValidator]} placeholder={"Instagram"} component={SettingField} /></li>
                <li><Field name={"contacts.mainLink"} validate={[urlValidator]} placeholder={"MainLink"} component={SettingField}/></li>
                <li><Field name={"contacts.twitter"} validate={[urlValidator]} placeholder={"Twitter"} component={SettingField} /></li>
                <li><Field name={"contacts.vk"} validate={[urlValidator]} placeholder={"Vk"} component={SettingField} /></li>
                <li><Field name={"contacts.website"} validate={[urlValidator]} placeholder={"Website"} component={SettingField} /></li>
                <li><Field name={"contacts.youtube"} validate={[urlValidator]} placeholder={"YouTube"} component={SettingField} /></li>
                <li><Field name={"lookingForAJob"} id={"lookingForAJob"} component={"input"}
                           type={"checkbox"} /><label htmlFor="lookingForAJob">Looking for a job?</label></li>
                <li><Field name={"lookingForAJobDescription"} validate={[emptyField]}  placeholder={"What job is your favourite?"} component={SettingField} /></li>
                <li><Field name={"fullName"} validate={[emptyField]}  placeholder={"Your full name"} component={SettingField} /></li>
            </ul>
            <Button type={"submit"} variant="contained" color="primary">Set changes</Button>
            <Button onClick={() => props.setEditMode(false)} variant="contained">Cancel</Button>

            <Snackbar open={open} onClick={() => setOpen(false)}>
                <Alert severity="error">
                    {props.error}
                </Alert>
            </Snackbar>
        </form>
    )
};

const InformationFormProvider = reduxForm({
    form: "settings"
})(InformationForm);

export default InformationFormContainer;