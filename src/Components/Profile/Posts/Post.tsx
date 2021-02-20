import React, { FC } from 'react'

import classes from './Posts.module.css'

const Post: FC<{ postText: string }> = ({ postText }) => (
  <div className={classes.post}>
    <img
      alt="smb img"
      src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
    />
    <p>{postText}</p>
  </div>
)

export default Post
