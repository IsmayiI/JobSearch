import { useContext } from 'react'
import Subsection from '../../components/UI/Subsection'
import styles from './Category.module.css'
import ModeContext from '../../context/ModeContext'


const Category = ({ image, name, vacancies }) => {

   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark



   return (
      <div className={`${styles.category} ${modeStyle}`}>
         <Subsection
            titleBig={name}
            titleLit={`${vacancies.length} vacancies`}
            svg={image}
            rem={"4.2rem"} >
            <div>
               {vacancies.length} companies
            </div>
         </Subsection>
      </div>
   )
}

export default Category