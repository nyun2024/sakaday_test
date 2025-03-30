import React from 'react'
import styles from './QuizStyle.module.scss'

const InputQuiz = ({ num, question, onSendData }) => {
  const handleInputChange = (e) => {
    onSendData(e.target.value)
  }
  return (
    <>
      <div className={styles.question}>
        {num}. {question}
      </div>
      <div className={styles.inputWrap}>
        <input type="text" onChange={handleInputChange} placeholder="답을 입력해주세요." />
      </div>
    </>
  )
}

export default InputQuiz
