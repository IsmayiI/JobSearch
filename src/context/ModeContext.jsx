import React, { useState } from 'react'

const ModeContext = React.createContext({
   isLight: true,
   onToogleMode: () => { }
})


export const ModeContextProvider = (props) => {

   const [isLight, setIsLight] = useState(true)

   const onToogleMode = () => {
      setIsLight(prevMode => !prevMode)
   }

   if (isLight) {
      document.body.style.cssText = `color: #000;
       background-color: #fff;`
   } else {
      document.body.style.cssText = `color: #fff;
       background-color: #262626`
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