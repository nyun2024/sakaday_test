import React, { useState, useEffect } from 'react'
import styles from './QuizStyle.module.scss'

const MultipleQuiz = ({ num, question, answers, onSendData }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  // 체크박스 변경 이벤트 핸들러
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target
    setSelectedOptions((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)))
  }

  // 선택 옵션이 변경될 때만 `onSendData` 실행
  useEffect(() => {
    if (onSendData) {
      onSendData(selectedOptions)
    }
  }, [selectedOptions, onSendData])

  return (
    <>
      <div className={styles.question}>
        {num}. {question}
      </div>
      <div className={styles.answerArea}>
        {answers.map((answer) => (
          <label key={answer} className={styles.multipleAnswerBtn}>
            <input type="checkbox" className={styles.inputRadio} value={answer} checked={selectedOptions.includes(answer)} onChange={handleCheckboxChange} />
            <div className={styles.customRadio}>
              <span className={styles.iconCheck}></span>
              <div className={styles.answer}>{answer}</div>
            </div>
          </label>
        ))}
      </div>
    </>
  )
}

export default MultipleQuiz
