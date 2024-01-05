import styles from './RightBar.module.css'
import Statistic from './Statistic'
import ScrollBar from '../UI/ScrollBar'
import { Route, Routes, useLocation } from 'react-router-dom'


const RightBar = () => {
   const { pathname } = useLocation()
   let urls = ['/', '/vacancies', '/companies', '/categories', '/favorites', '/about', '/services', '/contact-us']
   let path = urls.find(url => url === pathname) && '*'

   return (
      <>
         {path && <ScrollBar>
            <div className={styles.rightBar}>
               <Routes>
                  <Route path={path} element={<Statistic />} />
               </Routes>
            </div>
         </ScrollBar>}
      </>
   )
}

export default RightBar