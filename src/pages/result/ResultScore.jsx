import React, { useState, useEffect } from 'react'
import Container from '@components/Container'
import img0to49 from '@img/score/0to49.jpg'
import img50to69 from '@img/score/50to69.jpg'
import img70to89 from '@img/score/70to89.jpg'
import img90to100 from '@img/score/90to100.jpg'
import styles from './ResultScore.module.scss'
import GoLink from '@components/button/GoLink'
import Loading from './Loading'

const ResultScore = () => {
  const [userScore, setUserScore] = useState(null)
  const [userName, setUserName] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setUserScore(Number(localStorage.getItem('userScore')) || 0)
      setUserName(localStorage.getItem('userName') || '사용자')
      setIsLoading(false)
    }, 2000)
  }, [])

  // 로딩 중
  if (isLoading) {
    return <Loading />
  }

  const scoreView = {
    score0to49: {
      img: img0to49,
      dialogue: '"하아 실망이야~\n다시 1권부터 정독해봐~!"',
    },
    score50to69: {
      img: img50to69,
      dialogue: '"흐음.. 이 점수..\n좀 더 분발해야 겠는걸?"',
    },
    score70to89: {
      img: img70to89,
      dialogue: '"꽤 봐 줄 만한 점수인 걸?\n열심히 공부했나 봐?!"',
    },
    score90to100: {
      img: img90to100,
      dialogue: '"사카데이 잘.알. \n최고예요👍"',
    },
  }

  let resultData
  if (userScore <= 49) resultData = scoreView.score0to49
  else if (userScore <= 69) resultData = scoreView.score50to69
  else if (userScore <= 89) resultData = scoreView.score70to89
  else resultData = scoreView.score90to100

  return (
    <Container className={styles.resultScoreContainer} center>
      <div className={styles.userResultScore}>
        <span className={styles.username}>{userName}</span>님의 점수는
        <br />
        <span className={styles.score}>
          <span className={styles.scoreNum}>{userScore}</span>점
        </span>
      </div>
      <p className={styles.dialogue}>
        {resultData.dialogue.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <img src={resultData.img} className={styles.scoreImg} alt="score image" />
      <GoLink className={styles.goHome} link="/" disabled={false}>
        재시험 보기
      </GoLink>
    </Container>
  )
}

export default ResultScore
