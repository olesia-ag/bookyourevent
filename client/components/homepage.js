import React from 'react'
import {Link} from 'react-router-dom'

import Calendar from './calendar'
import Form from './form'

const Homepage = () => {
  return (
    <div>
      <h2>Please select a day to check availability:</h2>
      <div className="home">
        <div className="calendar-container">
          <Calendar />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Homepage
