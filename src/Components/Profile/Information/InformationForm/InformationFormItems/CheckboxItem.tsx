import React, { FC } from 'react'
import { Field } from 'redux-form'

export const CheckboxItem: FC = () => (
  <li>
    <Field name="lookingForAJob" id="lookingForAJob" component="input" type="checkbox" />
    <label htmlFor="lookingForAJob">Looking for a job?</label>
  </li>
)
