import { useContext, useEffect, useState } from "react"
import Heart from "../../assets/icons/Heart"
import View from "../../assets/icons/View"
import Subsection from "../../components/UI/Subsection"
import { createDateString } from "../../utils/utils"
import styles from './Vacancy.module.css'
import CompaniesContext from "../../context/CompaniesContext"
import ModeContext from "../../context/ModeContext"


const Vacancy = ({ img, title, subtitle, view, created_at, like, id }) => {
   const { changeLikeVacancy } = useContext(CompaniesContext)

   const { isLight } = useContext(ModeContext)

   const clickHandler = (e) => {
      e.preventDefault()
      e.stopPropagation()
      changeLikeVacancy(id, like)
   }

   const activeLikeStyle = like ? styles.active : styles.like
   const modeStyle = isLight ? '' : styles.dark


   const date = createDateString(created_at)

   return (
      <div className={`${styles.vacancy} ${modeStyle}`}>
         <Subsection
            titleBig={title}
            titleLit={subtitle}
            img={img}
            rem={"3.6rem"} >
            <div className={styles.info}>
               <div className={`${styles.view} ${modeStyle}`}>
                  <View />
                  <span>{view}</span>
               </div>
               <div className={`${styles.date} ${modeStyle}`}>
                  <span>{date}</span>
               </div>
               <div onClick={clickHandler} className={`${activeLikeStyle} ${modeStyle}`}>
                  <Heart />
               </div>
            </div>
         </Subsection>
      </div>
   )
}

export default Vacancy