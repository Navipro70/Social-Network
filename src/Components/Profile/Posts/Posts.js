import React from "react";
import AddingNewPostContainer from "./AddingNewPost/AddingNewPostContainer";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = ({isOwner, ...props}) => {
  let currentPosts = props.posts.map(post => <Post postText={post.postText} key={post.id} />);
  return (
    <div className={classes.post}>
      {isOwner && <AddingNewPostContainer />}
      {!isOwner && <h4>All posts</h4>}
      {currentPosts}
    </div>
  );
};

export default Posts;
