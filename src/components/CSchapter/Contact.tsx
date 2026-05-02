import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-yellow-600 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-700 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have questions or want to learn more about our chapter? We'd love to
          hear from you!
        </motion.p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3 bg-yellow-100 p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Mail className="w-6 h-6 text-yellow-600" />
            <a
              href="mailto:csieeeuwusb@gmail.com"
              className="text-gray-800 font-medium hover:text-yellow-600 transition"
            >
              csieeeuwusb@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
