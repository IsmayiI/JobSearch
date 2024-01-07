import { useContext } from 'react'
import Vacancy from '../Vacancies/Vacancy'
import styles from './LatestVacancies.module.css'
import CompaniesContext from '../../context/CompaniesContext'
import ScrollBar from '../../components/UI/ScrollBar'
import { Link, Outlet, useParams } from 'react-router-dom'
import ModeContext from '../../context/ModeContext'

const OtherVacancies = () => {
   const { slug } = useParams()

   const { company } = useContext(CompaniesContext)
   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark

   const { latest_vacancies } = company


   if (!latest_vacancies) {
      return <div>loading</div>
   }

   const otherVacancies = latest_vacancies.filter(vacancy => vacancy.slug !== slug)


   return (
      <>
         <ScrollBar>
            <div className={`${styles.vacancies} ${modeStyle}`}>
               {otherVacancies.map(vacancy => (
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

export default OtherVacancies