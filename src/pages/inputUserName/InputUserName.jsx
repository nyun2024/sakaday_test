import React from 'react'
import { useState, useEffect } from 'react'
import Container from '@components/Container'
import GoLink from '@components/button/GoLink'
import styles from './inputUserName.module.scss'

const InputUserName = () => {
  const [userName, setUserName] = useState('')
  const [linkDisable, setLinkDisable] = useState(false)

  const handleInputChange = (e) => {
    setUserName(e.target.value)
  }
  const clickLinkEvent = () => {
    localStorage.setItem('userName', userName)
  }
  useEffect(() => {
    sessionStorage.removeItem('isQuizReload')
  }, [])

  useEffect(() => {
    if (userName.length > 0) {
      setLinkDisable(false)
    } else {
      setLinkDisable(true)
    }
  }, [userName])

  return (
    <Container center>
      <div className={styles.title}>이름을 입력해 주세요.</div>
      <div className={styles.desc}>
        콜리 유저는 <strong>'콜리 닉네임'</strong>으로 입력 부탁드립니다.
      </div>
      <input type="text" className={styles.input} onChange={handleInputChange} />
      <GoLink className={styles.goTest} link="/Quiz" disabled={linkDisable} clickEvent={clickLinkEvent}>
        확인
      </GoLink>
    </Container>
  )
}

export default InputUserName
