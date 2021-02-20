import React, { FC } from 'react'

import { postType } from '../../../Types/types'

import Post from './Post'
import PostFormContainer from './PostForm/PostFormContainer'
import classes from './Posts.module.css'

type PropsType = {
  isOwner: boolean
  posts: postType[]
  addPost: (postText: string) => void
}

const Posts: FC<PropsType> = ({ isOwner, posts, addPost }) => (
  <div className={classes.posts}>
    {isOwner && <PostFormContainer addPost={addPost} />}
    <h4>All posts</h4>
    {posts.map((post) => (
      <Post key={post.id} postText={post.postText} />
    ))}
  </div>
)

export default React.memo(Posts)
