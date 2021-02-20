import { FC } from 'react'
import '../login.css'
import { Field } from 'redux-form'

import { LoginInput } from '../../../components'
import { emptyField } from '../../../utils/validators'

type PropsType = {
  maxLength20: (value: string) => string | undefined
  minLength5: (value: string) => string | undefined
}

export const LoginPassword: FC<PropsType> = ({ maxLength20, minLength5 }) => (
  <div className="form-row">
    <Field
      component={LoginInput}
      id="password"
      name="password"
      placeholder="Password"
      type="password"
      validate={[emptyField, maxLength20, minLength5]}
    />
  </div>
)
