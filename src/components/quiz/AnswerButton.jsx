import React from 'react'
import styles from './AnswerButton.module.scss'
// import classNames from 'classnames'

const AnswerButton = ({ value, num, disabled, name }) => {
  const clickAnswer = (e) => {
    console.log(e.target.value)
  }
  return (
    <label className={styles.answerButton}>
      <input type="radio" value={value} name={name} disabled={disabled} onClick={clickAnswer} />
      <span>
        {num}. {value}
      </span>
    </label>
  )
}

export default AnswerButton
