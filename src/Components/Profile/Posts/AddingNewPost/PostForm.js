import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../Common/FieldControls";
import {emptyField, maxLength, minLength} from "../../../../utils/validators";

const PostFormContainer = props => {
    const onSubmit = data => {
        props.addPost(data.postText);
        data.postText = "";
    };
    const maxLength500 = maxLength(500);
    const minLength2 = minLength(2);

    return (
        <div>
            <ReduxPostForm onSubmit={onSubmit}
                           maxLength500={maxLength500}
                           minLength2={minLength2}
            />
        </div>
    )
};

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name={"postText"}
                   component={Textarea}
                   placeholder="Ваш пост..."
                   validate={[emptyField, props.maxLength500, props.minLength2]}
            />
            <input type="submit" value=" Add new post" />
        </form>
    )
};

const ReduxPostForm = reduxForm({
    form: "post"
})(PostForm);

export default PostFormContainer;