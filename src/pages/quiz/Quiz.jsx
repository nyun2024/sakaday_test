import React from 'react'
import Container from '@components/Container'
import NormalQuiz from '@components/quiz/NormalQuiz'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import NextQuizButton from '@components/button/NextQuizButton'
import GoLink from '@components/button/GoLink'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '@components/progress/ProgressBar'

const Quiz = () => {
  const quizList = useSelector((state) => state.quizList)
  const [QIndex, setQIndex] = useState(0)

  const nextQuizEvent = () => {
    setQIndex(QIndex + 1)
  }

  //새로고침 시 홈으로 강제 이동
  const RedirectOnRefresh = () => {
    console.log('111')
    const navigate = useNavigate()

    useEffect(() => {
      const isReload = sessionStorage.getItem('isReload')
      console.log('222')

      if (isReload) {
        sessionStorage.removeItem('isReload')
        navigate('/', { replace: true })
      } else {
        sessionStorage.setItem('isReload', 'true')
      }
    }, [navigate])

    return null
  }
  RedirectOnRefresh()

  return (
    <Container>
      <ProgressBar currentNum={QIndex + 1} totalNum={quizList.quiz_list.length} />
      <NormalQuiz question={quizList.quiz_list[QIndex].Q} answers={quizList.quiz_list[QIndex].A} name={`quiz0${QIndex}`} />
      {quizList.quiz_list.length > QIndex + 1 ? <NextQuizButton clickBtn={nextQuizEvent}>다음 문제</NextQuizButton> : <GoLink link="/">결과 보기</GoLink>}
    </Container>
  )
}

export default Quiz
