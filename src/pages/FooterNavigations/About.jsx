import { useContext } from 'react'
import ScrollBar from '../../components/UI/ScrollBar'
import styles from './About.module.css'
import ModeContext from '../../context/ModeContext'

const About = () => {

   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark


   return (
      <ScrollBar>
         <div className={`${styles.about} ${modeStyle}`}>
            <h2>About</h2>
            <div className={`${styles.banner} ${modeStyle}`}>
               <div>
                  <h3>JobSearch.az</h3>
                  <p>is all about job opportunities in Azerbaijan.</p>
               </div>
            </div>
            <p>Launched in 2005, we have been rated as one of the most popular nationwide job searching website in Azerbaijan for years and keep that rating until now.</p>

            <p>We strive to put job seekers first, giving them free access to search for jobs and research companies. Every day, we connect thousands of people to new opportunities.&nbsp;</p>

            <p>We also think about our valuable client-companies and support their self-branding in labor market as well as finding right candidates for their team. Among clients you can find international and local oil and non-oil companies, governmental and financial institutions, non-profit organizations, medium and small entrepreneurs and much more.&nbsp;</p>

            <p>List of website subscribers include thousands of clients and tens of thousands job seeking users.</p>
         </div>

      </ScrollBar>
   )
}

export default About