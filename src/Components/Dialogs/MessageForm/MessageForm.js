import React from "react";
import {Field, reduxForm} from "redux-form";
import {emptyField} from "../../../utils/validators";
import {Textarea} from "../../Common/FieldControls";

const MessageForm = ({maxLength300, minLength2, handleSubmit, ...props}) => {
    return (
        <form onSubmit={handleSubmit} >
            <Field name={"message"}
                   placeholder={"Your message..."}
                   component={Textarea}
                   validate={[emptyField, maxLength300, minLength2]}
            />
        </form>
    )
};

export const ReduxMessageForm = reduxForm({
    form: "message"
})(MessageForm);

