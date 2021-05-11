import { SignInButton } from '../SignInButton/indesx'
import styles from './styles.module.scss'


export function Header(){
return(
  <header className={styles.headercontainer}>
    <div className={styles.headerContent}>
     <img src="/images/logo.svg" alt="ig.news"/>
     <nav>
       <a className={styles.active} >Home</a>
       <a >Posts</a>
     </nav>
    <SignInButton/>

    </div>
  </header>
)
}

