
import SunIcon from '../../assets/icons/SunIcon'
import MoonIcon from '../../assets/icons/MoonIcon'

import styles from './ModeButton.module.css'
import { useContext, useState } from 'react'
import ModeContext from '../../context/ModeContext'

const ModeButton = () => {

   const { isLight, onToogleMode } = useContext(ModeContext)

   const modeStyle = isLight ? styles.light : styles.dark

   return (
      <div className={`${styles.mode} ${modeStyle}`}>
         <button onClick={() => onToogleMode(true)}>
            <SunIcon />
         </button>
         <button onClick={() => onToogleMode(false)}>
            <MoonIcon />
         </button>
      </div>
   )
}

export default ModeButton