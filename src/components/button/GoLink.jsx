import React from 'react'
import { Link } from 'react-router-dom'
import styles from './GoLink.module.scss'
import classnames from 'classnames'

const GoLink = ({ link, children, disabled, clickEvent }) => {
  const linkClick = (event) => {
    if (disabled) event.preventDefault()
  }

  const handleGoClickevent = () => {
    linkClick() // 자식의 기존 함수 실행
    if (clickEvent) {
      clickEvent() // 부모에서 전달된 함수 실행
    }
  }

  return (
    <div className={styles.goLinkWrap}>
      <Link to={link} className={classnames(styles.goLink, disabled && styles.disabled)} onClick={handleGoClickevent}>
        {children}
      </Link>
    </div>
  )
}

export default GoLink
