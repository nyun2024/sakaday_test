import React from 'react'
import styles from './NextQuizButton.module.scss'

const NextQuizButton = ({ children, clickBtn, disabled }) => {
  return (
    <div className={styles.nextQuizButtonWrap}>
      <button type="button" className={styles.nextQuizButton} onClick={clickBtn} disabled={disabled}>
        {children}
      </button>
    </div>
  )
}

export default NextQuizButton
