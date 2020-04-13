import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {emptyField, maxLength, minLength} from "../../../utils/validators";
import {Textarea} from "../../Common/FieldControls";

const MessageFormContainer = props => {
    const onSubmit = (data, dispatch) => {
        props.addMessage(data.message);
        dispatch(reset("message"));
    };
    const mexLength300 = maxLength(300);
    const minLength2 = minLength(2);
    return (
        <div>
            <ReduxMessageForm
                onSubmit={onSubmit}
                maxLength300={mexLength300}
                minLength2={minLength2}
            />
        </div>
    )
};

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name={"message"} placeholder={"Your message..."}
                   component={Textarea}
                   validate={[emptyField, props.maxLength300, props.minLength2]}
            />
        </form>
    )
};

const ReduxMessageForm = reduxForm({
    form: "message"
})(MessageForm);

export default MessageFormContainer;