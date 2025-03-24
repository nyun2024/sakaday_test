import React from 'react'
import dummy from '@img/dummy.jpg'
import styles from './Home.module.scss'
import Container from '@components/Container'

const Home = () => {
  return (
    <Container className={styles.homeContainer}>
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
          <div className={styles.studentName}>나구모 요이치</div>
        </div>
      </div>
      <img src={dummy} className={styles.img} alt="dummy" />
    </Container>
  )
}

export default Home
