import React from 'react'
import styles from './NormalQuiz.module.scss'
import { useState } from 'react'
import AnswerButton from './AnswerButton'

const NormalQuiz = ({ num, question, answers, name, onSendData }) => {
  const [userAnswer, setUserAnswer] = useState('')

  const handleUserAnswer = (value) => {
    setUserAnswer(value)
    onSendData(value)
  }

  return (
    <>
      <div className={styles.question}>
        {num}. {question}
      </div>
      <div className={styles.answers}>
        <fieldset>
          {answers.map((item, index) => {
            return <AnswerButton value={item} num={index + 1} name={name} key={item} onSendData={handleUserAnswer} />
          })}
        </fieldset>
      </div>
    </>
  )
}

export default NormalQuiz
