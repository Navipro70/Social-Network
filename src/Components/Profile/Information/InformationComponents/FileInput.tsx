import React, { FC } from 'react'
import './FileInput.css'

type PropsType = {
  photoHandler: (e: React.SyntheticEvent<EventTarget>) => void
}

const FileInput: FC<PropsType> = ({ photoHandler }) => (
  <div>
    <input type="file" name="fileInput" id="fileInput" onChange={photoHandler} />
    <label htmlFor="fileInput" id="fileLabel">
      {' '}
      Choose a file{' '}
    </label>
  </div>
)

export default FileInput
