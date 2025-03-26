import React from 'react'
import { Link } from 'react-router-dom'
import styles from './GoLink.module.scss'
import classnames from 'classnames'

const GoLink = ({ link, children, active }) => {
  const linkClick = (event) => {
    if (!active) event.preventDefault()
  }
  return (
    <div className={styles.goLinkWrap}>
      <Link to={link} className={classnames(styles.goLink, !active && styles.disabled)} onClick={linkClick}>
        {children}
      </Link>
    </div>
  )
}

export default GoLink
