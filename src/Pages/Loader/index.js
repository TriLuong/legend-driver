import React from 'react'
import { getStore } from 'Store/Store'
import { useSelector } from 'react-redux'
import { getFetchingSelector } from 'Store/loader/selectors'
import './styles.scss'

const Loader = () => {
  const isFetching = useSelector(getFetchingSelector)

  console.log('Loader', isFetching)
  if (!isFetching) {
    return null
  }
  return (
    <>
      <div className="loading" />
      <div className="loadingLayer" />
    </>
  )
}

export default Loader
