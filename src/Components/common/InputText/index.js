import React from 'react'
import { Input } from 'reactstrap'
import './styles.scss'

const InputText = ({ placeholder, name, onChange, ...rest }) => {
  const onChangeText = event => {
    const { target } = event
    const { name, value } = target
    onChange(name, value)
  }
  return (
    <Input
      className="textInput"
      placeholder={placeholder}
      name={name}
      onChange={onChangeText}
      {...rest}
    />
  )
}

export default InputText
