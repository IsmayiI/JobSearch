import { useContext } from 'react'
import styles from './Filter.module.css'
import ModeContext from '../../context/ModeContext'
import CompaniesContext from '../../context/CompaniesContext'

const Filter = ({ title }) => {
   const { isLight } = useContext(ModeContext)
   const { deleteFilterCategory } = useContext(CompaniesContext)

   const modeStyle = isLight ? '' : styles.dark

   return (
      <div className={`${styles.filter} ${modeStyle}`}>
         <div>
            <span>{title}</span>
            <button onClick={deleteFilterCategory}></button>
         </div>
      </div>
   )
}

export default Filter