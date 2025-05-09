import React, { useState, useEffect } from 'react'
import Container from '@components/Container'
import GoLink from '@components/button/GoLink'
import styles from './inputUserName.module.scss'

const InputUserName = () => {
  const [userName, setUserName] = useState('')

  const handleInputChange = (e) => {
    const value = e.target.value
    setUserName(value)
  }

  const clickLinkEvent = () => {
    localStorage.setItem('userName', userName)
  }

  useEffect(() => {
    sessionStorage.removeItem('isQuizReload')
  }, [])

  return (
    <Container center className={styles.inputUserNameContainer}>
      <div className={styles.title}>이름을 입력해 주세요.</div>
      <input type="text" className={styles.input} onChange={handleInputChange} />
      <GoLink className={styles.goTest} link="/Quiz" disabled={userName.length === 0} clickEvent={clickLinkEvent}>
        확인
      </GoLink>
    </Container>
  )
}

export default InputUserName
