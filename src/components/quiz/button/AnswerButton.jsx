import React from 'react'
import styles from './AnswerButton.module.scss'

const AnswerButton = ({ value, disabled, name, onSendData }) => {
  const clickAnswer = (e) => {
    onSendData(e.target.value) // 부모로 값 전달
  }

  return (
    <label className={styles.answerButton}>
      <input type="radio" className={styles.inputRadio} value={value} name={name} disabled={disabled} onChange={clickAnswer} />
      <div className={styles.customRadio}>
        <span className={styles.iconCheck}></span>
        <div className={styles.answer}>{value}</div>
      </div>
    </label>
  )
}

export default AnswerButton
