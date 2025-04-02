import React, { useState, useEffect } from 'react'
import styles from './QuizStyle.module.scss'

const MultipleQuiz = ({ num, question, answers, onSendData }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [pointerDisabled, setPointerDisabled] = useState(false)

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

  const handleClick = () => {
    setPointerDisabled(true)
    setTimeout(() => setPointerDisabled(false), 300)
  }

  return (
    <>
      <div className={styles.question}>
        {num}. {question}
      </div>
      <div className={styles.answers}>
        {answers.map((answer) => (
          <label key={answer}>
            <input
              type="checkbox"
              value={answer}
              checked={selectedOptions.includes(answer)}
              onChange={handleCheckboxChange}
              onClick={handleClick}
              style={{ pointerEvents: pointerDisabled ? 'none' : 'auto' }}
            />
            {answer}
          </label>
        ))}
      </div>
    </>
  )
}

export default MultipleQuiz
