import React from 'react'
import styles from './QuizStyle.module.scss'
import AnswerButton from './AnswerButton'

const NormalQuiz = ({ num, totalNum, question, answers, name, onSendData }) => {
  const handleUserAnswer = (value) => {
    onSendData(value)
  }

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizNum}>
        <span className={styles.currentNum}>{num < 10 ? '0' + num : num}</span>
        <span className={styles.slash}> / </span>
        {totalNum < 10 ? '0' + totalNum : totalNum}
      </div>
      <div className={styles.question}>{question}</div>
      <div className={styles.answerArea}>
        {answers.map((item, index) => {
          return <AnswerButton value={item} num={index + 1} name={name} key={item} onSendData={handleUserAnswer} />
        })}
      </div>
    </div>
  )
}

export default NormalQuiz
