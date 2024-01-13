import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Vacancies from './pages/Vacancies/Vacancies'
import NotFound from './pages/NotFound/NotFound'
import Categories from './pages/Categories/Categories'
import Companies from './pages/Companies/Companies'
import HomeLayout from './layout/HomeLayout'
import Favorites from './pages/Favorites/Favorites'
import VacancyDetail from './components/RightBar/VacancyDetail/VacancyDetail'
import JobDescription from './pages/Navigation/JobDescription'
import AboutCompany from './pages/Navigation/AboutCompany'
import CompanyDetail from './components/RightBar/CompanyDetail/CompanyDetail'
import LatestVacancies from './pages/Navigation/LatestVacancies'
import About from './pages/FooterNavigations/About'
import Services from './pages/FooterNavigations/Services'
import ContactUs from './pages/FooterNavigations/ContactUs'
import OtherVacancies from './pages/Navigation/OtherVacancies'
import { useEffect, useState } from 'react'


function App() {

   const [width, setWidth] = useState(false)


   useEffect(() => {
      handleResize()
   }, [])

   function handleResize() {
      const windowWidth = window.innerWidth;
      windowWidth <= 1100 ? setWidth(true) : setWidth(false)
   }

   window.addEventListener('resize', handleResize);

   const responsiveVacanciesContent = width && (
      <>
         <Route path='vacancies' element={<Vacancies />} />
         <Route path='vacancies/:slug' element={<VacancyDetail />}>
            <Route index element={<Navigate to='description' />} />
            <Route path='description' element={<JobDescription />} />
            <Route path='about' element={<AboutCompany />} />
            <Route path='vacancies' element={<OtherVacancies />} />
         </Route>
      </>
   )

   const responsiveCompaniesContent = width && (
      <>
         <Route path='companies' element={<Companies />} />
         <Route path='companies/:slug' element={<CompanyDetail />}>
            <Route index element={<Navigate to='about' />} />
            <Route path='about' element={<AboutCompany />} />
            <Route path='vacancies' element={<LatestVacancies />} />
         </Route>
      </>
   )

   return (
      <div className="container">
         <Routes>
            <Route path='/' element={<HomeLayout />}>

               <Route index element={<Navigate to='vacancies' />} />

               {responsiveVacanciesContent || <Route path='vacancies' element={<Vacancies />}>
                  <Route path=':slug' element={<VacancyDetail />}>
                     <Route index element={<Navigate to='description' />} />
                     <Route path='description' element={<JobDescription />} />
                     <Route path='about' element={<AboutCompany />} />
                     <Route path='vacancies' element={<OtherVacancies />} />
                  </Route>
               </Route>}

               <Route path='categories' element={<Categories />} />

               {responsiveCompaniesContent || <Route path='companies' element={<Companies />}>
                  <Route path=':slug' element={<CompanyDetail />}>
                     <Route index element={<Navigate to='about' />} />
                     <Route path='about' element={<AboutCompany />} />
                     <Route path='vacancies' element={<LatestVacancies />} />
                  </Route>
               </Route>}

               <Route path='favorites' element={<Favorites />} />
               <Route path='about' element={<About />} />
               <Route path='services' element={<Services />} />
               <Route path='contact-us' element={<ContactUs />} />


            </Route>

            <Route path='*' element={<NotFound />} />
         </Routes>
      </div >
   )
}

export default App
