import Subsection from '../../components/UI/Subsection'
import styles from './Company.module.css'


const Company = ({ img, title, subtitle, latestVacancies }) => {
   return (
      <div className={styles.company}>
         <Subsection
            titleBig={title}
            titleLit={subtitle}
            img={img}
            rem={"3.6rem"} >
            <div className={styles.count}>
               {latestVacancies?.length} vacancies
            </div>
         </Subsection>
      </div>
   )
}

export default Company