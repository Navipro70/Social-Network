import React from "react";
import {Field, reduxForm} from "redux-form";
import {emptyField, maxLength, minLength} from "../../../utils/validators";
import {Textarea} from "../../Common/FieldControls";

const MessageFormContainer = props => {
    const onSubmit = data => {
        props.addMessage(data.message);
        data.message = "";
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
            <Field name={"message"}
                   component={Textarea}
                   validate={[emptyField, props.maxLength300, props.minLength2]}
            />
            <input type="submit" value="Send message" />
        </form>
    )
};

const ReduxMessageForm = reduxForm({
    form: "message"
})(MessageForm);

export default MessageFormContainer;