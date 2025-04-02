import React from 'react'
import styles from './QuizStyle.module.scss'
import AnswerButton from './AnswerButton'

const NormalQuiz = ({ num, question, answers, name, onSendData }) => {
  const handleUserAnswer = (value) => {
    onSendData(value)
  }

  return (
    <>
      <div className={styles.question}>
        {num}. {question}
      </div>
      <div className={styles.answerArea}>
        {answers.map((item, index) => {
          return <AnswerButton value={item} num={index + 1} name={name} key={item} onSendData={handleUserAnswer} />
        })}
      </div>
    </>
  )
}

export default NormalQuiz
