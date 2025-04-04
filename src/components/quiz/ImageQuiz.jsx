import React from 'react'
import styles from './ImageQuiz.module.scss'
import ImgAnswerButton from './ImgAnswerButton'

const ImageQuiz = ({ num, totalNum, question, answers, name, onSendData, imgDisableText }) => {
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
          return <ImgAnswerButton value={item.a} num={index + 1} name={name} key={item.a} img={item.img} disableText={imgDisableText} onSendData={handleUserAnswer} />
        })}
      </div>
    </div>
  )
}

export default ImageQuiz
