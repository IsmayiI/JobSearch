import React, { useEffect, useState } from 'react'

const ModeContext = React.createContext({
   isLight: true,
   onToogleMode: () => { }
})


export const ModeContextProvider = (props) => {


   const defaultOrStorage = JSON.parse(localStorage.getItem('isLight')) ?? true

   const [isLight, setIsLight] = useState(defaultOrStorage)


   useEffect(() => {
      if (isLight) {
         document.body.style.cssText = `color: #000;
             background-color: #fff;`
      } else {
         document.body.style.cssText = `color: #fff;
             background-color: #262626`
      }
      localStorage.setItem('isLight', JSON.stringify(isLight))
   }, [isLight])


   const onToogleMode = (value) => {
      setIsLight(value)
   }



   return (
      <ModeContext.Provider value={{
         isLight,
         onToogleMode
      }}>
         {props.children}
      </ModeContext.Provider>
   )
}

export default ModeContext