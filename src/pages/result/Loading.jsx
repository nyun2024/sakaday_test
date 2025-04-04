import React from 'react'
import Container from '@components/Container'
import skdyLogo from '@img/icon/sakaday_logo.png'
import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <Container className={styles.loadingContainer} center>
      <img src={skdyLogo} />
      <p>채점 중</p>
      <div className={styles.loader}></div>
    </Container>
  )
}

export default Loading
