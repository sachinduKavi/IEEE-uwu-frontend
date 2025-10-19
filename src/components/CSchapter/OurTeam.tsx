import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import TeamPhoto from "../../assets/csChapter/team.jpg";

export default function OurTeam() {
  const scrollRef = useRef(null);

  const teamMembers = [
    {
      name: "Thinuja Hettiarachchi",
      role: "Chairperson",
      email: "thinuja@ieee.org",
      linkedin: "https://www.linkedin.com/in/thinuja-hettiarachchi/",
    },
    {
      name: "Sandeepa Perera",
      role: "Vice Chair",
      email: "sandeepa@ieee.org",
      linkedin: "https://www.linkedin.com/in/sandeepa-perera/",
    },
    {
      name: "Dilushi Ranasinghe",
      role: "Secretary",
      email: "dilushi@ieee.org",
      linkedin: "https://www.linkedin.com/in/dilushi-ranasinghe/",
    },
    {
      name: "Kavindu Weerasinghe",
      role: "Treasurer",
      email: "kavindu@ieee.org",
      linkedin: "https://www.linkedin.com/in/kavindu-weerasinghe/",
    },
    {
      name: "Ravindu Jayasuriya",
      role: "Technical Lead",
      email: "ravindu@ieee.org",
      linkedin: "https://www.linkedin.com/in/ravindu-jayasuriya/",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 relative"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-10"
        >
          Our Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Meet our dedicated leaders and creative minds driving innovation within
          our IEEE Computer Society Chapter.
        </motion.p>

        {/* Scroll Buttons + Cards */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-yellow-600 rounded-full p-3 shadow-lg hover:bg-yellow-100 transition opacity-0 group-hover:opacity-100 z-10"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-8 pb-4 scroll-smooth snap-x snap-mandatory px-2 hide-scrollbar"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex-shrink-0 w-64 h-80 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 p-6 flex flex-col items-center justify-center text-center snap-center transition-all duration-300"
              >
                <div className="w-28 h-28 rounded-full border-4 border-yellow-400 shadow-sm mb-4 overflow-hidden">
                  <img
                    src={TeamPhoto}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-medium mt-1 text-sm">
                  {member.role}
                </p>

                <div className="flex space-x-4 mt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-500 hover:text-yellow-600 transition duration-300"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-yellow-600 transition duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-yellow-600 rounded-full p-3 shadow-lg hover:bg-yellow-100 transition opacity-0 group-hover:opacity-100 z-10"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
