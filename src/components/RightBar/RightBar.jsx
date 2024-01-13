import styles from './RightBar.module.css'
import Statistic from './Statistic'
import ScrollBar from '../UI/ScrollBar'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import { useContext } from 'react'
import ModeContext from '../../context/ModeContext'


const RightBar = () => {
   const { pathname } = useLocation()
   let urls = ['/', '/vacancies', '/companies', '/categories', '/favorites', '/about', '/services', '/contact-us']
   let path = urls.find(url => url === pathname) && '*'



   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark

   return (
      <>
         <div className={`${styles.rightBar} ${modeStyle}`}>
            {path && <ScrollBar>
               <Routes>
                  <Route path={path} element={<Statistic />} />
               </Routes>
            </ScrollBar>}
         </div>
      </>
   )
}

export default RightBar