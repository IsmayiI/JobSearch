import { useContext } from 'react'
import NavigationLinks from '../../UI/NavigationLinks'
import styles from './VacancyNavigation.module.css'
import { NavLink } from 'react-router-dom'
import CompaniesContext from '../../../context/CompaniesContext'

const VacancyNavigation = ({ isLight, slug }) => {

   const { company } = useContext(CompaniesContext)

   const setActiveStyle = ({ isActive }) => isActive ? styles.active : ''
   const modeStyle = isLight ? '' : styles.dark


   const otherVacancies = company?.latest_vacancies?.filter(vacancy => vacancy.slug !== slug)


   return (
      <NavigationLinks>
         <li className={`${styles.item} ${modeStyle}`}>
            <NavLink to='description' className={setActiveStyle}>Job description</NavLink>
         </li>
         <li className={`${styles.item} ${modeStyle}`}>
            <NavLink to='about' className={setActiveStyle}>About company</NavLink>
         </li>
         {otherVacancies?.length !== 0 && <li className={`${styles.item} ${modeStyle}`}>
            <NavLink to='vacancies' className={setActiveStyle}>Other vacancies</NavLink>
         </li>}
      </NavigationLinks>
   )
}

export default VacancyNavigation