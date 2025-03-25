import React from 'react'
import styles from './NextQuizButton.module.scss'

const NextQuizButton = ({ children, clickBtn }) => {
  return (
    <button type="button" className={styles.nextQuizButton} onClick={clickBtn}>
      {children}
    </button>
  )
}

export default NextQuizButton
