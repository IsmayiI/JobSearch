import React, { useCallback, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'

const defaultState = {
   companies: [],
   vacancies: [],
   favorites: [],
   categories: [],
   company: null,
   vacancy: null,
   view: null,
   setActiveCompany: (slug) => { },
   fetchData: () => { },
   fetchSlugCompanyData: (slug) => { },
   fetchSlugVacancyData: (slug) => { },
   changeViewVacancy: () => { },
   changeLikeVacancy: () => { },
}

const CompaniesContext = React.createContext(defaultState)

const reducerFunc = (state, action) => {
   switch (action.type) {
      case 'SET COMPANIES': {
         let updateCompanies
         let updateCompany = state.company
         if (state.vacancies.length) {
            updateCompanies = action.companies.map(company => {
               const matchingLatestVacancies = state.vacancies.filter(vacancy => vacancy.company_name === company.name);
               const latestVacancies = company.latest_vacancies ? [...company.latest_vacancies, ...matchingLatestVacancies] : matchingLatestVacancies;

               return { ...company, latest_vacancies: latestVacancies };
            });
         }

         if (state.company) {
            updateCompany = updateCompanies.find(company => company.id === state.company.id)
         }


         return (
            {
               ...state,
               companies: updateCompanies ? updateCompanies : action.companies,
               company: updateCompany
            }
         )
      }


      case 'SET ACTIVE COMPANY':
         const activeCompany = state.companies.find(company => company.slug === action.slug)
         return (
            {
               ...state,
               company: activeCompany
            }
         )


      case 'SET VACANCIES':
         const updateVacancies = action.vacancies.map(vacancy => {
            for (let i = 0; i < state.companies.length; i++) {
               if (vacancy.company_id === state.companies[i].id) {
                  const updateSlug = `${state.companies[i].slug}-${vacancy.slug}`
                  return { ...vacancy, image: state.companies[i].image, company_name: state.companies[i].name, slug: updateSlug }
               }
            }
         })
         return (
            {
               ...state,
               vacancies: updateVacancies
            }
         )

      case 'SET SLUG VACANCY': {
         const updateVacancy = state.vacancies.find(vacancy => vacancy.slug === action.slug)
         const updateCompany = state.companies.find(company => updateVacancy.company_id === company.id)

         return (
            {
               ...state,
               vacancy: updateVacancy,
               company: updateCompany,
               view: updateVacancy.view
            }
         )
      }
      case 'CHANGE VIEW':
         return (
            {
               ...state,
               view: action.view
            }
         )

      case 'SET FAVORITES':
         let updateFavorites = state.vacancies.filter(vacancy => vacancy.like)
         return (
            {
               ...state,
               favorites: updateFavorites
            }
         )

      case 'CHANGE LIKE VACANCY': {
         const updateVacancies = state.vacancies.map(vacancy => {
            if (vacancy.id === action.id) {
               return { ...vacancy, like: action.like }
            }
            return vacancy
         })
         const updateVacancy = updateVacancies.find(vacancy => {
            return vacancy.id === state.vacancy?.id
         })
         return (
            {
               ...state,
               vacancies: updateVacancies,
               vacancy: updateVacancy
            }
         )
      }

      case 'SET CATEGORIES':
         let updateCategories
         if (state.vacancies.length && state.companies.length) {
            updateCategories = action.categories.map(category => {
               for (let i = 0; i < state.vacancies.length; i++) {
                  if (category.name === state.vacancies[i].industry) {
                     const vacancies = action.categories.vacancies ? [...action.categories.vacancies, state.vacancies[i]] : [state.vacancies[i]]
                     return { ...category, vacancies }
                  }
               }
               return category
            })

         }

         return (
            {
               ...state,
               categories: updateCategories || action.categories
            }
         );

   }

   return (
      defaultState
   )
}




export const CompaniesContextProvider = (props) => {
   const [state, dispatchState] = useReducer(reducerFunc, defaultState)

   const { companies, company, vacancies, vacancy, view, favorites, categories } = state


   useEffect(() => {
      fetchData()
   }, [])

   const fetchData = async () => {
      const res = await fetch('https://react-http-7baee-default-rtdb.firebaseio.com/.json')
      const data = await res.json()
      dispatchState({ type: 'SET COMPANIES', companies: data.companies })
      dispatchState({ type: 'SET VACANCIES', vacancies: data.vacancies })
      dispatchState({ type: 'SET FAVORITES', favorites: data.favorites })
      dispatchState({ type: 'SET CATEGORIES', categories: data.categories })
      return data
   }

   const setActiveCompany = (slug) => {
      dispatchState({ type: 'SET ACTIVE COMPANY', slug })

   }

   const fetchSlugCompanyData = async (slug) => {
      const data = await fetchData()
      setActiveCompany(slug)
   }


   const changeViewVacancy = async (id, view) => {
      const res = await fetch(`https://react-http-7baee-default-rtdb.firebaseio.com/vacancies/${id - 1}.json`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ view: view + 1 })
      })
      const data = await res.json()
      dispatchState({ type: 'CHANGE VIEW', view: data.view })
      fetchData()

   }

   const fetchSlugVacancyData = async (slug) => {
      const data = await fetchData()
      dispatchState({ type: 'SET SLUG VACANCY', slug })
   }

   const changeLikeVacancy = async (id, like) => {
      const res = await fetch(`https://react-http-7baee-default-rtdb.firebaseio.com/vacancies/${id - 1}.json`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ like: !like })
      })
      const data = await res.json()
      dispatchState({ type: 'CHANGE LIKE VACANCY', like: data.like, id })
      fetchData()
   }



   return (
      <CompaniesContext.Provider value={{
         companies,
         vacancies,
         favorites,
         categories,
         company,
         vacancy,
         fetchData,
         fetchSlugCompanyData,
         fetchSlugVacancyData,
         setActiveCompany,
         changeViewVacancy,
         changeLikeVacancy,
         view,
      }}>
         {props.children}
      </CompaniesContext.Provider>
   )
}

export default CompaniesContext