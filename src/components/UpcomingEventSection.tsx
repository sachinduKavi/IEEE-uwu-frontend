import HorizontalScrollSection from './HorizontalScrollSection'
import EventCard from './EventCard'
import '../css/upcomingEventSection.css'

const UpcomingEventSection = () => {
  return (
    <div >
    <h1 className="upcoming-event-title">Upcoming Events</h1>
      <HorizontalScrollSection>
        <EventCard
            title="Tech Conference 2023"
            description="Join us for the annual Tech Conference where industry leaders share insights."
            date="2023-11-15"
            time="10:00 AM - 5:00 PM"
            venue="Tech Park Auditorium"
            imageUrl="https://res.cloudinary.com/diiaeojyn/image/upload/v1748804594/tzlxdsokycxznqgfgmp3.jpg"
            />
        <EventCard
            title="AI Summit"
            description="Explore the latest advancements in AI at the AI Summit 2023."
            date="2023-12-01"
            time="9:00 AM - 4:00 PM"
            venue="Innovation Center"
            imageUrl="https://res.cloudinary.com/diiaeojyn/image/upload/v1750566613/WhatsApp_Image_2025-06-14_at_10.00.18_b1ea576f_f2bj6e.jpg"
            />
        <EventCard
            title="Web Development Workshop"
            description="A hands-on workshop for aspiring web developers."
            date="2023-12-10"
            time="1:00 PM - 3:00 PM"
            venue="Community Hall"
            imageUrl="https://res.cloudinary.com/diiaeojyn/image/upload/v1750566624/WhatsApp_Image_2025-06-08_at_12.59.33_9e326386_auc4hl.jpg"
            />
        <EventCard
            title="Cybersecurity Forum"
            description="Discuss the latest trends in cybersecurity with experts."
            date="2023-12-20"
            time="10:00 AM - 2:00 PM"
            venue="Cybersecurity Lab"
            imageUrl="https://res.cloudinary.com/diiaeojyn/image/upload/v1748804594/tzlxdsokycxznqgfgmp3.jpg"
            />
        <EventCard
            title="Blockchain Expo"
            description="Learn about blockchain technology and its applications."
            date="2024-01-05"
            time="11:00 AM - 6:00 PM"
            venue="Blockchain Center"
            imageUrl="https://res.cloudinary.com/diiaeojyn/image/upload/v1750566624/WhatsApp_Image_2025-06-08_at_12.59.33_9e326386_auc4hl.jpg"
            />
      </HorizontalScrollSection>
    </div>
  )
}

export default UpcomingEventSection
