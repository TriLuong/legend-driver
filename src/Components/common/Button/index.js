import React from 'react'
import { Button } from 'reactstrap'
import './styles.scss'

const ButtonCommon = ({ className, text, ...rest }) => (
  <Button className={`buttonCommon w-100 ${className || ''}`} {...rest}>
    {text}
  </Button>
)

export default ButtonCommon
