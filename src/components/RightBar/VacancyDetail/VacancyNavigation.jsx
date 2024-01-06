import NavigationLinks from '../../UI/NavigationLinks'
import styles from './VacancyNavigation.module.css'
import { NavLink } from 'react-router-dom'

const VacancyNavigation = ({ isLight }) => {

   const setActiveStyle = ({ isActive }) => isActive ? styles.active : ''
   const modeStyle = isLight ? '' : styles.dark

   return (
      <NavigationLinks>
         <li className={`${styles.item} ${modeStyle}`}>
            <NavLink to='description' className={setActiveStyle}>Job description</NavLink>
         </li>
         <li className={`${styles.item} ${modeStyle}`}>
            <NavLink to='about' className={setActiveStyle}>About company</NavLink>
         </li>
         <li className={`${styles.item} ${modeStyle}`}>
            <NavLink to='vacancies' className={setActiveStyle}>Other vacancies</NavLink>
         </li>
      </NavigationLinks>
   )
}

export default VacancyNavigation