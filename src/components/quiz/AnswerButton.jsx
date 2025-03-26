import React from 'react'
import styles from './AnswerButton.module.scss'
// import classNames from 'classnames'

const AnswerButton = ({ value, num, disabled, name, onSendData }) => {
  const clickAnswer = (e) => {
    onSendData(e.target.value) // 부모로 값 전달
  }
  return (
    <label className={styles.answerButton}>
      <input type="radio" value={value} name={name} disabled={disabled} onChange={clickAnswer} />
      <span>
        {num}. {value}
      </span>
    </label>
  )
}

export default AnswerButton
