import React from 'react'
import styles from './QuizStyle.module.scss'
import { useState } from 'react'

const MultipleQuiz = ({ num, question, answers, onSendData }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  // 체크박스 변경 이벤트 핸들러
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target

    setSelectedOptions((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)))

    if (onSendData) {
      onSendData(checked ? [...selectedOptions, value] : selectedOptions.filter((item) => item !== value))
    }
  }
  return (
    <>
      <div className={styles.question}>
        {num}. {question}
      </div>
      <div className={styles.answers}>
        {answers.map((answer) => (
          <label key={answer}>
            <input type="checkbox" value={answer} checked={selectedOptions.includes(answer)} onChange={handleCheckboxChange} />
            {answer}
          </label>
        ))}
      </div>
    </>
  )
}

export default MultipleQuiz
