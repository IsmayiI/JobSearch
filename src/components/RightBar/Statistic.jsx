import { useContext } from 'react'
import styles from './Statistic.module.css'
import CompaniesContext from '../../context/CompaniesContext'
import ModeContext from '../../context/ModeContext'

const Statistic = () => {
   const { vacancies } = useContext(CompaniesContext)
   const { isLight } = useContext(ModeContext)

   const monthly = Math.floor(vacancies.length)
   const weekly = Math.floor(monthly / 4)
   const daily = Math.floor(weekly / 7)

   const modeStyle = isLight ? '' : styles.dark


   return (
      <div className={styles.statistic}>
         <p>Number of vacancies posted on the site</p>
         <div className={styles.info}>
            <ul className={`${styles.list} ${modeStyle}`}>
               <li>
                  <h4>Daily</h4>
                  <span>{daily}</span>
               </li>
               <li>
                  <h4>Weekly</h4>
                  <span>{weekly}</span>
               </li>
            </ul>
            <div className={`${styles.month} ${modeStyle}`}>
               <h4>Monthly</h4>
               <span>{monthly}</span>
            </div>
         </div>
      </div>
   )
}

export default Statistic