import { FC } from 'react';

import '../../App.css'
import preloader from '../../Images/loader.svg'

const Preloader: FC = () => (
  <div className="preloader">
    <img alt="loading..." src={preloader} />
  </div>
)

export default Preloader
