
import styles from './CompanyDetail.module.css'
import ScrollBar from '../../UI/ScrollBar'
import NavigationLinks from '../../UI/NavigationLinks'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import CompaniesContext from '../../../context/CompaniesContext'
import ModeContext from '../../../context/ModeContext'

const CompanyDetail = () => {
   const setActiveStyle = ({ isActive }) => isActive ? styles.active : ''

   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark


   const { slug } = useParams()
   const { company, fetchSlugCompanyData } = useContext(CompaniesContext)

   useEffect(() => {
      fetchSlugCompanyData(slug)
   }, [])



   if (!company) {
      return <div>Loading</div>
   }



   const { name, subtitle, image } = company



   return (
      <ScrollBar>
         <div className={styles.detail}>
            <div className={styles.head}>
               <img src={image} alt={name} />
               <div className={`${styles.info} ${modeStyle}`}>
                  <h3>{name}</h3>
                  <a href="#">{subtitle}</a>
               </div>
            </div>
            <NavigationLinks>
               <li className={`${styles.item} ${modeStyle}`}>
                  <NavLink to='about' className={setActiveStyle}>About company</NavLink>
               </li>
               <li className={`${styles.item} ${modeStyle}`}>
                  <NavLink to='vacancies' className={setActiveStyle}>Latest vacancies</NavLink>
               </li>
            </NavigationLinks>
            <Outlet />
         </div>
      </ScrollBar>
   )
}

export default CompanyDetail