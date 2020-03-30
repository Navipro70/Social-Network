import React from "react";
import AddingNewPost from "./AddingNewPost/AddingNewPost";
import Post from "./Post/Post";
import clasees from "./Posts.module.css";

let posts = [
  {id:1, postText:"This is post from other user element to resemble a link, use a button and change it with appropriate styles. Learn more:"},
  {id:2, postText:"This is post from other user The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value."},
  {id:3, postText:"This is post from other user The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the"}
];

let currentPosts = posts.map(post => <Post postText={post.postText} />)

const Posts = () => {
  return (
    <div className={clasees.post}>
      <AddingNewPost />
      {currentPosts}
    </div>
  );
};

export default Posts;
