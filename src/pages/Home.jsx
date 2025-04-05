import React from 'react'
import { useEffect } from 'react'
import styles from './Home.module.scss'
import Container from '@components/Container'
import GoLink from '@components/button/GoLink'
import sakamoto from '@img/character/sakamoto.jpg'
import shin from '@img/character/shin.jpg'
import nagumo from '@img/character/nagumo.jpg'
import natsuki from '@img/character/natsuki.jpg'
import osaragi from '@img/character/osaragi.jpg'
import shishiba from '@img/character/shishiba.jpg'
import rion from '@img/character/rion.jpg'
import heisuke from '@img/character/heisuke.jpg'

const Home = () => {
  useEffect(() => {
    sessionStorage.removeItem('isQuizReload')
  }, [])

  const character = [
    { name: '사카모토 타로', img: sakamoto },
    { name: '아사쿠라 신', img: shin },
    { name: '나구모 요이치', img: nagumo },
    { name: '마시모 헤이스케', img: heisuke },
    { name: '세바 나츠키', img: natsuki },
    { name: '시시바', img: shishiba },
    { name: '오사라기', img: osaragi },
    { name: '아카오 리온', img: rion },
  ]
  const randomValues = character[Math.floor(Math.random() * character.length)]

  return (
    <Container className={styles.homeContainer} center>
      <div className={styles.subTitle}>2025년도 킬러 평가시험</div>
      <h1 className={styles.title}>
        사카모토 데이즈
        <br />
        능력 고사
      </h1>
      <div className={styles.studentInfo}>
        <div className={styles.class}>제 1교시</div>
        <div className={styles.student}>
          <div className={styles.nameTitle}>성명</div>
          <div className={styles.studentName}>{randomValues.name}</div>
        </div>
      </div>
      <img src={randomValues.img} className={styles.img} alt="dummy" />
      <ul className={styles.testDesc}>
        <li>⦁ 총 객관식 16개, 주관식 4개</li>
        <li>⦁ 출제범위 단행본 1권 ~ 19권</li>
        <li>⦁ 힌트 보기를 클릭해서 정답의 초성 및 몇권에 나오는지 힌트를 얻을 수 있어요.</li>
      </ul>
      <GoLink className={styles.goTest} link="/UseName" disabled={false}>
        문제 풀기
      </GoLink>
    </Container>
  )
}

export default Home
