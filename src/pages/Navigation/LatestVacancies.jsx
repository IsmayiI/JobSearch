import { useContext, useEffect } from 'react'
import Vacancy from '../Vacancies/Vacancy'
import styles from './LatestVacancies.module.css'
import CompaniesContext from '../../context/CompaniesContext'
import ScrollBar from '../../components/UI/ScrollBar'
import { Link, Outlet, useParams } from 'react-router-dom'
import ModeContext from '../../context/ModeContext'

const LatestVacancies = () => {

   const { company } = useContext(CompaniesContext)
   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark

   const { latest_vacancies } = company


   if (!latest_vacancies) {
      return <div>loading</div>
   }


   return (
      <>
         <ScrollBar>
            <div className={`${styles.vacancies} ${modeStyle}`}>
               {latest_vacancies.map(vacancy => (
                  <Link to={`/vacancies/${vacancy.slug}`} key={vacancy.id}>
                     <Vacancy
                        title={vacancy.name}
                        subtitle={vacancy.company_name}
                        view={vacancy.view}
                        created_at={vacancy.created_at}
                        like={vacancy.like}
                        isLight={isLight}
                        id={vacancy.id} />
                  </Link>
               ))}
            </div>
         </ScrollBar>
         <Outlet />
      </>
   )
}

export default LatestVacancies