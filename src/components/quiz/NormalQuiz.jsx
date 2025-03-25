import React from 'react'
import styles from './NormalQuiz.module.scss'
import AnswerButton from './AnswerButton'

const NormalQuiz = ({ question, answers, name }) => {
  return (
    <>
      <div className={styles.question}>{question}</div>
      <div className={styles.answers}>
        <fieldset>
          {answers.map((item, index) => {
            return <AnswerButton value={item} num={index + 1} name={name} key={item} />
          })}
        </fieldset>
      </div>
    </>
  )
}

export default NormalQuiz
