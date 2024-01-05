import { useContext } from 'react'
import Vacancy from '../Vacancies/Vacancy'
import styles from './LatestVacancies.module.css'
import CompaniesContext from '../../context/CompaniesContext'
import ScrollBar from '../../components/UI/ScrollBar'
import { Link, Outlet } from 'react-router-dom'

const LatestVacancies = () => {

   const { company } = useContext(CompaniesContext)

   const { latest_vacancies } = company

   if (!latest_vacancies) {
      return <div>loading</div>
   }

   return (
      <>
         <ScrollBar>
            <div className={styles.vacancies}>
               {latest_vacancies.map(vacancy => (
                  <Link to={`/vacancies/${vacancy.slug}`} key={vacancy.id}>
                     <Vacancy
                        title={vacancy.name}
                        subtitle={vacancy.company_name}
                        view={vacancy.view}
                        created_at={vacancy.created_at} />
                  </Link>
               ))}
            </div>
         </ScrollBar>
         <Outlet />
      </>
   )
}

export default LatestVacancies