import { useContext } from 'react';
import Clock from '../../../assets/icons/Clock'
import styles from './VacancyInfo.module.css'
import CompaniesContext from '../../../context/CompaniesContext';

const createDeadline = (date) => {
   const createdDate = new Date(date)

   const deadline = new Date(createdDate.setDate(createdDate.getDate() + 30));

   let month = deadline.toLocaleString('en-US', { month: 'long' })
   month = month.slice(0, 3).toLowerCase()

   let day = deadline.getDate()
   day = day < 10 ? `0${day}` : day

   const year = deadline.getFullYear()

   return `Deadline ${day} ${month} ${year}`
}


const VacancyInfo = () => {

   const { vacancy } = useContext(CompaniesContext)
   const { name, created_at, industry } = vacancy


   const deadline = createDeadline(created_at)

   return (
      <div className={styles.information}>
         <h1>{name}</h1>
         <div>
            <Clock />
            <span>{deadline}</span>
         </div>
         <a href="#">{industry}</a>
      </div>
   )
}

export default VacancyInfo