import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAppStatus } from '../../redux/actions'
import Logo from '../../components/logo/logo.component'
import { ReactComponent as Crown } from '../../assets/svg/crown.svg'
import styles from './not-found.module.css'

const NotFound = ({ setAppStatus }) => {
   useEffect(() => {
      setAppStatus('not-found')
      return () => setAppStatus(null)
   }) //eslint-disable-line

   return (
      <div className={styles.wrapper}>
         <Link to='/home' className={styles.link_logo}>
            <Logo />
         </Link>
         <div className={styles.background}>
            <div className='container'>
               <div className={styles.row}>
                  <div>
                     <h1 className={styles.title}>
                        Страница
                        <br />
                        не существует
                     </h1>
                     <span>ошибка 404</span>
                  </div>
                  <Crown />
               </div>
            </div>
         </div>
         <div className='article container'>
            <p>
               Запрашиваемая вами страница была удалена либо никогда не
               существовала. Извините за неудобства.
            </p>
            <Link to='/' className={styles.link}>
               Вернуться на главную
            </Link>
         </div>
      </div>
   )
}

export default connect(null, { setAppStatus })(NotFound)
