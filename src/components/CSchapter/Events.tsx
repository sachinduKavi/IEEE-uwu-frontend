import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Events() {
  const scrollRef = useRef(null);

  const events = [
    {
      title: "Workshop: Introduction to Machine Learning",
      date: "November 15, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Engineering Building, Room 301",
      link: "#",
      category: "Workshop",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/v1760888571/WhatsApp_Image_2025-05-18_at_15.29.55_6f9ecd31_ff7amb.jpg",
    },
    {
      title: "Tech Talk: Cloud Computing Trends",
      date: "November 22, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual Event",
      link: "#",
      category: "Seminar",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/v1760888399/WhatsApp_Image_2025-08-07_at_19.06.45_67e55e42_efrxme.jpg",
    },
    {
      title: "Hackathon 2025",
      date: "December 5-6, 2025",
      time: "24 Hours",
      location: "Computer Science Building",
      link: "#",
      category: "Competition",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/v1760888497/WhatsApp_Image_2025-10-05_at_18.09.35_d1ca3e95_tp3wu2.jpg",
    },
    {
      title: "Workshop: Introduction to Machine Learning",
      date: "November 15, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Engineering Building, Room 301",
      link: "#",
      category: "Workshop",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/v1760888571/WhatsApp_Image_2025-05-18_at_15.29.55_6f9ecd31_ff7amb.jpg",
    },
    {
      title: "Tech Talk: Cloud Computing Trends",
      date: "November 22, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual Event",
      link: "#",
      category: "Seminar",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/v1760888399/WhatsApp_Image_2025-08-07_at_19.06.45_67e55e42_efrxme.jpg",
    },
    {
      title: "Hackathon 2025",
      date: "December 5-6, 2025",
      time: "24 Hours",
      location: "Computer Science Building",
      link: "#",
      category: "Competition",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/v1760888497/WhatsApp_Image_2025-10-05_at_18.09.35_d1ca3e95_tp3wu2.jpg",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll 80% of container width
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="events" className="py-10 bg-gradient-to-b from-gray-50 to-gray-100 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-15"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upcoming Events
        </motion.h2>

        {/* Scroll Arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:block absolute left-30 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-yellow-100 transition z-10"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6 text-yellow-600" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:block absolute right-30 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-yellow-100 transition z-10"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6 text-yellow-600" />
        </button>

        {/* Horizontal Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="w-[300px] h-[440px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-yellow-400 flex-shrink-0 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="w-full h-[220px] rounded-t-2xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    {event.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-1">📅 {event.date}</p>
                  <p className="text-sm text-gray-700 mb-1">⏰ {event.time}</p>
                  <p className="text-sm text-gray-700 mb-4">
                    📍 {event.location}
                  </p>
                </div>

                {event.link && (
                  <a
                    href={event.link}
                    className="inline-block w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 rounded-full text-center transition"
                  >
                    Register Now
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
