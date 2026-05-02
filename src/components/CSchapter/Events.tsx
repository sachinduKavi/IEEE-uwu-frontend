import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Events() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedType, setSelectedType] = useState("past");
  const [showArrows, setShowArrows] = useState(false);

  // coming soon image url = https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761223744/comming_soon_dmcpma.jpg
  const allEvents = [
    // === Upcoming Events (only title + description + optional image) ===
    // {
    //   id: "1",
    //   title: "UvaXtreem v2",
    //   description:
    //     "UvaXtreme is a hackathon by the IEEE Student Branch of Uva Wellassa University that promotes innovation, teamwork, and coding skills. It prepares students for IEEEXtreme by tackling real-world challenges and enhancing technical abilities.",
    //   image:
    //     "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1760888497/WhatsApp_Image_2025-10-05_at_18.09.35_d1ca3e95_tp3wu2.jpg",
    //   type: "upcoming",
    // },
    {
      id: "2",
      title: "Wellassata AI",
      description:
        "Wellassata AI is a workshop by the IEEE Student Branch of Uva Wellassa University that explores the world of Artificial Intelligence. It aims to spark curiosity, encourage exploration, and help students understand AI’s potential to shape the future.",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761223744/comming_soon_dmcpma.jpg",
      type: "upcoming",
    },
    {
      id: "3",
      title: "School To Tech",
      description:
        "School to Tech is a new program by the IEEE Student Branch of Uva Wellassa University that visits rural schools to introduce students to technology and innovation. It aims to inspire curiosity, creativity, and critical thinking while helping them see how technology can shape their future.",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761223744/comming_soon_dmcpma.jpg",
      type: "upcoming",
    },
    // Past Events
    {
      id: "7",
      title: "Cloud Workshop",
      date: "May 21, 2025",
      time: "05:00 PM - 08:00 PM",
      location: "D1 Lecture Hall",
      category: "Workshop",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1760888571/WhatsApp_Image_2025-05-18_at_15.29.55_6f9ecd31_ff7amb.jpg",
      type: "past",
    },
    {
      id: "8",
      title: "Internship Discussion",
      date: "August 09, 2025",
      time: "02:00 PM",
      location: "D1 Lecture Hall",
      category: "Meetup",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1760888399/WhatsApp_Image_2025-08-07_at_19.06.45_67e55e42_efrxme.jpg",
      type: "past",
    },
    {
      id: "9",
      title: "WordPress Workshop",
      date: "May 23, 2025",
      time: "05:30 PM - 08:30 PM",
      location: "E3 Computer Lab",
      category: "Workshop",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761222752/WhatsApp_Image_2025-10-23_at_18.00.41_15006575_zmnxjv.jpg",
      type: "past",
    },
    {
      id: "10",
      title: "UvaXtreme v2 Awareness Session",
      topic: "Coding Competition Awareness",
      description:
        "Introduced students to the UvaXtreme v2 Coding Competition 2025, including structure and registration.",
      date: "08 Oct 2025",
      time: "07:00 PM – 09:27 PM",
      location: "Via Zoom Platform",
      category: "Awareness Session",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375524/e927bbab-af1c-4089-8a03-063a8bb028f0_l1oo6d.jpg",
      type: "past",
    },
    {
      id: "11",
      title: "UvaXtreem v2",
      topic: "Coding Competition",
      description:
        "UvaXtreme is a hackathon by the IEEE Student Branch of Uva Wellassa University that promotes innovation, teamwork, and coding skills. It prepares students for IEEEXtreme by tackling real-world challenges and enhancing technical abilities.",
      date: "23 Nov 2025",
      time: "10:00 AM – 03:00 PM",
      location: "A1 Lecture Hall",
      category: "Hackathon",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1764147750/WhatsApp_Image_2025-11-26_at_11.41.24_268455e2_rio6r0.jpg",
      type: "past",
    },
  ];

  const upcomingEvents = allEvents.filter((e) => e.type === "upcoming");
  const pastEvents = allEvents.filter((e) => e.type === "past");

  const eventsToShow =
    selectedType === "upcoming" ? upcomingEvents : pastEvents;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.8;
    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [selectedType]);

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollRef.current) {
        requestAnimationFrame(() => {
          if (scrollRef.current) {
            const isScrollable = eventsToShow.length > 3;
            setShowArrows(isScrollable);
          }
        });
      }
    };
    checkScrollable();
    const timeout = setTimeout(checkScrollable, 300);
    window.addEventListener("resize", checkScrollable);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", checkScrollable);
    };
  }, [selectedType, eventsToShow.length]);

  return (
    <section
      id="events"
      className="py-14 bg-gradient-to-b from-gray-50 to-gray-100 relative"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Events
        </motion.h2>

        {/* Buttons */}
        <div className="flex justify-center mb-10 space-x-4">   
          <button
            onClick={() => setSelectedType("past")}
            className={`px-5 py-2 rounded-full font-semibold transition-all ${
              selectedType === "past"
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-yellow-100"
            }`}
          >
            Past Events
          </button>
          <button
            onClick={() => setSelectedType("upcoming")}
            className={`px-5 py-2 rounded-full font-semibold transition-all ${
              selectedType === "upcoming"
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-yellow-100"
            }`}
          >
            Upcoming Events
          </button>
        </div>

        {/* Scroll Arrows */}
        {showArrows && (
          <>
            <button
              onClick={() => scroll("left")}
              className="hidden md:block absolute left-10 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-yellow-100 transition z-10"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-6 h-6 text-yellow-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-yellow-100 transition z-10"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-6 h-6 text-yellow-600" />
            </button>
          </>
        )}

        {/* Event Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar"
        >
          <AnimatePresence mode="wait">
            {eventsToShow.map((event, index) => (
              <motion.div
                key={event.id}
                className="w-[300px] h-[440px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-yellow-400 flex-shrink-0 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {selectedType === "upcoming" ? (
                  // ===== Upcoming layout =====
                  <div className="flex flex-col flex-1 p-6">
                    {event.image && (
                      <div className="w-full h-[180px] rounded-xl overflow-hidden mb-4">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-sm text-gray-700">
                        {event.description}
                      </p>
                    )}
                  </div>
                ) : (
                  // ===== Past layout =====
                  <>
                    <div className="w-full h-[220px] rounded-t-2xl overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                          {event.category}
                        </span>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-700 mb-1">
                          📅 {event.date}
                        </p>
                        <p className="text-sm text-gray-700 mb-1">
                          ⏰ {event.time}
                        </p>
                        <p className="text-sm text-gray-700 mb-4">
                          📍 {event.location}
                        </p>
                      </div>
                      {event.link && (
                        <a
                          href={event.link}
                          className="inline-block w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 rounded-full text-center transition"
                        >
                          View Details
                        </a>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
