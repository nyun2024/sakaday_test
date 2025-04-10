import React from 'react'
import Container from '@components/Container'
import NormalQuiz from '@components/quiz/NormalQuiz'
import InputQuiz from '@components/quiz/InputQuiz'
import { useSelector, useDispatch } from 'react-redux'
import { setScore } from '@store/quizList'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import NextQuizButton from '@components/button/NextQuizButton'
import ProgressBar from '@components/progress/ProgressBar'
import MultipleQuiz from '../../components/quiz/MultipleQuiz'
import styles from './Quiz.module.scss'
import ImageQuiz from '../../components/quiz/ImageQuiz'

const Quiz = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const quizList = useSelector((state) => state.quizList.quizList)
  const [QIndex, setQIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState([])
  const [allUserAnswer, setAllUserAnswer] = useState([])
  const [btnDisabled, setBtnDisabled] = useState(true)
  const scrollRef = useRef(null)

  const addUserAnswers = () => {
    const updatedAnswers = [...allUserAnswer, userAnswer]
    setAllUserAnswer(updatedAnswers)

    if (QIndex + 1 < quizList.length) {
      setQIndex(QIndex + 1)
      setUserAnswer([])
    } else {
      dispatch(setScore(updatedAnswers))
      navigate('/ResultScore')
    }
  }

  console.log(userAnswer)
  console.log(allUserAnswer)

  const handleUserAnswer = (value) => {
    if (typeof value === 'string') {
      setUserAnswer(value)
      setBtnDisabled(value.trim().length === 0)
    } else if (Array.isArray(value)) {
      setUserAnswer(value)
      setBtnDisabled(value.length === 0)
    }
    console.log(userAnswer)
  }

  useEffect(() => {
    if (userAnswer.length > 0) {
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }
  }, [userAnswer])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [QIndex])

  //새로고침 시 홈으로 강제 이동
  useEffect(() => {
    const isQuizReload = sessionStorage.getItem('isQuizReload')

    if (isQuizReload) {
      sessionStorage.removeItem('isQuizReload')
      navigate('/', { replace: true })
    } else {
      sessionStorage.setItem('isQuizReload', 'true')
    }
  }, [navigate])

  return (
    <Container className={styles.quizContainer} ref={scrollRef}>
      <ProgressBar currentNum={QIndex + 1} totalNum={quizList.length} />
      {quizList[QIndex] && quizList[QIndex].type === 'normal' ? (
        <NormalQuiz
          num={QIndex + 1}
          totalNum={quizList.length}
          question={quizList[QIndex].Q}
          answers={quizList[QIndex].A}
          hint={quizList[QIndex].hint}
          name={`quiz0${QIndex}`}
          onSendData={handleUserAnswer}
        />
      ) : quizList[QIndex] && quizList[QIndex].type === 'input' ? (
        <InputQuiz num={QIndex + 1} totalNum={quizList.length} question={quizList[QIndex].Q} hint={quizList[QIndex].hint} onSendData={handleUserAnswer} />
      ) : quizList[QIndex] && quizList[QIndex].type === 'multiple' ? (
        <MultipleQuiz num={QIndex + 1} totalNum={quizList.length} question={quizList[QIndex].Q} answers={quizList[QIndex].A} hint={quizList[QIndex].hint} onSendData={handleUserAnswer} />
      ) : quizList[QIndex] && quizList[QIndex].type === 'img' ? (
        <ImageQuiz
          num={QIndex + 1}
          totalNum={quizList.length}
          question={quizList[QIndex].Q}
          answers={quizList[QIndex].A}
          hint={quizList[QIndex].hint}
          name={`quiz0${QIndex}`}
          onSendData={handleUserAnswer}
          imgDisableText={false}
        />
      ) : quizList[QIndex] && quizList[QIndex].type === 'imgDisableText' ? (
        <ImageQuiz
          num={QIndex + 1}
          totalNum={quizList.length}
          question={quizList[QIndex].Q}
          answers={quizList[QIndex].A}
          hint={quizList[QIndex].hint}
          name={`quiz0${QIndex}`}
          onSendData={handleUserAnswer}
          imgDisableText={true}
        />
      ) : (
        ''
      )}
      <NextQuizButton className={styles.nextBtn} clickBtn={addUserAnswers} disabled={btnDisabled}>
        {quizList.length > QIndex + 1 ? '다음 문제' : '결과 보기'}
      </NextQuizButton>
    </Container>
  )
}

export default Quiz
