import {reduxForm, reset} from "redux-form";
import {maxLength, minLength} from "../../../../../utils/validators";
import React from "react";
import {PostForm} from "./PostForm";

const PostFormContainer = ({addPost}) => {
    const onSubmit = (data, dispatch) => {
        addPost(data.postText);
        dispatch(reset("post"));
    };
    const maxLength500 = maxLength(500);
    const minLength2 = minLength(2);

    return (
        <ReduxPostForm
            onSubmit={onSubmit}
            maxLength500={maxLength500}
            minLength2={minLength2}/>
    )
};

const ReduxPostForm = reduxForm({
    form: "post"
})(PostForm);

export default PostFormContainer;