import React from 'react'
import './styles.scss'

const Text = ({ text, className }) => {
  return <p className={`text ${className || ''}`}>{text}</p>
}

export default Text
