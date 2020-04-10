import React from "react";
import {Field, reduxForm} from "redux-form";

const MessageFormContainer = props => {
    const onSubmit = data => {
        props.addMessage(data.message);
        data.message = "";
    };

    return (
        <div>
            <ReduxMessageForm onSubmit={onSubmit}/>
        </div>
    )
};

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name={"message"} component={"textarea"} />
            <input type="submit" value="Send message" />
        </form>
    )
};

const ReduxMessageForm = reduxForm({
    form: "message"
})(MessageForm);

export default MessageFormContainer;