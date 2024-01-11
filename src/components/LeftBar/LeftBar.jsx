import { useContext, useState } from 'react'
import logoImg from '../../assets/imgs/logo.png'
import ModeButton from '../UI/ModeButton'
import ScrollBar from '../UI/ScrollBar'
import Footer from './Footer'
import styles from './LeftBar.module.css'
import Menu from './Menu'
import ModeContext from '../../context/ModeContext'
import { Link } from 'react-router-dom'

const LeftBar = () => {
   const { isLight } = useContext(ModeContext)
   const [isSideBarOpen, setIsSideBarOpen] = useState(false)

   const clickHandler = () => {
      setIsSideBarOpen(prev => !prev)
   }


   return (
      <ScrollBar>
         <div className={styles.leftBar}>
            <header className={styles.header}>
               <Link to='vacancies'>
                  <img src={logoImg} alt="logo" />
               </Link>
               <div onClick={clickHandler} className={styles.burger}>
                  <span></span>
                  <span></span>
               </div>
            </header>
            <main>
               <Menu isToogleBar={clickHandler} isOpen={isSideBarOpen} isLight={isLight} />
               <div className={styles.action}>
                  <ModeButton />
               </div>
            </main>
            <Footer isLight={isLight} />
         </div>
      </ScrollBar>
   )
}

export default LeftBar