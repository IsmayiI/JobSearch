import Vacancy from './Vacancy'
import ScrollBar from '../../components/UI/ScrollBar'
import { Link, Outlet } from 'react-router-dom'
import { useContext, useState } from 'react'
import CompaniesContext from '../../context/CompaniesContext'

const Vacancies = () => {

   const { vacancies, fetchSlugVacancyData, changeViewVacancy } = useContext(CompaniesContext)
   const [slugState, setSlugState] = useState()


   const clickHandler = (slug, view, id) => {
      if (slugState === slug) return
      fetchSlugVacancyData(slug)
      changeViewVacancy(id, view)
      setSlugState(slug)

   }

   return (
      <>
         <ScrollBar>
            <div>
               {vacancies.map(vacancy => (
                  <Link onClick={() => clickHandler(vacancy.slug, vacancy.view, vacancy.id)} to={vacancy.slug} key={vacancy.id}>
                     <Vacancy img={vacancy.image}
                        title={vacancy.name}
                        subtitle={vacancy.company_name}
                        view={vacancy.view}
                        created_at={vacancy.created_at}
                        like={vacancy.like}
                        id={vacancy.id} />
                  </Link>
               ))}
            </div>
         </ScrollBar>
         <Outlet />
      </>
   )
}

export default Vacancies