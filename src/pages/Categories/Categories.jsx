import { Outlet, Link } from "react-router-dom"
import ScrollBar from "../../components/UI/ScrollBar"
import Category from "./Category"
import styles from './Categories.module.css'
import { useContext } from "react"
import CompaniesContext from "../../context/CompaniesContext"
import ModeContext from "../../context/ModeContext"

const Categories = () => {

   const { categories } = useContext(CompaniesContext)
   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark


   return (
      <>
         <ScrollBar>
            <div className={`${styles.categories} ${modeStyle}`}>
               {categories.map(category => <Link to='.'><Category {...category} /></Link>)}
            </div>
         </ScrollBar>
         <Outlet />
      </>
   )
}

export default Categories