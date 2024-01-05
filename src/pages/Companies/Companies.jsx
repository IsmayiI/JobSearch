import ScrollBar from "../../components/UI/ScrollBar"
import Company from "./Company"

import styles from './Companies.module.css'
import { Outlet, Link, useParams } from "react-router-dom"
import CompaniesContext from "../../context/CompaniesContext"
import { useContext } from "react"
import ModeContext from "../../context/ModeContext"

const Companies = () => {
   const { companies, setActiveCompany } = useContext(CompaniesContext)
   const { isLight } = useContext(ModeContext)
   const { slug } = useParams()

   const clickHandler = (slug) => {
      setActiveCompany(slug)
   }

   const modeStyle = isLight ? '' : styles.dark

   return (
      <>
         <ScrollBar>
            <div className={`${styles.companies} ${modeStyle}`}>
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

