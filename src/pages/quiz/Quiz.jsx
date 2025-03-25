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
  const navigate = useNavigate()

  const nextQuizEvent = () => {
    setQIndex(QIndex + 1)
  }

  const RefreshRedirect = () => {
    const navigate = useNavigate()

    useEffect(() => {
      // 새로고침 이벤트 감지
      const handleBeforeUnload = () => {
        sessionStorage.setItem('refreshFlag', 'true')
      }

      window.addEventListener('beforeunload', handleBeforeUnload)

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload)
      }
    }, [])

    useEffect(() => {
      if (sessionStorage.getItem('refreshFlag') === 'true') {
        sessionStorage.removeItem('refreshFlag')
        navigate('/', { replace: true })
      }
    }, [navigate])

    return null
  }
  RefreshRedirect()

  return (
    <Container>
      <NormalQuiz question={quizList.quiz_list[QIndex].Q} answers={quizList.quiz_list[QIndex].A} name={`quiz0${QIndex}`} />
      {quizList.quiz_list.length > QIndex + 1 ? <NextQuizButton clickBtn={nextQuizEvent}>다음 문제</NextQuizButton> : <GoLink link="/">결과 보기</GoLink>}
    </Container>
  )
}

export default Quiz
