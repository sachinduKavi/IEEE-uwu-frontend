import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import TeamPhoto from "../../assets/csChapter/team.jpg";

export default function OurTeam() {
  const [isSenior, setIsSenior] = useState(true);

  const seniorMembers = [
    {
      name: "Ravindu Kavishka Dilshan",
      role: "Chairperson",
      email: "ravindukd@gmail.com",
      linkedin: "https://www.linkedin.com/in/ravindukd/",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204131/IMG_2180_-_Ravindu_Kavishka_ovpncw_copy_lnz4q2.webp",
    },
    {
      name: "Isuri Manodya Panamaldeniye",
      role: "Secretary",
      email: "manodyaisuri@gmail.com",
      linkedin: "http://www.linkedin.com/in/isuri-panamaldeniye-66ba64328",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204109/WhatsApp_Image_2025-10-22_at_22.40.02_cf557fe5_-_Isuri_Manodya_copy_z7zekg.webp",
    },
    {
      name: "Rathnayaka Mudiyanselage Bhagya Lakshan Madushanka",
      role: "Treasurer",
      email: "cst21066@std.uwu.ac.lk",
      linkedin: "https://www.linkedin.com/in/bhagya-lakshan-3b7a07245",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204108/FB_IMG_1757090786319_-_CST21066_MADHUSHANKA_R.M.B.L__copy_q1u9nw.webp",
    },
    {
      name: "Thinuja Hettiarachchi",
      role: "Webmaster",
      email: "thinujahettiarachchi@gmail.com",
      linkedin: "http://linkedin.com/in/thinuja-hettiarachchi",
      image:
        "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204128/IMG_6474_-_Thinuja_hettiarachchi1_qzsiv5.webp",
    },
    {
      name: "Thilina Adikari",
      role: "Public Visibility Lead",
      email: "thilisupun00011@gmail.com",
      linkedin: "http://www.linkedin.com/in/thilina-adikari",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204110/Thilina_Adikari_-_Thilina_Adikari_copy_b5eln6.webp",
    },
    {
      name: "Kavinda Chadrasiri",
      role: "Membership Development Lead",
      email: "kavinadcc@gmail.com",
      linkedin: "http://www.linkedin.com/in/kavinda-chandrasiri",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761206519/Kavinda_-_Kavinda_Chandrasiri_copy_nn8o8h.webp",
    },
    {
      name: "Rashmi Ruwanthika Athukorala",
      role: "Editorial Lead",
      email: "rashmiathukorala11@gmail.com",
      linkedin: "http://www.linkedin.com/in/rashmi-ruwanthika-athukorala-16560322b",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204111/6_-_Rashmi_Ruwanthika_Athukorala_copy_o5l3jk.webp",
    },
  ];

  const juniorMembers = [
    {
      name: "A N S L Alahapperuma",
      role: "Vice Chairperson",
      email: "nadunsawumya88@gmail.com",
      linkedin: "https://www.linkedin.com/in/lakshan-alahapperuma-9a038a218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvRR2JvOxTzeOx%2FBZsjQW4Q%3D%3D",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204113/IMG_4312_-_A.N.S._Lakshan_copy_hnnu81.webp",
    },
    {
      name: "P D S H K Gunathilaka",
      role: "Assistent Secretary",
      email: "iit22017@std.uwu.ac.lk",
      linkedin: "https://www.linkedin.com/in/samudi-himansha-085732309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204115/IMG_1551_-_samudi_himansha_copy_riizal.webp",
    },
    {
      name: "I K D T Dhananjaya Premakumara",
      role: "Public Visibility Member",
      email: "tharakadhananjaya11@gmail.com",
      linkedin: "http://www.linkedin.com/in/tharaka-dhananjaya",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204117/IMG_4873_-_Dhananjaya_Premakumara_copy_qn3ejm.webp",
    },
    {
      name: "K G D S Swarnahansa",
      role: "Public Visibility Member",
      email: "swarnahansa2@gmail.com",
      linkedin: "http://www.linkedin.com/in/dhananjith-sathruwan-swarnahansa-05b466308",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204119/ID_-_Swarna_hansa_copy_yscgw1.webp",
    },
    {
      name: "W A K Dihansi Wickramasinghe",
      role: "Editorial Member",
      email: "cst22038@std.uwu.ac.lk",
      linkedin: "http://linkedin.com/in/dihansi-wickramasinghe-55ba1a341",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204121/IMG_9466_-_Kaveesha_Dihansi_copy_pwqvlc.webp",
    },
    {
      name: "I H Tinishi Dileka",
      role: "Editorial Member",
      email: "iit22032@std.uwu.ac.lk",
      linkedin: "https://www.linkedin.com/in/tinishi-hewage-7888aa30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204123/_MG_6958_-_Tinishi_hewage_copy_zio7so.webp",
    },
    {
      name: "K K S Malshan",
      role: "Membership Development Member",
      email: "sayurumalshankks@gmail.com",
      linkedin: "http://www.linkedin.com/in/sayuru-malshan",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761204125/IMG_9248_-_sayuru_malshan_copy_jlw5ne.webp",
    },
    {
      name: "K V P Naveen Madhawa",
      role: "Membership Development Member",
      email: "naveenmadhawa1129@gmail.com",
      linkedin: "http://www.linkedin.com/in/naveen-madhawa-607212390",
      image: "https://res.cloudinary.com/dmue6alcq/image/upload/v1761214573/new1_-_Naveen_Madhawa_copy_r3tck5.webp",
    },
  ];

  const currentTeam = isSenior ? seniorMembers : juniorMembers;

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
          className="text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-10"
        >
          Our Team
        </motion.h2>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet our dedicated leaders and creative minds driving innovation
          within our IEEE Computer Society Chapter.
        </p>

        {/* Section Header with Arrow Controls */}
        <div className="flex justify-between items-center mb-8 px-4">
          <h3 className="text-2xl font-semibold text-yellow-700">
            {isSenior ? "Senior Committee" : "Junior Committee"}
          </h3>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSenior(true)}
              disabled={isSenior}
              className={`p-2 rounded-full transition ${
                isSenior
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-yellow-600 hover:bg-yellow-100"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsSenior(false)}
              disabled={!isSenior}
              className={`p-2 rounded-full transition ${
                !isSenior
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-yellow-600 hover:bg-yellow-100"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Team Members */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={isSenior ? "senior" : "junior"}
              initial={{ opacity: 0, x: isSenior ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isSenior ? 100 : -100 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8"
            >
              {currentTeam.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 180 }}
                  className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden group transition-all duration-500"
                >
                  {/* Image Section */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={
                        member.image === "sample.jpg" ? TeamPhoto : member.image
                      }
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay Role Label */}
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white py-3 px-4">
                      <p className="text-sm sm:text-base font-semibold tracking-wide bg-white/20 backdrop-blur-sm w-fit sm:w-auto px-3 py-1 rounded-md shadow-md">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>

                    {/* Decorative Line */}
                    <div className="w-10 h-[3px] bg-yellow-400 rounded-full mb-3 group-hover:w-16 transition-all duration-300"></div>

                    {/* Contact Icons */}
                    <div className="flex space-x-4 mt-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 bg-gray-100 rounded-full hover:bg-yellow-100 text-gray-600 hover:text-yellow-700 transition"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full hover:bg-yellow-100 text-gray-600 hover:text-yellow-700 transition"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Bottom Highlight Border */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
