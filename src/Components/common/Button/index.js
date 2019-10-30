import React from 'react'
import { Button } from 'reactstrap'
import './styles.scss'

const ButtonCommon = ({ text, ...rest }) => (
  <Button className="btn w-100" {...rest}>
    {text}
  </Button>
)

export default ButtonCommon
