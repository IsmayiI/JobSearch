import { useContext, useEffect, useState } from 'react'
import styles from './Favorites.module.css'
import CompaniesContext from '../../context/CompaniesContext'
import ScrollBar from '../../components/UI/ScrollBar'
import Vacancy from '../Vacancies/Vacancy'
import { Link, useNavigate } from 'react-router-dom'
import Heart from '../../assets/icons/Heart'
import ModeContext from '../../context/ModeContext'

const Favorites = () => {
   const { favorites } = useContext(CompaniesContext)
   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark


   const favoritesContent = (
      <div className={styles.content}>
         <div className={styles.image}>
            <Heart />
         </div>
         <h3>You do not have any favorite vacancies</h3>
         <Link to='/vacancies'>View vacancies</Link>
      </div>
   )

   return (
      <ScrollBar>
         <div className={`${styles.favorites} ${modeStyle}`}>
            <h2>My favorite vacancies</h2>
            {favorites.length === 0 && favoritesContent}
            {favorites.map(vacancy => (
               <Link to={`/vacancies/${vacancy.slug}`} key={vacancy.id}>
                  <Vacancy img={vacancy.image}
                     title={vacancy.name}
                     subtitle={vacancy.company_name}
                     view={vacancy.view}
                     created_at={vacancy.created_at}
                     like={vacancy.like}
                     id={vacancy.id} />
               </Link>
            ))}
         </div>
      </ScrollBar>

   )
}

export default Favorites