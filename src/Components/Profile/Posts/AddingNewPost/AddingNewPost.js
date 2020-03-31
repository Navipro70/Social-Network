import React from "react";
import classes from "./AddingNewPost.module.css";

const AddingNewPost = () => {
  let textareaElement = React.createRef();
  function makePost(){
    alert(textareaElement.current.value)
  }

  return (
    <div className={classes.adding_new_post}>
      <h3>What new?</h3>
      <textarea name="post" id="post_text" placeholder="Ваш пост..." ref={textareaElement}></textarea>
      <button type="button" onClick={makePost}>Add new post</button>
    </div>
  );
};

export default AddingNewPost;
