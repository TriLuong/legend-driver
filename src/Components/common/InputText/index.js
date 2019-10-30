import React from 'react'
import { Input } from 'reactstrap'
import './styles.scss'

const InputText = ({ className, placeholder, name, onChange, ...rest }) => {
  const onChangeText = event => {
    const { target } = event
    const { name, value } = target
    onChange(name, value)
  }
  return (
    <Input
      className={`${className || ''} textInput`}
      placeholder={placeholder}
      name={name}
      onChange={onChangeText}
      {...rest}
    />
  )
}

export default InputText
