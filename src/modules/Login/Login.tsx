import { FC } from 'react';
import './login.css'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { Nullable } from '../../Types/types'

import { LoginCheckbox } from './LoginComponents/LoginCheckbox'
import { LoginEmail } from './LoginComponents/LoginEmail'
import { LoginErrors } from './LoginComponents/LoginErrors'
import { LoginPassword } from './LoginComponents/LoginPassword'
import { ReduxFormDataType } from './LoginContainer'


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
  <form className="ui-form" onSubmit={handleSubmit}>
    <h3>Login</h3>
    <LoginEmail />
    <LoginPassword maxLength20={maxLength20} minLength5={minLength5} />
    <LoginCheckbox />
    {(error || captchaSrc) && <LoginErrors captchaSrc={captchaSrc} error={error} />}
    <input type="submit" value="Sign up" />
  </form>
)

export default reduxForm<ReduxFormDataType, PropsType>({
  form: 'login',
})(Login)
