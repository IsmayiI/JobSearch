import styles from './NavigationLinks.module.css'

const NavigationLinks = (props) => {

   return (
      <nav className={styles.nav}>
         <ul>
            {props.children}
         </ul>
      </nav>
   )
}

export default NavigationLinks