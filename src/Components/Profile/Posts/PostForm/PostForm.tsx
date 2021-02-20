import { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import { emptyField } from '../../../../utils/validators'
import { Textarea } from '../../../Common/FieldControls'

import { ReduxFormPostType } from './PostFormContainer'

type PropsType = {
  maxLength500: (value: string) => string | undefined
  minLength2: (value: string) => string | undefined
}

const PostForm: FC<InjectedFormProps<ReduxFormPostType, PropsType> & PropsType> = ({
  handleSubmit,
  maxLength500,
  minLength2,
}) => (
  <form onSubmit={handleSubmit}>
    <Field
      component={Textarea}
      name="postText"
      placeholder="Ваш пост..."
      validate={[emptyField, maxLength500, minLength2]}
    />
  </form>
)

export default reduxForm<ReduxFormPostType, PropsType>({
  form: 'post',
})(PostForm)
