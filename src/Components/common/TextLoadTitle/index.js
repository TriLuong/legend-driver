import React from 'react'
import './styles.scss'

const TextLoadTitle = ({ text, className, ...rest }) => (
  <p className={`contentLeft ${className || ''}`} {...rest}>
    {text}
  </p>
)

export default TextLoadTitle
