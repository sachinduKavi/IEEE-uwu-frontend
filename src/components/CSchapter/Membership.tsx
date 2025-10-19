import { motion } from "framer-motion";

export default function Membership() {
  const benefits = [
    "Access to IEEE Xplore Digital Library",
    "Networking opportunities with professionals",
    "Technical workshops and seminars",
    "Career development resources",
    "Leadership opportunities",
    "Discounts on conferences and publications",
  ];

  return (
    <section
      id="membership"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-8"
        >
          Membership Benefits
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Why Join IEEE Computer Society?
        </motion.p>

        {/* Highlighted Yellow Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-3xl shadow-xl py-12 px-8 sm:px-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, x: 4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg rounded-2xl p-6 border border-yellow-100"
              >
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                  {benefit}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Join Now Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-yellow-100 text-yellow-700 font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
            >
              Join Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
