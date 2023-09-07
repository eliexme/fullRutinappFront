import React from 'react'
import  ReactWeeklyDayPicker  from 'react-weekly-day-picker'

export default function BookingPage() {
  return (
    <div>
        <ReactWeeklyDayPicker unavailables={{
    weekly: [0, 6]}} secondLineFormat={'MMM D'} daysCount={4} multipleDaySelect={false} todayText={' '}/>
    </div>
  )
}
