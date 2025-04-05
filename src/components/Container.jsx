import React from 'react'
import styles from './Container.module.scss'
import classNames from 'classnames'

const Container = React.forwardRef(({ children, className, center }, ref) => {
  return (
    <div className={classNames(styles.container, className, center && styles.center)} ref={ref}>
      {children}
    </div>
  )
})

export default Container
