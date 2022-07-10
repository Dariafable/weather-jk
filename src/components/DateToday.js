import React from 'react'
import {DateContainer} from './DateStyles'

const DateToday = () => {
  let today = new Date().toLocaleDateString();

  return (
    <DateContainer>
      <p>{today}</p>
      </DateContainer>
  )
}

export default DateToday

