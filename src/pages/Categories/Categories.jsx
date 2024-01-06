import { Outlet, Link } from "react-router-dom"
import ScrollBar from "../../components/UI/ScrollBar"
import Category from "./Category"
import { useContext } from "react"
import CompaniesContext from "../../context/CompaniesContext"

const Categories = () => {

   const { categories } = useContext(CompaniesContext)


   return (
      <>
         <ScrollBar>
            <div>
               {categories.map(category => <Link to='.'><Category {...category} /></Link>)}
            </div>
         </ScrollBar>
         <Outlet />
      </>
   )
}

export default Categories