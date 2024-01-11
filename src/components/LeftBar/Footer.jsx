

import HeartIcon from '../../assets/icons/HeartIcon'
import { Link, NavLink } from 'react-router-dom'
import styles from './Footer.module.css'
import { useContext } from 'react'
import CompaniesContext from '../../context/CompaniesContext'

const Footer = ({ isLight }) => {
   const setActiveLink = ({ isActive }) => isActive ? styles.active : ''
   const modeStyle = isLight ? '' : styles.dark

   const { favorites } = useContext(CompaniesContext)


   return (
      <footer className={`${styles.footer} ${modeStyle}`}>
         <nav className={styles.nav}>
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