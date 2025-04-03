import React from 'react'
import styles from './QuizStyle.module.scss'

const InputQuiz = ({ num, question, onSendData }) => {
  const handleInputChange = (e) => {
    onSendData(e.target.value)
  }
  return (
    <div className={styles.quizContainer}>
      <div className={styles.question}>
        {num}. {question}
      </div>
      <div className={styles.inputWrap}>
        <input type="text" className={styles.input} onChange={handleInputChange} placeholder="답을 입력해주세요." />
      </div>
    </div>
  )
}

export default InputQuiz
