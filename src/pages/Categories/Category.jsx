import Subsection from '../../components/UI/Subsection'
import styles from './Category.module.css'


const Category = ({ image, name, vacancies }) => {


   return (
      <div className={styles.category}>
         <Subsection
            titleBig={name}
            titleLit={`${vacancies.length} vacancies`}
            svg={image}
            rem={"4.2rem"} >
            <div className={styles.count}>
               1 companies
            </div>
         </Subsection>
      </div>
   )
}

export default Category