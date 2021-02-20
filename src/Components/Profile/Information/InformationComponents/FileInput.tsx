import React, { FC } from 'react'
import './FileInput.css'

type PropsType = {
  photoHandler: (e: React.SyntheticEvent<EventTarget>) => void
}

const FileInput: FC<PropsType> = ({ photoHandler }) => (
  <div>
    <input id="fileInput" name="fileInput" type="file" onChange={photoHandler} />
    <label htmlFor="fileInput" id="fileLabel">
      {' '}
      Choose a file{' '}
    </label>
  </div>
)

export default FileInput
