import React, {FC} from "react"
import {InjectedFormProps, reset} from "redux-form"
import {maxLength, minLength} from "../../../utils/validators"
import {ReduxMessageForm} from "./MessageForm"
import {DispatchReduxFormType} from "../../../Types/ReduxFormTypes"

type PropsType = {
    addMessage: (messageText: string) => void
}

export type ReduxFormDataType = {
    message: string
}

const MessageFormContainer: FC<PropsType> = ({addMessage}) => {
    const onSubmit = ({message}: ReduxFormDataType, dispatch: DispatchReduxFormType): void => {
        addMessage(message);
        dispatch(reset("message"));
    };

    const mexLength300 = maxLength(300);
    const minLength2 = minLength(2);

    return (
        <div>
            <ReduxMessageForm
                onSubmit={onSubmit}
                maxLength300={mexLength300}
                minLength2={minLength2}/>
        </div>
    )
};

export default MessageFormContainer;