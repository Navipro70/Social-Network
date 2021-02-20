import React, { FC } from 'react'
import './login.css'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { LoginEmail } from './LoginComponents/LoginEmail'
import { LoginPassword } from './LoginComponents/LoginPassword'
import { LoginCheckbox } from './LoginComponents/LoginCheckbox'
import { LoginErrors } from './LoginComponents/LoginErrors'
import { ReduxFormDataType } from './LoginContainer'
import { Nullable } from '../../Types/types'

type PropsType = {
  maxLength20: (value: string) => string | undefined
  minLength5: (value: string) => string | undefined
  captchaSrc: Nullable<string>
}

const Login: FC<InjectedFormProps<ReduxFormDataType, PropsType> & PropsType> = ({
  error,
  handleSubmit,
  maxLength20,
  minLength5,
  captchaSrc,
}) => (
  <form onSubmit={handleSubmit} className="ui-form">
    <h3>Login</h3>
    <LoginEmail />
    <LoginPassword maxLength20={maxLength20} minLength5={minLength5} />
    <LoginCheckbox />
    {(error || captchaSrc) && <LoginErrors error={error} captchaSrc={captchaSrc} />}
    <input type="submit" value="Sign up" />
  </form>
)

export default reduxForm<ReduxFormDataType, PropsType>({
  form: 'login',
})(Login)
