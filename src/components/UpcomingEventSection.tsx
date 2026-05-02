import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Events() {
  const scrollRef = useRef(null);
  const [selectedType, setSelectedType] = useState("past");
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
    {
      id: "1",
      title: "ByteBash v2 – May Meetup",
      topic: "Docker-Based Deployment Workshop",
      description:
        "Byte Bash v2 May Meetup introduced students to Docker and cloud deployment, focusing on containerization, image building, and modern DevOps workflows.",
      date: "21 May 2025",
      time: "5:30 PM onwards",
      location: "D1 Lecture Hall, Uva Wellassa University",
      category: "Workshop",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375094/9320eacf-6c81-42a0-aa67-8687e9df1da1_piledf.jpg",
      type: "past",
    },
    {
      id: "2",
      title: "ByteBash v2.2 – WordPress Workshop",
      topic: "Introduction to Freelancing through WordPress",
      description:
        "A workshop on building websites using WordPress and starting a freelancing career. Covered themes, plugins, layouts, and portfolio building.",
      date: "23 May 2025",
      time: "5:30 PM onwards",
      location: "E3 Computer Lab, Uva Wellassa University",
      category: "Workshop",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761222752/WhatsApp_Image_2025-10-23_at_18.00.41_15006575_zmnxjv.jpg",
      type: "past",
    },
    {
      id: "3",
      title: "WIE Nexus 2025",
      topic: "Awareness Session on IEEE Women in Engineering",
      description:
        "An awareness session introducing students to IEEE WIE, its purpose, and leadership opportunities for volunteers.",
      date: "29 May 2025",
      time: "07:30 PM",
      location: "Via Zoom Platform",
      category: "Awareness Session",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375193/6b89c766-c092-460e-9f94-b805aaeeb0dc_fksime.jpg",
      type: "past",
    },
    {
      id: "4",
      title: "ZerocyBull Webinar",
      topic: "Cyberbullying and Digital Safety",
      description:
        "A webinar on cyberbullying, online safety, digital hygiene, and legal awareness in Sri Lanka.",
      date: "08 Jun 2025",
      time: "07:30 PM",
      location: "Via Zoom Platform",
      category: "Webinar",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375261/3f43405a-865f-4ff9-a2a7-e81a3679969e_gv5h4h.png",
      type: "past",
    },
    {
      id: "5",
      title: "Sponsorship Mastery – Volunteer Training Series | Session 03",
      topic: "Sponsorship Acquisition & Communication Skills",
      description:
        "Training session teaching volunteers how to approach sponsors, write proposals, and manage event partnerships.",
      date: "15 Jun 2025",
      time: "7:00 PM onwards",
      location: "Via Zoom Platform",
      category: "Training",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375316/24f22a65-c3cd-4a0a-a3e6-717be661b45a_mlmb9f.jpg",
      type: "past",
    },
    {
      id: "6",
      title: "IEEE Open Day 2025",
      topic: "Introduction to IEEE & Student Branch Opportunities",
      description:
        "Welcomed new students and introduced IEEE activities, chapters, benefits, and volunteer roles.",
      date: "6 July 2025",
      time: "10:00 AM",
      location: "Technology Lecture Hall 01, Uva Wellassa University",
      category: "Orientation",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375356/550dbd67-8584-4c4c-bde1-73b081112fa8_jr2k3b.jpg",
      type: "past",
    },
    {
      id: "7",
      title: "IAS Blog",
      topic: "IEEE IAS Blog – Student Article Submission",
      description:
        "A platform for students to publish technical and creative articles, improve writing skills, and win rewards.",
      date: "13 July – 13 August 2025",
      time: "09:13 AM IST (Start)",
      location: "Online",
      category: "Blog",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375391/85d1ae06-50a8-4629-97a2-34750770895e_l44eg0.jpg",
      type: "past",
    },
    {
      id: "8",
      title: "IEEE Stall at UWU Expo 2025",
      topic: "IEEE Awareness & Fundraising",
      description:
        "Hosted a stall at UWU Expo offering food items and raising funds, along with an IEEE awareness campaign.",
      date: "16–19 July 2025",
      time: "10:00 AM – 04:00 PM IST",
      location: "UWU Expo Grounds",
      category: "Expo",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375428/26ca00ca-85af-404a-b4f5-2b7baaa4a8a6_ixnvjl.jpg",
      type: "past",
    },
    {
      id: "9",
      title: "ByteBash v2.3",
      topic: "Industry Insights from Interns",
      description:
        "Interns shared real-world internship experiences, workplace expectations, and essential skills.",
      date: "09 Aug 2025",
      time: "02:00 PM – 05:00 PM",
      location: "Via Zoom Platform",
      category: "Meetup",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1760888399/WhatsApp_Image_2025-08-07_at_19.06.45_67e55e42_efrxme.jpg",
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
      title: "Professional Development & Career-Ready Skills",
      topic: "Career Skills & Mentorship",
      description:
        "A session with IEEE Young Professionals Sri Lanka to help students build essential workplace skills.",
      date: "10 Oct 2025",
      time: "07:30 PM – 09:00 PM",
      location: "Via Zoom Platform",
      category: "Career Development",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375591/FB_IMG_1761069274489_qqgvhf.jpg",
      type: "past",
    },
    {
      id: "12",
      title: "Mid-Term Full Executive Committee Meeting",
      topic: "Committee Progress Review",
      description:
        "Reviewed term progress, challenges, and strategic planning for upcoming months.",
      date: "13 Oct 2025",
      time: "08:00 PM – 10:00 PM",
      location: "Via Google Meet",
      category: "Meeting",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761223744/comming_soon_dmcpma.jpg",
      type: "past",
    },
    {
      id: "13",
      title: "IEEE Day Celebration 2025 – Phase 1 Webinar",
      topic: "IEEE Volunteering & Global Opportunities",
      description:
        "Webinar featuring speakers discussing IEEE leadership, membership development, and awards.",
      date: "24 Oct 2025",
      time: "08:00 PM onwards",
      location: "Via Zoom Platform",
      category: "Webinar",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375649/IMG-20251117-WA0017_k9xkuw.jpg",
      type: "past",
    },
    {
      id: "14",
      title: "IEEE Day Celebration 2025 – Phase 2 Gathering",
      topic: "IEEE Day Celebration",
      description:
        "An in-person gathering with cake-cutting, networking, and reflections on achievements.",
      date: "24 Oct 2025",
      time: "04:30 PM onwards",
      location: "D1 Lecture Hall, Uva Wellassa University",
      category: "Celebration",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375693/IMG-20251117-WA0015_fewgou.jpg",
      type: "past",
    },
    {
      id: "15",
      title: "IEEE Xtreme 19.0",
      topic: "Global 24-Hour Coding Competition",
      description:
        "Students participated in the 24-hour global IEEE Xtreme coding competition, showcasing problem-solving and teamwork.",
      date: "25 Oct 2025",
      time: "From 07:30 PM onwards",
      location: "D1, D2, D3 Lecture Halls, Uva Wellassa University",
      category: "Competition",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1763375726/FB_IMG_1763365627752_klus8m.jpg",
      type: "past",
    },
    {
      id: "16",
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
          {["past", "upcoming"].map((type) => (
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
