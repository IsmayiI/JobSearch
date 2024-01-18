import { useContext, useState, useEffect } from 'react';
import Clock from '../../../assets/icons/Clock'
import styles from './VacancyInfo.module.css'
import CompaniesContext from '../../../context/CompaniesContext';
import { Link } from 'react-router-dom';

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


const VacancyInfo = ({ isLight }) => {
   const [width, setWidth] = useState(false)


   useEffect(() => {
      handleResize()
   }, [])

   function handleResize() {
      const windowWidth = window.innerWidth;
      windowWidth <= 1100 ? setWidth(true) : setWidth(false)
   }

   window.addEventListener('resize', handleResize);

   const { vacancy, filterCategoryVacancies, categories } = useContext(CompaniesContext)
   const { name, created_at, industry } = vacancy

   const modeStyle = isLight ? '' : styles.dark

   const clickHandler = () => {
      const category = categories.find(category => category.name === industry)
      filterCategoryVacancies(category.id, category.name)
   }

   const deadline = createDeadline(created_at)

   return (
      <div className={`${styles.information} ${modeStyle}`}>
         <h1>{name}</h1>
         <div>
            <Clock />
            <span>{deadline}</span>
         </div>
         <Link to={width ? '/vacancies' : '#'} onClick={clickHandler}>{industry}</Link>
      </div>
   )
}

export default VacancyInfo