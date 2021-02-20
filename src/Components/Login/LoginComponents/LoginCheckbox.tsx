import React, { FC } from 'react'
import '../login.css'
import { Field } from 'redux-form'

export const LoginCheckbox: FC = () => (
  <div className="checkbox-row">
    <Field type="checkbox" name="rememberMe" id="checkbox" className="checkbox" component="input" />
    <label htmlFor="checkbox" className="checkbox__text">
      Remember me
    </label>
  </div>
)
