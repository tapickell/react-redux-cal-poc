import moment  from 'moment'
import React  from 'react'
import BigCalendar  from 'react-big-calendar'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

let myEventsList = [
  { title: 'Long Event', startDate: Date.now(), endDate: Date.now() + 500000000 },
  { title: 'Short Event', startDate: Date.now()-50000000, endDate: Date.now()-50000000 },
  { title: 'All Day Event', startDate: Date.now(), endDate: Date.now(), allDay: true }
]

let MyCalendar = React.createClass({
  render() {
    return <div className='app'>
        <div className='contain'>
          <BigCalendar
            popup={true}
            selectable={true}
            events={myEventsList}
            startAccessor='startDate'
            endAccessor='endDate'
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={(slotInfo) => alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}`
            )}
          />
        </div>
      </div>
  }

})


export default MyCalendar
