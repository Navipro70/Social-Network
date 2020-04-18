import React from "react";
import {Field} from "redux-form";
import {Textarea} from "../../../../Common/FieldControls";
import {emptyField} from "../../../../../utils/validators";

export const PostForm = ({handleSubmit, maxLength500, minLength2}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={"postText"}
                   component={Textarea}
                   placeholder="Ваш пост..."
                   validate={[emptyField, maxLength500, minLength2]}/>
        </form>
    )
};