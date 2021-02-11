import React, { FC } from 'react'
import classes from './FieldControls.module.css'
import Button from '@material-ui/core/Button'
import { WrappedFieldProps } from 'redux-form'

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
      <Button type="submit" variant="contained" color="primary" disabled={validation}>
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
  const styles = []
  if (validation) styles.push(classes.error)
  return (
    <div className={styles.join(' ')}>
      <input {...input} id={id} type={type} placeholder={placeholder} />
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
