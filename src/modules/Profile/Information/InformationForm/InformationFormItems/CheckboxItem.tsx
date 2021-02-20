import { FC } from 'react';
import { Field } from 'redux-form'

export const CheckboxItem: FC = () => (
  <li>
    <Field component="input" id="lookingForAJob" name="lookingForAJob" type="checkbox" />
    <label htmlFor="lookingForAJob">Looking for a job?</label>
  </li>
)
