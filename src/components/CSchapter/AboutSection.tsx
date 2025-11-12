import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function AboutSection() {
  // const stats = [
  //   { value: "500+", label: "Active Members" },
  //   { value: "50+", label: "Events Per Year" },
  //   { value: "15+", label: "Awards Won" },
  //   { value: "100+", label: "Workshops Held" },
  // ];

  const advisor = {
    name: "Mr. Dimuth Pathirana",
    email: "dimuth@uwu.ac.lk",
    linkedin: "https://www.linkedin.com/in/dimuth-prasanna/",
    profile:
      "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204911/478300820_122107992356750010_5357843333614905723_n_copy_mdlpmg.webp",
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-6"
        >
          About Us
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-16"
        >
          <p className="mb-6">
            The{" "}
            <span className="font-semibold text-yellow-600">
              IEEE Computer Society
            </span>{" "}
            is a global hub for innovation, knowledge, and collaboration in
            computing and engineering. Our student chapter connects aspiring
            technologists with real-world opportunities, empowering the next
            generation of innovators.
          </p>

          <p>
            We host{" "}
            <span className="font-semibold">
              workshops, hackathons, and seminars
            </span>{" "}
            that help students sharpen their skills in AI, cybersecurity, and
            software development, while fostering leadership and teamwork across
            disciplines.
          </p>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-lg p-8 cursor-default"
            >
              <h3 className="text-5xl font-extrabold text-yellow-500">
                {stat.value}
              </h3>
              <p className="mt-3 text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Chapter Advisor Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-yellow-700 mb-10 tracking-wide"
        >
          Chapter Advisor
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative max-w-3xl mx-auto bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl shadow-2xl p-10 flex flex-col sm:flex-row items-center text-left gap-8 border border-yellow-200 hover:transition-all duration-500"
        >
          {/* Decorative Glow Circle */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-200/20 to-transparent blur-3xl -z-10"></div>

          {/* Advisor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-[3px]">
              <img
                src={advisor.profile}
                alt={advisor.name}
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
          </motion.div>

          {/* Advisor Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-yellow-700 mb-2">
              {advisor.name}
            </h3>

            {/* Email */}
            <a
              href={`mailto:${advisor.email}`}
              className="text-yellow-700 font-medium hover:underline block mb-3"
            >
              {advisor.email}
            </a>

            {/* LinkedIn Icon */}
            <a
              href={advisor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-600 text-white hover:bg-yellow-700 transition-transform transform hover:scale-110 shadow-md"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
