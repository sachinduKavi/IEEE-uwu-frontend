import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Events() {
  const scrollRef = useRef(null);
  const [selectedType, setSelectedType] = useState("upcoming");
  const [showArrows, setShowArrows] = useState(false);

  const colors = {
    primary: "#005596",
    primaryHover: "#003d6b",
    accent: "#e6f0f8",
    text: "#2d3748",
    textLight: "#4a5568",
    cardHover: "#f8fafc",
    border: "#e2e8f0",
  };

  const allEvents = [
    // === Upcoming Events ===
    {
      id: "1",
      title: "UvaXtreem v2",
      description:
        "UvaXtreme is a hackathon by the IEEE Student Branch of Uva Wellassa University that promotes innovation, teamwork, and coding skills.",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1760888497/WhatsApp_Image_2025-10-05_at_18.09.35_d1ca3e95_tp3wu2.jpg",
      type: "upcoming",
    },
    {
      id: "2",
      title: "Wellassata AI",
      description:
        "A workshop exploring Artificial Intelligence and its potential to shape the future.",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761223744/comming_soon_dmcpma.jpg",
      type: "upcoming",
    },
    {
      id: "3",
      title: "School To Tech",
      description:
        "An outreach program introducing technology and innovation to school students.",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761223744/comming_soon_dmcpma.jpg",
      type: "upcoming",
    },

    // === Past Events ===
    {
      id: "7",
      title: "Cloud Workshop",
      date: "May 21, 2025",
      time: "05:00 PM - 08:00 PM",
      location: "D1 Lecture Hall",
      link: "#",
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
      link: "#",
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
      link: "#",
      category: "Workshop",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761222752/WhatsApp_Image_2025-10-23_at_18.00.41_15006575_zmnxjv.jpg",
      type: "past",
    },
  ];

  const upcomingEvents = allEvents.filter((e) => e.type === "upcoming");
  const pastEvents = allEvents.filter((e) => e.type === "past");
  const eventsToShow =
    selectedType === "upcoming" ? upcomingEvents : pastEvents;

  const scroll = (direction) => {
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
    <section id="upcoming-event" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: colors.text }}
        >
          Events
        </h2>
        <div
          className="w-20 h-1.5 mx-auto mb-6 rounded-full"
          style={{
            backgroundImage: "linear-gradient(to right, #005596, #0085ca)",
          }}
        ></div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10 space-x-4">
          {["upcoming", "past"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full font-semibold border-2 transition-all`}
              style={{
                backgroundColor:
                  selectedType === type ? colors.primary : "#fff",
                color: selectedType === type ? "#fff" : colors.text,
                borderColor:
                  selectedType === type ? colors.primary : colors.border,
              }}
            >
              {type === "upcoming" ? "Upcoming" : "Past"}
            </button>
          ))}
        </div>

        {/* Scroll Arrows */}
        {showArrows && (
          <>
            <button
              onClick={() => scroll("left")}
              className="hidden md:block absolute left-10 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-[#e6f0f8] transition z-10"
            >
              <ChevronLeft
                className="w-6 h-6"
                style={{ color: colors.primary }}
              />
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-[#e6f0f8] transition z-10"
            >
              <ChevronRight
                className="w-6 h-6"
                style={{ color: colors.primary }}
              />
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
                className="w-[300px] h-[420px] bg-white border rounded-xl shadow-md hover:shadow-lg transition duration-300 flex-shrink-0 flex flex-col"
                style={{
                  borderColor: colors.border,
                  color: colors.text,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {selectedType === "upcoming" ? (
                  <div className="flex flex-col flex-1 p-5">
                    {event.image && (
                      <div
                        className="w-full h-[180px] rounded-lg overflow-hidden mb-4 border"
                        style={{ borderColor: colors.border }}
                      >
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: colors.primary }}
                    >
                      {event.title}
                    </h3>
                    <p className="text-sm" style={{ color: colors.textLight }}>
                      {event.description}
                    </p>
                  </div>
                ) : (
                  <>
                    <div
                      className="w-full h-[200px] rounded-t-xl overflow-hidden border-b"
                      style={{ borderColor: colors.border }}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <span
                          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
                          style={{
                            backgroundColor: colors.accent,
                            color: colors.primary,
                          }}
                        >
                          {event.category}
                        </span>
                        <h3
                          className="text-lg font-semibold mb-1"
                          style={{ color: colors.primary }}
                        >
                          {event.title}
                        </h3>
                        <p className="text-sm" style={{ color: colors.textLight }}>
                          📅 {event.date}
                        </p>
                        <p className="text-sm" style={{ color: colors.textLight }}>
                          ⏰ {event.time}
                        </p>
                        <p className="text-sm mb-4" style={{ color: colors.textLight }}>
                          📍 {event.location}
                        </p>
                      </div>
                      {event.link && (
                        <a
                          href={event.link}
                          className="inline-block w-full font-semibold py-2 rounded-full text-center transition"
                          style={{
                            backgroundColor: colors.primary,
                            color: "#fff",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              colors.primaryHover)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              colors.primary)
                          }
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
