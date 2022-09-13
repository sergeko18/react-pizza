import React from 'react'
import styles from './NotFound.module.scss'
import notFound from '../../assets/img/404.jpg'

const NotFound404: React.FC = () => {
  return (
    <div className={styles.content}>
      <img src={notFound} className={styles.contentItem} alt="404" />
      <h3 className={styles.text}> Oops Pizz-z-za! Page not found!</h3>
    </div>
  )
}

export default NotFound404