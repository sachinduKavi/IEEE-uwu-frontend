import { motion } from "framer-motion";
import { Globe, Database , FileSearch } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      title: "IEEE CS Portal",
      description:
        "Access the official IEEE Computer Society website for global resources and publications.",
      buttonText: "Visit",
      link: "https://www.computer.org/",
      icon: <Globe className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "IEEE Xplore",
      description:
        "Access millions of technical documents and research papers.",
      buttonText: "Explore",
      link: "https://ieeexplore.ieee.org/",
      icon: <FileSearch className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "IEEE DataPort",
      description:
        "Explore and share datasets across multiple research disciplines through IEEE DataPort.",
      buttonText: "Visit",
      link: "https://ieee-dataport.org/",
      icon: <Database className="w-8 h-8 text-yellow-600" />,
    },
  ];

  return (
    <section
      id="resources"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-10"
        >
          Resources
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Explore key resources and learning platforms offered by the IEEE Computer Society.
        </motion.p>

        {/* Resource Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {resources.map((res, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{res.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {res.title}
              </h3>
              <p className="text-gray-600 mb-6">{res.description}</p>

              {res.buttonText === "Coming Soon" ? (
                <button
                  disabled
                  className="bg-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-full cursor-not-allowed"
                >
                  Coming Soon
                </button>
              ) : (
                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
                >
                  {res.buttonText}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
