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


function App() {

   return (
      <div className="container">
         <Routes>
            <Route path='/' element={<HomeLayout />}>

               <Route index element={<Navigate to='vacancies' />} />

               <Route path='vacancies' element={<Vacancies />}>
                  <Route path=':slug' element={<VacancyDetail />}>
                     <Route index element={<Navigate to='description' />} />
                     <Route path='description' element={<JobDescription />} />
                     <Route path='about' element={<AboutCompany />} />
                     <Route path='vacancies' element={<LatestVacancies />} />
                  </Route>
               </Route>

               <Route path='categories' element={<Categories />} />

               <Route path='companies' element={<Companies />}>
                  <Route path=':slug' element={<CompanyDetail />}>
                     <Route index element={<Navigate to='about' />} />
                     <Route path='about' element={<AboutCompany />} />
                     <Route path='vacancies' element={<LatestVacancies />} />
                  </Route>
               </Route>

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
