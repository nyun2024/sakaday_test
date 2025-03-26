import React from 'react'
import styles from './NextQuizButton.module.scss'

const NextQuizButton = ({ children, clickBtn }) => {
  return (
    <div className={styles.nextQuizButtonWrap}>
      <button type="button" className={styles.nextQuizButton} onClick={clickBtn}>
        {children}
      </button>
    </div>
  )
}

export default NextQuizButton
