import styles from './Vacancies.module.css'
import Vacancy from './Vacancy'
import ScrollBar from '../../components/UI/ScrollBar'
import { Link, Outlet } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import CompaniesContext from '../../context/CompaniesContext'
import ModeContext from '../../context/ModeContext'

const Vacancies = () => {

   const { vacancies, fetchSlugVacancyData, changeViewVacancy } = useContext(CompaniesContext)
   const { isLight } = useContext(ModeContext)
   const [slugState, setSlugState] = useState()


   const clickHandler = (slug, view, id) => {
      if (slugState === slug) return
      fetchSlugVacancyData(slug)
      changeViewVacancy(id, view)
      setSlugState(slug)

   }

   const modeStyle = isLight ? '' : styles.dark


   return (
      <>
         <ScrollBar>
            <div className={`${styles.vacancies} ${modeStyle}`}>
               {vacancies.map(vacancy => (
                  <Link onClick={() => clickHandler(vacancy.slug, vacancy.view, vacancy.id)} to={vacancy.slug} key={vacancy.id}>
                     <Vacancy img={vacancy.image}
                        title={vacancy.name}
                        subtitle={vacancy.company_name}
                        view={vacancy.view}
                        created_at={vacancy.created_at}
                        like={vacancy.like}
                        id={vacancy.id}
                        isLight={isLight} />
                  </Link>
               ))}
            </div>
         </ScrollBar>
         <Outlet />
      </>
   )
}

export default Vacancies