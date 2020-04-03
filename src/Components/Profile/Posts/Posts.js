import React from "react";
import AddingNewPostContainer from "./AddingNewPost/AddingNewPostContainer";
import Post from "./Post/Post";
import clasees from "./Posts.module.css";

const Posts = props => {
  let posts = props.store.getState().profilePage.posts;
  let currentPosts = posts.map(post => <Post postText={post.postText} />);
  return (
    <div className={clasees.post}>
      <AddingNewPostContainer dispatch={props.store.dispatch} newPostText={props.store.getState().profilePage.newPostText}/>
      {currentPosts}
    </div>
  );
};

export default Posts;
