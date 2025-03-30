import React from 'react'
import Container from '@components/Container'
import NormalQuiz from '@components/quiz/NormalQuiz'
import { useSelector, useDispatch } from 'react-redux'
import { setScore } from '@store/quizList'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NextQuizButton from '@components/button/NextQuizButton'
import GoLink from '@components/button/GoLink'
import ProgressBar from '@components/progress/ProgressBar'

const Quiz = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const quizList = useSelector((state) => state.quizList)
  const [QIndex, setQIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState([])
  const [allUserAnswer, setAllUserAnswer] = useState([])
  const [btnDisabled, setBtnDisabled] = useState(true)

  const addUserAnswers = () => {
    const updatedAnswers = [...allUserAnswer, userAnswer] // 최신 상태 미리 계산
    setAllUserAnswer(updatedAnswers)

    if (quizList.quiz_list.length === QIndex + 1) {
      dispatch(setScore(updatedAnswers))
    }
    setQIndex(QIndex + 1)
    setUserAnswer([])
  }

  console.log(userAnswer)
  console.log(allUserAnswer)

  const handleUserAnswer = (value) => {
    setUserAnswer(value)
  }

  useEffect(() => {
    if (userAnswer.length > 0) {
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }
  }, [userAnswer])

  //새로고침 시 홈으로 강제 이동
  useEffect(() => {
    const isReload = sessionStorage.getItem('isReload')

    if (isReload) {
      sessionStorage.removeItem('isReload')
      navigate('/', { replace: true })
    } else {
      sessionStorage.setItem('isReload', 'true')
    }
  }, [navigate])

  return (
    <Container>
      <ProgressBar currentNum={QIndex + 1} totalNum={quizList.quiz_list.length} />
      {quizList.quiz_list.length >= QIndex + 1 ? (
        <NormalQuiz num={QIndex + 1} question={quizList.quiz_list[QIndex].Q} answers={quizList.quiz_list[QIndex].A} name={`quiz0${QIndex}`} onSendData={handleUserAnswer} />
      ) : (
        ''
      )}
      {quizList.quiz_list.length > QIndex + 1 ? (
        <NextQuizButton clickBtn={addUserAnswers} disabled={btnDisabled}>
          다음 문제
        </NextQuizButton>
      ) : (
        <GoLink link="/ResultScore" clickEvent={addUserAnswers}>
          결과 보기
        </GoLink>
      )}
    </Container>
  )
}

export default Quiz
