import styles from './VacancyDetail.module.css'
import View from '../../../assets/icons/View'
import Heart from '../../../assets/icons/Heart'

import Subsection from '../../UI/Subsection'
import VacancyInfo from './VacancyInfo'
import VacancyNavigation from './VacancyNavigation'
import { Outlet, useParams } from 'react-router-dom'
import ScrollBar from '../../UI/ScrollBar'
import { useContext, useEffect, useState } from 'react'
import CompaniesContext from '../../../context/CompaniesContext'
import ModeContext from '../../../context/ModeContext'


const VacancyDetail = () => {
   const { view, vacancy, fetchSlugVacancyData, changeLikeVacancy } = useContext(CompaniesContext)


   const { slug } = useParams()


   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark


   useEffect(() => {
      fetchSlugVacancyData(slug)
   }, [])

   if (!vacancy) {
      return <h1>Loading</h1>
   }



   const { id, image, company_name, like } = vacancy

   const clickHandler = () => {
      changeLikeVacancy(id, like)
   }

   const activeLikeStyle = like ? styles.active : styles.like


   return (
      <ScrollBar>
         <div className={`${styles.detail} ${modeStyle}`}>
            <div className={styles.header}>
               <Subsection
                  titleLit={company_name}
                  img={image}
                  rem={"2.8rem"}  >
                  <div className={styles.info}>
                     <div className={styles.view}>
                        <View />
                        <span>{view}</span>
                     </div>
                     <div onClick={clickHandler} className={activeLikeStyle}>
                        <Heart />
                     </div>
                  </div>
               </Subsection>
            </div>
            <VacancyInfo isLight={isLight} />
            <VacancyNavigation slug={slug} isLight={isLight} />
         </div>
         <Outlet />
      </ScrollBar>
   )
}

export default VacancyDetail