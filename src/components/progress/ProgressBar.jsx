import React from 'react'
import styles from './ProgressBar.module.scss'

const ProgressBar = ({ totalNum, currentNum }) => {
  const progress = (currentNum / totalNum) * 100

  return (
    <div className={styles.progressbarWrap}>
      <div className={styles.progressbar}>
        <div className={styles.activeBar} style={{ width: `${progress}%` }}></div>
      </div>
      <span>
        {currentNum} / {totalNum}
      </span>
    </div>
  )
}

export default ProgressBar
