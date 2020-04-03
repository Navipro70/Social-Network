import React from "react";
import classes from "./AddingNewPost.module.css";

const AddingNewPost = props => {
  let textareaElement = React.createRef();

  const onPostMaker = () => props.postMaker();

  const onPostChange = () => props.postChange(textareaElement.current.value);

  return (
    <div className={classes.adding_new_post}>
      <h3>What new?</h3>
      <textarea
        name="post"
        id="post_text"
        placeholder="Ваш пост..."
        ref={textareaElement}
        onChange={onPostChange}
        value={props.newPostText}
      />
      <button type="button" onClick={onPostMaker}>
        Add new post
      </button>
    </div>
  );
};

export default AddingNewPost;
