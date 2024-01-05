import styles from './Menu.module.css'
import CaseIcon from '../../assets/icons/CaseIcon'
import CategoryIcon from '../../assets/icons/CategoryIcon'
import CompanyIcon from '../../assets/icons/CompanyIcon'
import HeartIcon from '../../assets/icons/HeartIcon'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import CompaniesContext from '../../context/CompaniesContext'

const Menu = ({ isLight }) => {
   const setActiveLink = ({ isActive }) => isActive ? styles.active : ''
   const { favorites } = useContext(CompaniesContext)

   const modeStyle = isLight ? '' : styles.dark

   return (
      <div className={`${styles.menu} ${modeStyle}`}>
         <nav>
            <ul>
               <li>
                  <NavLink to='vacancies' className={setActiveLink} >
                     <CaseIcon />
                     <span>Vacancies</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to='categories' className={setActiveLink}>
                     <CategoryIcon />
                     <span>Categories</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to='companies' className={setActiveLink}>
                     <CompanyIcon />
                     <span>Companies</span>
                  </NavLink>
               </li>
            </ul>
         </nav>
         <span>Your JobSearch</span>
         <ul>
            <li>
               <NavLink to='favorites' className={setActiveLink}>
                  <HeartIcon />
                  <span>Favorite</span>
                  <div className={styles.count}>{favorites.length}</div>
               </NavLink>
            </li>
         </ul>
      </div>
   )
}

export default Menu