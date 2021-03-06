import { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import { Textarea } from '../../../components'
import { emptyField } from '../../../utils/validators'

import { ReduxFormDataType } from './MessageFormContainer'

type PropsType = {
  maxLength300: (value: string) => string | undefined
  minLength2: (value: string) => string | undefined
}

const MessageForm: FC<InjectedFormProps<ReduxFormDataType, PropsType> & PropsType> = ({
  maxLength300,
  minLength2,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <Field
      component={Textarea}
      name="message"
      placeholder="Your message..."
      validate={[emptyField, maxLength300, minLength2]}
    />
  </form>
)

export const ReduxMessageForm = reduxForm<ReduxFormDataType, PropsType>({
  form: 'message',
})(MessageForm)
