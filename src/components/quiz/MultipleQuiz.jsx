import React, { useState, useEffect } from 'react'
import styles from './MultipleQuiz.module.scss'

const MultipleQuiz = ({ num, totalNum, question, answers, onSendData }) => {
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
    <div className={styles.quizContainer}>
      <div className={styles.quizNum}>
        <span className={styles.currentNum}>{num < 10 ? '0' + num : num}</span>
        <span className={styles.slash}> / </span>
        {totalNum < 10 ? '0' + totalNum : totalNum}
      </div>
      <div className={styles.question}>{question}</div>
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
    </div>
  )
}

export default MultipleQuiz
