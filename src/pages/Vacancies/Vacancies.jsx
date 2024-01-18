import Vacancy from './Vacancy'
import ScrollBar from '../../components/UI/ScrollBar'
import { Link, Outlet } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import CompaniesContext from '../../context/CompaniesContext'
import Search from '../../components/UI/Search'
import Filter from './Filter'

const Vacancies = () => {
   const { vacancies, fetchSlugVacancyData, changeViewVacancy, categoryFilter } = useContext(CompaniesContext)
   const [filteredVacancies, setFilteredVacancies] = useState([])
   const [search, setSearch] = useState('');


   const [slugState, setSlugState] = useState()


   const clickHandler = (slug, view, id) => {
      if (slugState === slug) return
      fetchSlugVacancyData(slug)
      changeViewVacancy(id, view)
      setSlugState(slug)

   }


   const filterVacancies = (searchValue) => {
      setSearch(searchValue.toLowerCase())
   }




   useEffect(() => {
      let updateVacancies = vacancies
      if (categoryFilter) {
         updateVacancies = vacancies.filter((vacancy) => vacancy.category_id === categoryFilter.id)
         setFilteredVacancies(updateVacancies)
      }
      updateVacancies = updateVacancies.filter((vacancy) => vacancy.name.toLowerCase().includes(search))
      setFilteredVacancies(updateVacancies)

   }, [search, vacancies, categoryFilter])


   let updateVacancies = filteredVacancies.length ? filteredVacancies : vacancies




   return (
      <>
         <ScrollBar>
            <div>
               <Search filterArr={filterVacancies} title={'Site search'} />
               {categoryFilter && <Filter title={categoryFilter.name} />}
               {updateVacancies.map(vacancy => (
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