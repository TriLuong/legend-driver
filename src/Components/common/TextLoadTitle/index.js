import React from 'react'
import './styles.scss'

const TextLoadTitle = ({ text, className }) => (
  <p className={`contentLeft ${className || ''}`}>{text}</p>
)

export default TextLoadTitle
