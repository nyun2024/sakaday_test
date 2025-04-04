import React from 'react'
import styles from './NextQuizButton.module.scss'
import classNames from 'classnames'

const NextQuizButton = ({ children, clickBtn, disabled, className }) => {
  return (
    <div className={classNames(styles.nextQuizButtonWrap, className)}>
      <button type="button" className={styles.nextQuizButton} onClick={clickBtn} disabled={disabled}>
        {children}
      </button>
    </div>
  )
}

export default NextQuizButton
