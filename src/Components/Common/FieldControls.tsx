import Button from '@material-ui/core/Button'
import React, { FC } from 'react'
import { WrappedFieldProps } from 'redux-form'

import classes from './FieldControls.module.css'

type OwnFieldsType = {
  placeholder: string
}

type PropsFieldType = OwnFieldsType & WrappedFieldProps

export const Textarea: FC<PropsFieldType> = ({ input, meta, placeholder }) => {
  const { error, submitFailed, active } = meta
  const validation = error && submitFailed && !active
  return (
    <div>
      <textarea {...input} placeholder={placeholder} />
      <Button color="primary" disabled={validation} type="submit" variant="contained">
        Add new post
      </Button>
    </div>
  )
}

type LoginOwnFieldsType = {
  id: string
  type: string
}

export const LoginInput: FC<PropsFieldType & LoginOwnFieldsType> = ({
  input,
  meta,
  id,
  type,
  placeholder,
}) => {
  const { error, submitFailed, active } = meta
  const validation = error && submitFailed && !active
  const styles: string[] = []
  if (validation) styles.push(classes.error)
  return (
    <div className={styles.join(' ')}>
      <input {...input} id={id} placeholder={placeholder} type={type} />
      {validation && <span>{error}</span>}
    </div>
  )
}

export const SettingField: FC<PropsFieldType> = ({ input, meta, placeholder }) => {
  const { error, submitFailed, active } = meta
  const validation = error && submitFailed && !active
  return (
    <>
      <input {...input} placeholder={placeholder} />
      {validation && (
        <>
          <span style={{ color: 'red', marginBottom: '2px' }}> *</span>
          <div>
            <span style={{ color: 'red', marginBottom: '2px' }}>{error}</span>
          </div>
        </>
      )}
    </>
  )
}
