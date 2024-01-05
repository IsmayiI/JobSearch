import { useContext } from 'react'
import ModeContext from '../../context/ModeContext'
import styles from './Subsection.module.css'

const Subsection = ({ children, titleBig, titleLit, img, svg, rem }) => {
   const { isLight } = useContext(ModeContext)

   const modeStyle = isLight ? '' : styles.dark

   const imgContent = img && <div style={{
      width: rem,
      height: rem
   }} className={styles.image}>
      <img src={img} alt={titleBig} />
   </div>

   const svgContent = svg && <div style={{
      width: rem,
      height: rem
   }} className={styles.svg}>
      <img src={svg} alt={titleBig} />
   </div>

   return (
      <div className={`${styles.subsection} ${modeStyle}`}>
         <div className={styles.base}>
            {imgContent || svgContent}
            <div className={!imgContent && !svgContent && styles.headers}>
               {titleBig && <h2 className={`${styles.title} ${modeStyle}`}>{titleBig}</h2>}
               <h3>{titleLit}</h3>
            </div>
         </div>
         {children}
      </div>
   )
}

export default Subsection