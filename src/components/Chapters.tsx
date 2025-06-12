import { Card, CardFooter, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function ChaptersSection() {
  const chapters = [
    {
      name: "Industrial Applications Society",
      acronym: "IAS",
      description: "Focuses on advancing the theory and practice of electrical and electronic engineering in the development and application of industrial systems.",
      image: "/placeholder.svg?height=200&width=300",
      alt: "Industrial automation and manufacturing systems",
    },
    {
      name: "Robotics and Automation Society",
      acronym: "RAS",
      description: "Dedicated to promoting innovation, education, and collaboration in robotics and automation technologies.",
      image: "/placeholder.svg?height=200&width=300",
      alt: "Robotics and automation technology",
    },
    {
      name: "Computer Society",
      acronym: "CS",
      description: "Engages students in computing technologies, software engineering, and emerging digital fields.",
      image: "/placeholder.svg?height=200&width=300",
      alt: "Computer science and software engineering",
    },
    {
      name: "Women in Engineering",
      acronym: "WiE",
      description: "Empowers women in engineering and fosters diversity and inclusion through events, mentorship, and advocacy.",
      image: "/placeholder.svg?height=200&width=300",
      alt: "Women in engineering collaboration and mentorship",
    },
    {
      name: "Power and Energy Society",
      acronym: "PES",
      description: "Focused on the scientific and engineering knowledge about electric power and energy.",
      image: "/placeholder.svg?height=200&width=300",
      alt: "Power systems and renewable energy technology",
    },
  ]

  // Color palette
  const colors = {
    primary: "#005596",
    primaryHover: "#003d6b",
    accent: "#e6f0f8",
    text: "#2d3748",
    textLight: "#4a5568"
  }

  return (
    <section id="chapters" className="py-12 md:py-20 bg-white">
      <div className="w-[90%] px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.text }}>Our Chapters</h2>
          <div className="w-20 h-1 mx-auto my-4" style={{ backgroundColor: colors.primary }}></div>
          <p className="text-lg md:text-xl mx-auto max-w-3xl" style={{ color: colors.textLight }}>
            Explore our specialized IEEE chapters that focus on different areas of engineering and technology.
          </p>
        </div>

        {/* Chapters Row */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
            <div className="flex space-x-6 px-4">
              {chapters.map((chapter, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] xl:w-[23vw] snap-start"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 hover:border-[#005596] group">
                    {/* Chapter Image */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={chapter.image || "/placeholder.svg"}
                        alt={chapter.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <span 
                          className="text-sm font-bold text-white px-3 py-1 rounded-full"
                          style={{ backgroundColor: colors.primary }}
                        >
                          {chapter.acronym}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 
                        className="text-xl font-bold mb-3 transition-colors"
                        style={{ color: colors.text }}
                      >
                        {chapter.name}
                      </h3>
                      <p 
                        className="mb-4 text-sm leading-relaxed"
                        style={{ color: colors.textLight }}
                      >
                        {chapter.description}
                      </p>
                    </CardContent>

                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button 
                        className="w-full transition-colors"
                        style={{
                          backgroundColor: colors.primary,
                          color: "white"
                        }}
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Chapters CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div 
            className="rounded-xl p-8 md:p-12 mx-auto max-w-4xl"
            style={{ 
              background: `linear-gradient(to right, ${colors.accent}, #f7fafc)`,
              border: `1px solid ${colors.accent}`
            }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              Interested in Joining Our Chapters?
            </h3>
            <p 
              className="mb-6 mx-auto max-w-2xl"
              style={{ color: colors.textLight }}
            >
              Become a member of our IEEE Student Branch and get involved with any of our specialized chapters. Gain
              access to resources, events, and a global network of professionals.
            </p>
            <Button 
              style={{
                backgroundColor: colors.primary,
                color: "white",
              }}
            >
              Become a Member
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}