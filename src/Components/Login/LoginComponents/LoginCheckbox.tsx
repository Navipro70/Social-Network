import React, { FC } from 'react'
import '../login.css'
import { Field } from 'redux-form'

export const LoginCheckbox: FC = () => (
  <div className="checkbox-row">
    <Field className="checkbox" component="input" id="checkbox" name="rememberMe" type="checkbox" />
    <label className="checkbox__text" htmlFor="checkbox">
      Remember me
    </label>
  </div>
)
