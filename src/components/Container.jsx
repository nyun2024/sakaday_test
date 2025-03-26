import React from 'react'
import styles from './Container.module.scss'
import classNames from 'classnames'

const Container = ({ children, className, center }) => {
  return <div className={classNames(styles.container, className, center && styles.center)}>{children}</div>
}

export default Container
