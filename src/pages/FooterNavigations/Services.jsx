import { Link } from 'react-router-dom'
import ScrollBar from '../../components/UI/ScrollBar'
import styles from './Services.module.css'
import { useContext } from 'react'
import ModeContext from '../../context/ModeContext'

const Services = () => {
   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark

   return (
      <ScrollBar>
         <div className={`${styles.services} ${modeStyle}`}>
            <h2>Services</h2>
            <ul>
               <li className={`${styles.item} ${modeStyle}`}>
                  <div>
                     <h3>Single vacancy</h3>
                     <p>Duration of one month</p>
                  </div>
                  <p>25 AZN</p>
               </li>
               <li className={`${styles.item} ${modeStyle}`}>
                  <div>
                     <h3>5 and more posts</h3>
                     <p>20% of discount is applicable for 5 and more posts in one day</p>
                  </div>
                  <p>20 AZN (5x)</p>
               </li>
               <li className={`${styles.item} ${styles.premium} ${modeStyle}`}>
                  <div>
                     <h3>Premium</h3>
                     <p>
                        Premium post will distinct among other posts with special Premium mark, which will appear on top of website job listing during one day. After expiration of the 1-day period, post will be moved to the regular list, where it will remain until expiration of application deadline. Premium post will benefit from free of charge of Story posting service.
                     </p>
                  </div>
                  <p>40 AZN</p>
               </li>
            </ul>
            <div className={`${styles.info} ${modeStyle}`}><h2>Posting Job announcement</h2>

               <p>To post a Job Announcement please send it via e-mail <br /> to <a href="mailto:info@jobsearch.az">info@jobsearch.az</a> preferably in-text only format (MS Word). We reserve the right to correct minor grammatical errors and slightly reformat the text to make it more reader-friendly.</p>

               <p>We also reserve the right to deny service to the employers that repeatedly fail or are unable to meet fair employment standards and to those involved in illegal operations.</p>

               <p>Announcement without deadlines will be maintained on the website for the maximum period of one month. This term can be extended upon requested payment of a full-service fee.</p>

               <p>Any employer willing not to publicize its title and contact information should anyway provide us with such details, which will be kept confidential.</p>

               <p>For posting vacancy you may also <Link to="/contact-us">Contact Us</Link></p>

               <h2>Posting advertisement banner</h2>

               <p>Our fees for placing advertisement banner depend on size and location on our web. Please <Link to="/contact-us">Contact Us</Link> for additional inquiries.</p>

               <h2>Posting Story of Job ads</h2>

               <p>This special value-added function is developed for our valuable clients. Your Story will be visible in&nbsp;all&nbsp;sections&nbsp;of left menu, which in turn, will grant you more audience and enhance your self-branding amongst jobseekers. Service fee for post appearance in Story is additional 5 AZN.</p>

               <h2>Payment for services&nbsp;</h2>

               <p>JobSearch.az is officially registered as a company. Payments are made via bank transfer and all taxes are paid accordingly. We can accept other type of payment (cash, card etc.) as well and provide proper documentation in compliance with local legislation. Cooperation starts upon signing service agreement. For new clients we usually ask payment in advance, after certain duration of cooperation we may switch to post-paid mode.&nbsp;</p>
            </div>
         </div>
      </ScrollBar>
   )
}

export default Services