import ScrollBar from "../../components/UI/ScrollBar"
import Company from "./Company"

import { Outlet, Link, useParams } from "react-router-dom"
import CompaniesContext from "../../context/CompaniesContext"
import { useContext, useState } from "react"
import Search from "../../components/UI/Search"

const Companies = () => {
   const { companies, setActiveCompany } = useContext(CompaniesContext)
   const [filteredCompanies, setFilteredCompanies] = useState([])
   const { slug } = useParams()

   const clickHandler = (slug) => {
      setActiveCompany(slug)
   }

   const filterVacancies = (searchValue) => {
      const newCompanies = companies.filter((company) => company.name.toLowerCase().includes(searchValue))
      setFilteredCompanies(newCompanies)
   }

   const updateCompanies = filteredCompanies.length ? filteredCompanies : companies


   return (
      <>
         <ScrollBar>
            <div>
               <Search filterArr={filterVacancies} title={'Search for companies'} />
               {updateCompanies.map(company => (
                  <Link onClick={() => clickHandler(company.slug)} key={company.id} to={company.slug}>
                     <Company
                        img={company.image}
                        title={company.name}
                        subtitle={company.subtitle}
                        latestVacancies={company.latest_vacancies} />
                  </Link>
               ))}
            </div>
         </ScrollBar>
         <Outlet />
      </>
   )
}

export default Companies

