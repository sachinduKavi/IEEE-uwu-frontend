import React from 'react'
import Slider from '../../components/Slider'
import UpcomingEventSection from '../../components/UpcomingEventSection'
import AboutUs from "../../components/AboutUs.tsx";

export default function Home() {
  return (
    <div className='screen'>
        <Slider />
        <AboutUs/>
        <UpcomingEventSection/>
    </div>
  )
}
