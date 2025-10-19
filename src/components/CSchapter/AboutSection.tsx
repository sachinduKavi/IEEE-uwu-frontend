import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { value: "500+", label: "Active Members" },
    { value: "50+", label: "Events Per Year" },
    { value: "15+", label: "Awards Won" },
    { value: "100+", label: "Workshops Held" },
  ];

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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
        </motion.div>
      </div>
    </section>
  );
}
