import React from 'react'
import './styles.scss'

const TextSub = ({ text, className }) => <p className={`contentSub ${className || ''}`}>{text}</p>

export default TextSub
