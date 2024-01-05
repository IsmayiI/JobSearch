import { useContext } from 'react'
import styles from './ScrollBar.module.css'
import ModeContext from '../../context/ModeContext'

const ScrollBar = (props) => {

   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark

   return (
      <div className={`${styles.scrollBar} ${modeStyle}`}>
         {props.children}
      </div>
   )
}

export default ScrollBar