import React from 'react'
import './styles.scss'

const TextSub = ({ text, className, isTitle, ...rest }) => (
  <p className={`contentSub ${isTitle ? 'contentSubTitle' : ''} ${className || ''}`} {...rest}>
    {text}
  </p>
)

export default TextSub
