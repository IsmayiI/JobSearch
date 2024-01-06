import ScrollBar from "../../components/UI/ScrollBar"
import Company from "./Company"

import { Outlet, Link, useParams } from "react-router-dom"
import CompaniesContext from "../../context/CompaniesContext"
import { useContext } from "react"

const Companies = () => {
   const { companies, setActiveCompany } = useContext(CompaniesContext)
   const { slug } = useParams()

   const clickHandler = (slug) => {
      setActiveCompany(slug)
   }


   return (
      <>
         <ScrollBar>
            <div>
               {companies.map(company => (
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

