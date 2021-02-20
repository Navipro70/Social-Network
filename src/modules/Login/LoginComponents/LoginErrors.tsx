import { FC } from 'react'
import { Field } from 'redux-form'

import { Nullable } from '../../../Types/types'
import { LoginInput } from '../../../components'

type PropsType = {
  error: Nullable<string>
  captchaSrc: Nullable<string>
}

export const LoginErrors: FC<PropsType> = ({ error, captchaSrc }) => (
  <div className="form-row common-login-error">
    {error}
    <img alt="" src={captchaSrc!} />
    {captchaSrc && (
      <Field component={LoginInput} name="captcha" placeholder="Captcha" type="text" />
    )}
  </div>
)
