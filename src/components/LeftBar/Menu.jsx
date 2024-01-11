import styles from './Menu.module.css'
import logoImg from '../../assets/imgs/logo.png'
import CaseIcon from '../../assets/icons/CaseIcon'
import CategoryIcon from '../../assets/icons/CategoryIcon'
import CompanyIcon from '../../assets/icons/CompanyIcon'
import HeartIcon from '../../assets/icons/HeartIcon'
import { NavLink, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import CompaniesContext from '../../context/CompaniesContext'
import ModeButton from '../UI/ModeButton'
import Footer from './Footer'

const Menu = ({ isLight, isOpen, isToogleBar }) => {
   const setActiveLink = ({ isActive }) => isActive ? styles.active : ''
   const { favorites } = useContext(CompaniesContext)
   const [width, setWidth] = useState(false)


   function handleResize() {
      const windowWidth = window.innerWidth;
      windowWidth <= 1100 ? setWidth(true) : setWidth(false)
   }

   window.addEventListener('resize', handleResize);

   const modeStyle = isLight ? '' : styles.dark


   const subMenuContent = width && (
      <div className={`${styles.subMenu} ${isOpen && styles.active} ${modeStyle}`}>
         <header>
            <Link to='vacancies'>
               <img src={logoImg} alt="logo" />
            </Link>
            <div onClick={isToogleBar} className={styles.close}></div>
         </header>
         <main>
            <span>Your JobSearch</span>
            <ul className={styles.list}>
               <li>
                  <NavLink to='favorites' className={setActiveLink}>
                     <HeartIcon />
                     <span>Favorite</span>
                     <div className={styles.count}>{favorites.length}</div>
                  </NavLink>
               </li>
            </ul>
            <div className={styles.action}>
               <ModeButton />
            </div>
         </main>
         <Footer isLight={isLight} />
      </div>
   )



   return (
      <div className={`${styles.menu} ${modeStyle}`}>
         <div onClick={isToogleBar} className={(width && isOpen) && styles.overlay}></div>
         <nav className={styles.nav}>
            <ul>
               <li>
                  <NavLink to='vacancies' className={setActiveLink} >
                     <CaseIcon />
                     <span>Vacancies</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to='categories' className={setActiveLink}>
                     <CategoryIcon />
                     <span>Categories</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to='companies' className={setActiveLink}>
                     <CompanyIcon />
                     <span>Companies</span>
                  </NavLink>
               </li>
            </ul>
         </nav>

         {subMenuContent || (
            <div className={`${styles.subMenu} ${width && styles.off} ${modeStyle}`}>
               <span>Your JobSearch</span>
               <ul className={styles.list}>
                  <li>
                     <NavLink to='favorites' className={setActiveLink}>
                        <HeartIcon />
                        <span>Favorite</span>
                        <div className={styles.count}>{favorites.length}</div>
                     </NavLink>
                  </li>
               </ul>
            </div>
         )}
      </div>
   )
}

export default Menu