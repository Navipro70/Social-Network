import { FC } from 'react'

import preloader from '../Images/loader.svg'

export const LoadingView: FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img alt="loading..." src={preloader} />
  </div>
)
