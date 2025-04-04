import React from 'react'
import styles from './ProgressBar.module.scss'

const ProgressBar = ({ totalNum, currentNum }) => {
  const progress = (currentNum / totalNum) * 100

  return (
    <div className={styles.progressbarWrap}>
      <div className={styles.progressbar}>
        <div className={styles.activeBar} style={{ width: `${progress}%` }}></div>
      </div>
      <div className={styles.sakamotoIcon} style={{ left: `calc(${progress}% - 24px)` }}></div>
    </div>
  )
}

export default ProgressBar
