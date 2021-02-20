import { FC } from 'react'
import { Field } from 'redux-form'

import { SettingField } from '../../../../../components'
import { ValidatorType } from '../../../../../utils/validators'

type PropsType = {
  name: string
  placeholder: string
  validators: ValidatorType[] //Пофиксить тип
}

export const ContactsItem: FC<PropsType> = ({ name, placeholder, validators }) => (
  <li>
    <Field
      component={SettingField}
      name={name}
      placeholder={placeholder}
      validate={[...validators]}
    />
  </li>
)
