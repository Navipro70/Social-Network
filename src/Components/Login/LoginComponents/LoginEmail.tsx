import React, { FC } from 'react'
import '../login.css'
import { Field } from 'redux-form'

import { emailValidator, emptyField } from '../../../utils/validators'
import { LoginInput } from '../../Common/FieldControls'

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
