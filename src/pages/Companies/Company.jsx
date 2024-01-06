import { useContext } from 'react'
import Subsection from '../../components/UI/Subsection'
import styles from './Company.module.css'
import ModeContext from '../../context/ModeContext'


const Company = ({ img, title, subtitle, latestVacancies }) => {

   const { isLight } = useContext(ModeContext)
   const modeStyle = isLight ? '' : styles.dark

   return (
      <div className={`${styles.company} ${modeStyle}`}>
         <Subsection
            titleBig={title}
            titleLit={subtitle}
            img={img}
            rem={"3.6rem"} >
            <div>
               {latestVacancies?.length} vacancies
            </div>
         </Subsection>
      </div>
   )
}

export default Company