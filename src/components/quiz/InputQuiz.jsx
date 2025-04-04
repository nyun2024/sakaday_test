import React from 'react'
import styles from './QuizStyle.module.scss'

const InputQuiz = ({ num, totalNum, question, onSendData }) => {
  const handleInputChange = (e) => {
    onSendData(e.target.value)
  }
  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizNum}>
        <span className={styles.currentNum}>{num < 10 ? '0' + num : num}</span>
        <span className={styles.slash}> / </span>
        {totalNum < 10 ? '0' + totalNum : totalNum}
      </div>
      <div className={styles.question}>{question}</div>
      <div className={styles.inputWrap}>
        <input type="text" className={styles.input} onChange={handleInputChange} placeholder="답을 입력해주세요." />
      </div>
    </div>
  )
}

export default InputQuiz
