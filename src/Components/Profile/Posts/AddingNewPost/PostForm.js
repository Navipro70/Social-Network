import React from "react";
import {Field, reduxForm} from "redux-form";

const PostFormContainer = props => {
    const onSubmit = data => {
        props.addPost(data.postText);
        data.postText = "";
    };

    return (
        <div>
            <ReduxPostForm onSubmit={onSubmit}/>
        </div>
    )
};

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name={"postText"} component={"textarea"} placeholder="Ваш пост..." />
            <input type="submit" value=" Add new post" />
        </form>
    )
};

const ReduxPostForm = reduxForm({
    form: "post"
})(PostForm);

export default PostFormContainer;