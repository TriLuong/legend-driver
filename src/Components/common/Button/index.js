import React from 'react'
import { Button } from 'reactstrap'
import './styles.scss'
import Assets from 'Assets'

const ButtonCommon = ({ className, text, icon, ...rest }) => (
  <Button className={`buttonCommon w-100 ${className || ''}`} {...rest}>
    {text}
    {icon && (
      <span aria-hidden>
        &nbsp; &nbsp;
        <img src={Assets.images.forwardIcon} className="buttonIcon" />
      </span>
    )}
  </Button>
)

export default ButtonCommon
