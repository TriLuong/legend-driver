import React from 'react'
import ShowLess from './ShowLess'
import ShowMore from './ShowMore'
import './styles.scss'

const Detail = ({ data, showMore = false }) => (
  <>{showMore ? <ShowMore data={data} /> : <ShowLess data={data} />}</>
)

export default Detail
