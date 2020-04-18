import React from "react";
import AddingNewPostContainer from "./AddingNewPost/AddingNewPostContainer";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = ({isOwner, posts}) => {
  let currentPosts = posts.map(post => <Post postText={post.postText} key={post.id} />);

  return (
    <div className={classes.post}>
      {isOwner && <AddingNewPostContainer />}
      <h4>All posts</h4>
      {currentPosts}
    </div>
  );
};

export default React.memo(Posts);
