import React from 'react'
import styles from './Container.module.scss'
import classNames from 'classnames'

const Container = ({ children, className }) => {
  return <div className={classNames(styles.container, className)}>{children}</div>
}

export default Container
