import { useContext } from 'react'
import styles from './NavigationLinks.module.css'
import ModeContext from '../../context/ModeContext'

const NavigationLinks = (props) => {
   const { isLight } = useContext(ModeContext)
   const modeStyle = isLight ? '' : styles.dark


   return (
      <nav className={`${styles.nav} ${modeStyle}`}>
         <ul>
            {props.children}
         </ul>
      </nav>
   )
}

export default NavigationLinks