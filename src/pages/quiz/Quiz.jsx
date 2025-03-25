import React from 'react'
import Container from '@components/Container'
import NormalQuiz from '@components/quiz/NormalQuiz'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import NextQuizButton from '@components/NextQuizButton'
import GoLink from '@components/GoLink'
import { useNavigate } from 'react-router-dom'

const Quiz = () => {
  const quizList = useSelector((state) => state.quizList)
  const [QIndex, setQIndex] = useState(0)

  const nextQuizEvent = () => {
    setQIndex(QIndex + 1)
  }

  const RedirectOnRefresh = () => {
    const navigate = useNavigate()

    useEffect(() => {
      const isReload = sessionStorage.getItem('isReload')

      if (isReload) {
        sessionStorage.removeItem('isReload') // reload 상태 초기화
        navigate('/', { replace: true })
      } else {
        sessionStorage.setItem('isReload', 'true') // reload 상태 저장
      }
    }, [navigate])

    return null
  }
  RedirectOnRefresh()

  return (
    <Container>
      <NormalQuiz question={quizList.quiz_list[QIndex].Q} answers={quizList.quiz_list[QIndex].A} name={`quiz0${QIndex}`} />
      {quizList.quiz_list.length > QIndex + 1 ? <NextQuizButton clickBtn={nextQuizEvent}>다음 문제</NextQuizButton> : <GoLink link="/">결과 보기</GoLink>}
    </Container>
  )
}

export default Quiz
