import { Card, CardContent } from "./ui/card"
import { Target, Eye, Award } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion.tsx"
import ChairImage from '../assets/images/asiri.jpg'
import SecImage from '../assets/images/chandi.jpg'
import TreasurerImage from '../assets/images/raeese.jpg'
import WebmasterImage from '../assets/images/sachindu.jpg'

export default function AboutSection() {
  const teamMembers = [
    {
      name: "Asiri Weerasinghe",
      role: "Student Branch Chair",
      image: ChairImage,
      description: "Leads and manages all branch activities, ensuring smooth operations and collaboration with members and external IEEE bodies.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Chandima Jayawardana",
      role: "Secretary",
      image: SecImage,
      description: "Maintains records, correspondence, and coordination; supports compliance with constitution and ensures smooth transitions.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Raees ahamed",
      role: "Treasurer",
      image: TreasurerImage,
      description: "Manages finances, prepares budgets and reports, oversees fundraising, and ensures financial transparency and accuracy.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sachindu Kavishka",
      role: "Webmaster",
      image: WebmasterImage,
      description: "Maintains website and social media, leads web teams, and promotes events online.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
  ]

  return (
      <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer()}
              className="text-center mb-16"
          >
            <motion.p
                variants={fadeIn('up', 'spring', 0.2, 1)}
                className="text-lg text-[#005596] font-semibold mb-2"
            >
              Who We Are
            </motion.p>
            <motion.h2
                variants={fadeIn('up', 'spring', 0.4, 1)}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              About Our <span className="text-[#005596]">IEEE</span> Branch
            </motion.h2>
            <motion.p
                variants={fadeIn('up', 'spring', 0.6, 1)}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We are a dynamic community of engineering and technology students committed to professional development,
              technical excellence, and making a positive impact on society.
            </motion.p>
          </motion.div>

          {/* Mission, Vision, Values */}
          <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer()}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={fadeIn('right', 'spring', 0.2, 1)}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#005596] to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 flex-1">
                    To foster technological innovation and professional development among students while advancing IEEE's
                    core mission of advancing technology for humanity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn('up', 'spring', 0.4, 1)}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#005596] to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Eye className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 flex-1">
                    To be the leading student organization that bridges the gap between academic learning and industry
                    practice, preparing students for successful careers in technology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn('left', 'spring', 0.6, 1)}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#005596] to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                  <p className="text-gray-600 flex-1">
                    Excellence, integrity, innovation, and collaboration guide everything we do. We believe in the power of
                    technology to solve global challenges.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Team Members */}
          <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer()}
          >
            <motion.div
                variants={fadeIn('up', 'spring', 0.2, 1)}
                className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The passionate individuals who drive our branch forward with dedication and innovation
              </p>
            </motion.div>

            <motion.div
                variants={staggerContainer()}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                  <motion.div
                      key={index}
                      variants={fadeIn('up', 'spring', index * 0.2, 0.8)}
                      whileHover={{ scale: 1.03 }}
                      className="h-full"
                  >
                    <Card className="text-center group hover:shadow-xl transition-all duration-300 border border-blue-100 h-full flex flex-col">
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="relative mx-auto mb-4 w-32 h-32">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#005596] to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                          <img
                              src={member.image}
                              alt={member.name}
                              className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-white z-10"
                          />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                        <p className="text-[#005596] font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 text-sm mb-4 flex-1">{member.description}</p>
                        <div className="flex justify-center space-x-3">
                          <a href={member.social.linkedin} className="text-blue-500 hover:text-blue-700 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <a href={member.social.twitter} className="text-blue-400 hover:text-blue-600 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}