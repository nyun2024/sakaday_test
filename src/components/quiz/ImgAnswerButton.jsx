import React from 'react'
import styles from './ImgAnswerButton.module.scss'
import classNames from 'classnames'

const ImgAnswerButton = ({ value, disabled, name, img, onSendData, disableText }) => {
  const clickAnswer = (e) => {
    onSendData(e.target.value) // 부모로 값 전달
  }

  return (
    <label className={styles.ImgAnswerButton}>
      <input type="radio" className={styles.inputRadio} value={value} name={name} disabled={disabled} onChange={clickAnswer} />
      <div className={styles.customRadio}>
        <span className={styles.iconCheck}></span>
        <img src={img} />
        <div className={classNames(styles.answer, disableText ? styles.disableText : '')}>{value}</div>
      </div>
    </label>
  )
}

export default ImgAnswerButton
