import { motion } from "framer-motion";
import CSGroupImage from "../../assets/csChapter/cs.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${CSGroupImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 text-white mb-20">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-5xl font-bold mb-4"
        >
          Welcome to IEEE Computer Society
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg mb-8 leading-relaxed text-gray-100"
        >
          Advancing technology for humanity. Join us in exploring the frontiers
          of computing, networking with professionals, and shaping the future of
          technology.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#membership"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Become a Member
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#events"
            className="border border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            View Events
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
