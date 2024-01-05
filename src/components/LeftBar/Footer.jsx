import { Link, NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = ({ isLight }) => {

   const modeStyle = isLight ? '' : styles.dark


   return (
      <footer className={`${styles.footer} ${modeStyle}`}>
         <nav>
            <ul>
               <li><Link to='about'>About</Link></li>
               <li><Link to='services'>Services</Link></li>
               <li><Link to='contact-us'>Contact Us</Link></li>
            </ul>
         </nav>
         <span>© JobSearch.az 2006—2023</span>
      </footer>
   )
}

export default Footer