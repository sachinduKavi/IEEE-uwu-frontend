import React from 'react'
import HorizontalScrollSection from './HorizontalScrollSection'
import EventCard from './EventCard'
import '../css/upcomingEventSection.css'

const UpcomingEventSection = () => {
  return (
    <div>
    <h1 className="upcoming-event-title">Upcoming Events</h1>
      <HorizontalScrollSection>
        <EventCard
            title="Tech Conference 2023"
            description="Join us for the annual Tech Conference where industry leaders share insights."
            date="2023-11-15"
            time="10:00 AM - 5:00 PM"
            venue="Tech Park Auditorium"
            imageUrl="https://res.cloudinary.com/diiaeojyn/image/upload/v1744002525/samples/shoe.jpg"
            />
        <EventCard
            title="AI Summit"
            description="Explore the latest advancements in AI at the AI Summit 2023."
            date="2023-12-01"
            time="9:00 AM - 4:00 PM"
            venue="Innovation Center"
            imageUrl="https://res.cloudinary.com/diiaeojyn/image/upload/v1744002529/cld-sample-5.jpg"
            />
        <EventCard
            title="Web Development Workshop"
            description="A hands-on workshop for aspiring web developers."
            date="2023-12-10"
            time="1:00 PM - 3:00 PM"
            venue="Community Hall"
            imageUrl="https://res.cloudinary.com/diiaeojyn/image/upload/v1744002525/samples/shoe.jpg"
            />
        <EventCard
            title="Cybersecurity Forum"
            description="Discuss the latest trends in cybersecurity with experts."
            date="2023-12-20"
            time="10:00 AM - 2:00 PM"
            venue="Cybersecurity Lab"
            imageUrl="https://res.cloudinary.com/diiaeojyn/image/upload/v1744002529/cld-sample-5.jpg"
            />
        <EventCard
            title="Blockchain Expo"
            description="Learn about blockchain technology and its applications."
            date="2024-01-05"
            time="11:00 AM - 6:00 PM"
            venue="Blockchain Center"
            imageUrl="https://res.cloudinary.com/diiaeojyn/image/upload/v1744002529/cld-sample-5.jpg"
            />
      </HorizontalScrollSection>
    </div>
  )
}

export default UpcomingEventSection
