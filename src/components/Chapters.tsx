import { Card, CardFooter, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import CSGroupImage from '../assets/images/cs.jpg'
import WIEGroupImage from '../assets/images/wie.jpg'
import RASGroupImage from '../assets/images/ras.jpg'
import IASGroupImage from '../assets/images/ias.jpg'

export default function ChaptersSection() {
  const chapters = [
    {
      name: "Industrial Applications Society",
      acronym: "IAS",
      description: "Focuses on advancing the theory and practice of electrical and electronic engineering in the development and application of industrial systems.",
      image: IASGroupImage,
      alt: "Industrial automation and manufacturing systems",
    },
    {
      name: "Robotics and Automation Society",
      acronym: "RAS",
      description: "Dedicated to promoting innovation, education, and collaboration in robotics and automation technologies.",
      image: RASGroupImage,
      alt: "Robotics and automation technology",
    },
    {
      name: "Computer Society",
      acronym: "CS",
      description: "Engages students in computing technologies, software engineering, and emerging digital fields.",
      image: CSGroupImage,
      alt: "Computer science and software engineering",
    },
    {
      name: "Women in Engineering",
      acronym: "WiE",
      description: "Empowers women in engineering and fosters diversity and inclusion through events, mentorship, and advocacy.",
      image: WIEGroupImage,
      alt: "Women in engineering collaboration and mentorship",
    },
  ]

  // Enhanced color palette
  const colors = {
    primary: "#005596",
    primaryHover: "#003d6b",
    accent: "#e6f0f8",
    text: "#2d3748",
    textLight: "#4a5568",
    cardHover: "#f8fafc",
    border: "#e2e8f0"
  }

  return (
      <section id="chapters" className="py-12 md:py-20 bg-white">
        <div className="w-[90%] max-w-7xl px-4 mx-auto">
          {/* Header with improved spacing */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text }}>Our Chapters</h2>
            <div className="w-20 h-1.5 mx-auto mb-6 rounded-full" style={{
              backgroundColor: colors.primary,
              backgroundImage: "linear-gradient(to right, #005596, #0085ca)"
            }}></div>
            <p className="text-lg md:text-xl mx-auto max-w-3xl leading-relaxed" style={{ color: colors.textLight }}>
              Explore our specialized IEEE chapters that focus on different areas of engineering and technology.
            </p>
          </div>

          {/* Chapters Grid - optimized for 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {chapters.map((chapter, index) => (
                <Card
                    key={index}
                    className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-50 border border-gray-100 hover:border-blue-200 group flex flex-col overflow-hidden"
                    style={{ backgroundColor: "white" }}
                >
                  {/* Chapter Image with gradient overlay */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                    <img
                        src={chapter.image}
                        alt={chapter.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-20">
                  <span
                      className="text-xs font-bold text-white px-3 py-1.5 rounded-full shadow-lg"
                      style={{
                        backgroundColor: colors.primary,
                        boxShadow: "0 2px 8px rgba(0, 85, 150, 0.3)"
                      }}
                  >
                    {chapter.acronym}
                  </span>
                    </div>
                  </div>

                  <CardContent className="p-6 flex-grow">
                    <h3
                        className="text-xl font-bold mb-3 transition-colors group-hover:text-[#005596]"
                        style={{ color: colors.text }}
                    >
                      {chapter.name}
                    </h3>
                    <p
                        className="mb-4 text-sm leading-relaxed text-gray-600"
                    >
                      {chapter.description}
                    </p>
                  </CardContent>

                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button
                        className="w-full transition-all duration-300 hover:scale-[1.02] group-hover:shadow-md"
                        style={{
                          backgroundColor: colors.primary,
                          color: "white",
                        }}
                    >
                      <span className="group-hover:underline">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
            ))}
          </div>

          {/* Enhanced Join Chapters CTA */}
          <div className="mt-16 md:mt-20 text-center">
            <div
                className="rounded-xl p-8 md:p-12 mx-auto max-w-4xl relative overflow-hidden border-0"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent} 0%, #f0f7ff 100%)`,
                  boxShadow: "0 4px 20px rgba(0, 85, 150, 0.08)"
                }}
            >
              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: colors.primary }}></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: colors.primary }}></div>
              <div className="absolute right-20 top-1/2 w-16 h-16 rounded-full opacity-15" style={{ backgroundColor: colors.primary }}></div>

              <div className="relative z-10">
                <h3
                    className="text-2xl md:text-3xl font-bold mb-6"
                    style={{ color: colors.text }}
                >
                  Ready to Join Our Community?
                </h3>
                <p
                    className="mb-8 mx-auto max-w-2xl text-base md:text-lg leading-relaxed"
                    style={{ color: colors.textLight }}
                >
                  Become a member of our IEEE Student Branch and unlock opportunities to grow, learn, and connect with professionals across all our specialized chapters.
                </p>
                <Button
                    className="transition-all duration-300 hover:scale-[1.02] px-8 py-6 text-base font-medium hover:shadow-md"
                    style={{
                      backgroundColor: colors.primary,
                      color: "white",
                    }}
                >
                  Join Now - It's Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}