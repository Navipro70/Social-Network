import { FC } from 'react';
import { reset } from 'redux-form'

import { DispatchReduxFormType } from '../../../../Types/ReduxFormTypes'
import { maxLength, minLength } from '../../../../utils/validators'

import ReduxPostForm from './PostForm'

export type PropsType = {
  addPost: (postText: string) => void
}

export type ReduxFormPostType = {
  postText: string
}

const PostFormContainer: FC<PropsType> = ({ addPost }) => {
  const onSubmit = ({ postText }: ReduxFormPostType, dispatch: DispatchReduxFormType) => {
    addPost(postText)
    dispatch(reset('post'))
  }
  const maxLength500 = maxLength(500)
  const minLength2 = minLength(2)

  return (
    <div>
      <h3>What's new?</h3>
      <ReduxPostForm maxLength500={maxLength500} minLength2={minLength2} onSubmit={onSubmit} />
    </div>
  )
}

export default PostFormContainer
