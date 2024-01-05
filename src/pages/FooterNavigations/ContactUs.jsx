import ScrollBar from '../../components/UI/ScrollBar'
import styles from './ContactUs.module.css'

const ContactUs = () => {
   return (
      <ScrollBar>
         <div className={styles.contact}>
            <h2>Contact us</h2>
            <div className={styles.item}>
               <h3>Address</h3>
               <ul>
                  <li><a>8 November avenue, Azure Business Center, 18 Floor. Baku, AZ 1025, Azerbaijan.</a></li>
               </ul>
               <div className={styles.map}>
                  <iframe data-v-9d588456="" width="100%" height="260" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=40.37855161295164,49.87445802697999&amp;hl=en&amp;z=14&amp;output=embed"></iframe>
               </div>
            </div>
            <div className={styles.item}>
               <h3>Telephone</h3>
               <ul>
                  <li><a href="tel:994124345030">+994 12 434 50 30</a></li>
                  <li><a href="tel:994124886491">+994 12 488 64 91</a></li>
                  <li><a href="tel:994124886492">+994 12 488 64 92</a></li>
               </ul>
            </div>
            <div className={styles.item}>
               <h3>Mobile</h3>
               <ul>
                  <li><a href="tel:994502056620">+994 50 205 66 20</a></li>
                  <li><a href="tel:994502089025">+994 50 208 90 25</a></li>
               </ul>
            </div>
            <div className={styles.item}>
               <h3>E-mail</h3>
               <ul>
                  <li><a href="mailto:info@jobsearch.az">info@jobsearch.az</a></li>
               </ul>
            </div>
         </div>
      </ScrollBar>
   )
}

export default ContactUs