import React from 'react'
import Slider from '../../components/Slider'
import UpcomingEventSection from '../../components/UpcomingEventSection'

export default function Home() {
  return (
    <div className='screen'>
        <Slider />
        <UpcomingEventSection/>
    </div>
  )
}
