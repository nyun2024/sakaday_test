import React from 'react'
import styles from './AnswerButton.module.scss'
import { useState } from 'react'
// import classNames from 'classnames'

const AnswerButton = ({ value, num, disabled, name, onSendData }) => {
  const clickAnswer = (e) => {
    onSendData(e.target.value) // 부모로 값 전달
  }

  const [pointerDisabled, setPointerDisabled] = useState(false)

  const handleClick = () => {
    setPointerDisabled(true)
    setTimeout(() => setPointerDisabled(false), 300) // 0.3초 후 다시 활성화
  }

  return (
    <label className={styles.answerButton}>
      <input type="radio" value={value} name={name} disabled={disabled} onClick={handleClick} onChange={clickAnswer} style={{ pointerEvents: pointerDisabled ? 'none' : 'auto' }} />
      <span>
        {num}. {value}
      </span>
    </label>
  )
}

export default AnswerButton
