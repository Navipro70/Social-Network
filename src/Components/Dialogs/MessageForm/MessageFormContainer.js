import React from "react";
import {reset} from "redux-form";
import {maxLength, minLength} from "../../../utils/validators";
import {ReduxMessageForm} from "./MessageForm";

const MessageFormContainer = ({addMessage, ...props}) => {
    const onSubmit = (data, dispatch) => {
        addMessage(data.message);
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

export default MessageFormContainer;