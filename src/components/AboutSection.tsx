import { Card, CardContent } from "./ui/card"
import { Target, Eye, Award } from "lucide-react"

export default function AboutSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Branch Chair",
      image: "/placeholder.svg?height=200&width=200",
      description: "Computer Science senior passionate about AI and machine learning.",
    },
    {
      name: "Michael Chen",
      role: "Vice Chair",
      image: "/placeholder.svg?height=200&width=200",
      description: "Electrical Engineering student focused on renewable energy systems.",
    },
    {
      name: "Emily Rodriguez",
      role: "Secretary",
      image: "/placeholder.svg?height=200&width=200",
      description: "Software Engineering student with expertise in web development.",
    },
    {
      name: "David Kim",
      role: "Treasurer",
      image: "/placeholder.svg?height=200&width=200",
      description: "Mechanical Engineering student interested in robotics and automation.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our Branch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a dynamic community of engineering and technology students committed to professional development,
            technical excellence, and making a positive impact on society.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#005596] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To foster technological innovation and professional development among students while advancing IEEE's
                core mission of advancing technology for humanity.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#005596] rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading student organization that bridges the gap between academic learning and industry
                practice, preparing students for successful careers in technology.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#005596] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Excellence, integrity, innovation, and collaboration guide everything we do. We believe in the power of
                technology to solve global challenges.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Members */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-lg text-gray-600">Dedicated leaders working to make our branch a thriving community</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-[#005596] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
