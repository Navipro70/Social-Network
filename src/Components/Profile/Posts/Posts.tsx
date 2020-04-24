import React, {FC} from "react"
import Post from "./Post"
import classes from "./Posts.module.css"
import {postType} from "../../../Types/types"
import PostFormContainer from "./PostForm/PostFormContainer"

type PropsType = {
    isOwner: boolean
    posts: Array<postType>
    addPost: (postText: string) => void
}

const Posts: FC<PropsType> = ({isOwner, posts, addPost}) => (
    <div className={classes.posts}>
        {isOwner && <PostFormContainer addPost={addPost}/>}
        <h4>All posts</h4>
        {posts.map(post => <Post postText={post.postText} key={post.id}/>)}
    </div>
);

export default React.memo(Posts)