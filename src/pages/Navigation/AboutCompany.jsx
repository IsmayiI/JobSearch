import styles from './AboutCompany.module.css'
import mapImg from '../../assets/imgs/map.webp'
import { useContext } from 'react'
import CompaniesContext from '../../context/CompaniesContext'
import ModeContext from '../../context/ModeContext'

const AboutCompany = () => {

   const { company } = useContext(CompaniesContext)
   const { isLight } = useContext(ModeContext)
   const { description, location, phone, website } = company

   const modeStyle = isLight ? '' : styles.dark


   return (
      <div className={`${styles.about} ${modeStyle}`}>
         <h4>About</h4>
         <p>
            {description}
         </p>
         <div className={styles.info}>
            <div className={styles.map}>
               <img src={mapImg} alt="map" />
            </div>
            <div className={styles.contact}>
               {location && <>
                  <h4>Address</h4>
                  <p>{location}</p>
               </>}
               <h4>Phone number</h4>
               <p>
                  <a href={`tel://${phone}`}>{phone}</a>
               </p>
               <h4>Website</h4>
               <p>
                  <a className={styles.website} target="_blank" href={`https://${website}`}>{website}</a>
               </p>
            </div>
         </div>
      </div>
   )
}

export default AboutCompany