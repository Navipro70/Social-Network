import React from "react";
import classes from "./AddingNewPost.module.css";
import {
  newPostActionCreator,
  newPostTextChangerActionCreator
} from "../../../../redux/profile-reducer";

const AddingNewPost = props => {

  let textareaElement = React.createRef();
  function makePost() {
    props.dispatch(newPostActionCreator());
  }

  function onChangeFunction() {
    let text = textareaElement.current.value;
    props.dispatch(newPostTextChangerActionCreator(text))
  }

  return (
    <div className={classes.adding_new_post}>
      <h3>What new?</h3>
      <textarea
        name="post"
        id="post_text"
        placeholder="Ваш пост..."
        ref={textareaElement}
        onChange={onChangeFunction}
        value={props.newPostText}
      />
      <button type="button" onClick={makePost}>
        Add new post
      </button>
    </div>
  );
};

export default AddingNewPost;
