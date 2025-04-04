import React, { useState, useRef, useEffect } from 'react'
import styles from './ImageQuiz.module.scss'
import ImgAnswerButton from './button/ImgAnswerButton'

const ImageQuiz = ({ num, totalNum, question, answers, hint, name, onSendData, imgDisableText }) => {
  const [isHintVisible, setIsHintVisible] = useState(false)
  const hintRef = useRef(null)

  const handleUserAnswer = (value) => {
    onSendData(value)
  }

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
      <div className={styles.question}>{question}</div>

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
        {answers.map((item, index) => {
          return <ImgAnswerButton value={item.a} num={index + 1} name={name} key={item.a} img={item.img} disableText={imgDisableText} onSendData={handleUserAnswer} />
        })}
      </div>
    </div>
  )
}

export default ImageQuiz
