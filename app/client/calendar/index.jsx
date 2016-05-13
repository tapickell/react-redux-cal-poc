import moment  from 'moment'
import React  from 'react'
import BigCalendar  from 'react-big-calendar'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

let myEventsList = [
  { startDate: Date.now(), endDate: Date.now() + 500000000 }
]

let MyCalendar = React.createClass({
  render() {
    <div>
      <BigCalendar
        events={myEventsList}
        startAccessor='startDate'
        endAccessor='endDate'
      />
    </div>
  }
})


export default MyCalendar
