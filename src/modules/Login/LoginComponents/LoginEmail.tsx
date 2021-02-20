import { FC } from 'react'
import '../login.css'
import { Field } from 'redux-form'

import { LoginInput } from '../../../components'
import { emailValidator, emptyField } from '../../../utils/validators'

export const LoginEmail: FC = () => (
  <div className="form-row">
    <Field
      component={LoginInput}
      id="email"
      name="login"
      placeholder="Email"
      type="text"
      validate={[emptyField, emailValidator]}
    />
  </div>
)
