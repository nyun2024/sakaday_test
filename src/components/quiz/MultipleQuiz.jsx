import React, { useState, useRef, useEffect } from 'react'
import styles from './MultipleQuiz.module.scss'

const MultipleQuiz = ({ num, totalNum, question, answers, hint, onSendData }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [isHintVisible, setIsHintVisible] = useState(false)
  const hintRef = useRef(null)
  const QHighlight = question.split(/\[\[(.*?)\]\]/)

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

  const toggleHint = () => {
    setIsHintVisible((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (hintRef.current && !hintRef.current.contains(e.target)) {
        setIsHintVisible(false)
      }
    }
    if (isHintVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isHintVisible])

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizNum}>
        <span className={styles.currentNum}>{num < 10 ? '0' + num : num}</span>
        <span className={styles.slash}> / </span>
        {totalNum < 10 ? '0' + totalNum : totalNum}
      </div>
      <div className={styles.question}>
        {QHighlight.map((part, idx) =>
          idx % 2 === 1 ? (
            <span key={idx} className={styles.highlight}>
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </div>

      <div className={styles.hintAreaWrap}>
        <div className={styles.hintArea} ref={hintRef}>
          <button type="button" className={styles.hintButton} onClick={toggleHint}>
            {isHintVisible ? '힌트 닫기' : '힌트 보기'}
          </button>
          {isHintVisible && (
            <div className={styles.hintBox}>
              <div className={styles.hintBoxInner}>{hint}</div>
            </div>
          )}
        </div>
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
    </div>
  )
}

export default MultipleQuiz
