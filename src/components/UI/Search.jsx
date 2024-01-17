
import { useContext, useEffect, useState } from 'react'
import SearchIcon from '../../assets/icons/SearchIcon'
import styles from './Search.module.css'
import ModeContext from '../../context/ModeContext'

const Search = ({ title, filterArr }) => {
   const [searchValue, setSearchValue] = useState('')
   const { isLight } = useContext(ModeContext)


   const changeHandler = (e) => {
      setSearchValue(e.target.value)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      filterArr(searchValue)
   }

   useEffect(() => {
      const timer = setTimeout(() => {
         filterArr(searchValue)
      }, 1000)
      return () => {
         clearTimeout(timer)
      }
   }, [searchValue])


   const modeStyle = isLight ? '' : styles.dark


   return (
      <div className={`${styles.search} ${modeStyle}`}>
         <form onSubmit={submitHandler}>
            <input type="text"
               onChange={changeHandler}
               value={searchValue}
               placeholder={title} />
            <button type='submit'>
               <SearchIcon />
            </button>
         </form>
      </div>
   )
}

export default Search