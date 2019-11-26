import React from 'react'
import './styles.scss'

const TextSub = ({ text, className, isTitle }) => (
  <p className={`contentSub ${isTitle ? 'contentSubTitle' : ''} ${className || ''}`}>{text}</p>
)

export default TextSub
