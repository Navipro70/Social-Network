import React from "react";
import classes from "./AddingNewPost.module.css";

const AddingNewPost = props => {
  let textareaElement = React.createRef();
  function makePost() {
    props.newPost(textareaElement.current.value);
    textareaElement.current.value = "";
  }

  function onChangeFunction() {
    let valueTextArea = textareaElement.current.value;
    props.onKeyDown(valueTextArea);
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
      ></textarea>
      <button type="button" onClick={makePost}>
        Add new post
      </button>
    </div>
  );
};

export default AddingNewPost;
