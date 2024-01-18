import { Outlet, Link } from "react-router-dom"
import ScrollBar from "../../components/UI/ScrollBar"
import Category from "./Category"
import { useContext, useState } from "react"
import CompaniesContext from "../../context/CompaniesContext"
import Search from "../../components/UI/Search"

const Categories = () => {

   const { categories, filterCategoryVacancies } = useContext(CompaniesContext)
   const [filteredCategories, setFilteredCategories] = useState([])


   const filterCategories = (searchValue) => {
      const newCategories = categories.filter((category) => category.name.toLowerCase().includes(searchValue.toLowerCase()))
      setFilteredCategories(newCategories)
   }
   const updateCategories = filteredCategories.length ? filteredCategories : categories


   return (
      <>
         <ScrollBar>
            <div>
               <Search filterArr={filterCategories} title={'Search for categories'} />
               {updateCategories.map(category => (
                  <Link key={category.id} to='/vacancies' onClick={() => filterCategoryVacancies(category.id, category.name)}>
                     <Category {...category} />
                  </Link>))}
            </div>
         </ScrollBar>
         <Outlet />
      </>
   )
}

export default Categories