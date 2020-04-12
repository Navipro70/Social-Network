import React from "react";
import {emptyField} from "../../../utils/validators";
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import classes from "./Information.module.css";

const InformationFormContainer = props => {
    const onSubmit = () => {
    };

    return <div>
        <InformationForm
            setEditMode={props.setEditMode}
            onSubmit={onSubmit}
        />
    </div>
};

const InformationForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <ul className={classes.profileInfoForm}>
                <li><Field name={"aboutMe"} placeholder={"About you"} component={"input"} /></li>
                <li><Field name={"vk"} placeholder={"Facebook"} component={"input"} /></li>
                <li><Field name={"facebook"} placeholder={"Github"} component={"input"} /></li>
                <li><Field name={"inst"} placeholder={"Instagram"} component={"input"} /></li>
                <li><Field name={"twitch"} placeholder={"MainLink"} component={"input"} /></li>
                <li><Field name={"twitch"} placeholder={"Twitter"} component={"input"} /></li>
                <li><Field name={"twitch"} placeholder={"Vk"} component={"input"} /></li>
                <li><Field name={"twitch"} placeholder={"Website"} component={"input"} /></li>
                <li><Field name={"twitch"} placeholder={"YouTube"} component={"input"} /></li>
                <li><Field name={"twitch"} placeholder={"Looking for a job?"} component={"input"} type={"checkbox"} /></li>
                <li><Field name={"twitch"} placeholder={"What job is your favourite?"} component={"input"} /></li>
                <li><Field name={"twitch"} placeholder={"Your full name"} component={"input"} /></li>
            </ul>
            <Button type={"submit"}
                    variant="contained" color="primary">Set changes</Button>
            <Button onClick={() => props.setEditMode(false)}
                    variant="contained">Cancel</Button>
        </form>
    )
};

export default reduxForm({
    form: "settings"
})(InformationForm);