import React from 'react'
import dummy from '@img/dummy.jpg'
import styles from './Home.module.scss'
import Container from '@components/Container'

const Home = () => {
  return (
    <Container>
      <h1 className={styles.title}>사카모토 데이즈 능력 고사</h1>
      <img src={dummy} alt="dummy" />
    </Container>
  )
}

export default Home
