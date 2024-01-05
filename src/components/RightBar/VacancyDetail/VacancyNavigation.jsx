import NavigationLinks from '../../UI/NavigationLinks'
import styles from './VacancyNavigation.module.css'
import { NavLink } from 'react-router-dom'

const VacancyNavigation = () => {

   const setActiveStyle = ({ isActive }) => isActive ? styles.active : ''

   return (

      <NavigationLinks>
         <li className={styles.item}>
            <NavLink to='description' className={setActiveStyle}>Job description</NavLink>
         </li>
         <li className={styles.item}>
            <NavLink to='about' className={setActiveStyle}>About company</NavLink>
         </li>
         <li className={styles.item}>
            <NavLink to='vacancies' className={setActiveStyle}>Other vacancies</NavLink>
         </li>
      </NavigationLinks>
   )
}

export default VacancyNavigation