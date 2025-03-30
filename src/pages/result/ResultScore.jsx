import React from 'react'
import Container from '@components/Container'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import img0to49 from '@img/score/0to49.jpg'
import img50to69 from '@img/score/50to69.jpg'
import img70to89 from '@img/score/70to89.jpg'
import img90to100 from '@img/score/90to100.jpg'

const ResultScore = () => {
  const navigate = useNavigate()
  const userScore = useSelector((state) => state.quizList.userScore)

  //새로고침 시 홈으로 강제 이동
  useEffect(() => {
    const isResultReload = sessionStorage.getItem('isResultReload')

    if (isResultReload) {
      sessionStorage.removeItem('isResultReload')
      navigate('/', { replace: true })
    } else {
      sessionStorage.setItem('isResultReload', 'true')
    }
  }, [navigate])

  const scoreView = {
    score0to49: {
      img: img0to49,
      dialogue: '하아 실망이야~ 다시 1권부터 정독해봐~!',
    },
    score50to69: {
      img: img50to69,
      dialogue: '흐음 이 점수.. 좀 더 분발해야 겠는걸?',
    },
    score70to89: {
      img: img70to89,
      dialogue: '꽤 봐 줄만한 점수인걸? 열심히 공부했나봐?!',
    },
    score90to100: {
      img: img90to100,
      dialogue: '사카데이 잘.알. \n최고예요👍',
    },
  }

  let resultData
  if (userScore <= 49) resultData = scoreView.score0to49
  else if (userScore <= 69) resultData = scoreView.score50to69
  else if (userScore <= 89) resultData = scoreView.score70to89
  else resultData = scoreView.score90to100

  return (
    <Container>
      <div>{userScore}점</div>
      <img src={resultData.img} alt="score image" />
      <p style={{ whiteSpace: 'pre-line' }}>{resultData.dialogue}</p>
    </Container>
  )
}

export default ResultScore
