import { Button } from "antd"
import { ArrowRight, Users, Calendar, Code } from "lucide-react"
import { Link } from "react-router"

export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to <span className="text-[#005596]">IEEE</span> Student Branch
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Empowering the next generation of engineers and technologists through innovation, collaboration, and
              professional development. Join our community of passionate students advancing technology for humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-[#005596] hover:bg-blue-700">
                <a href="#about" className="flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button>
                <a href="#contact">Join Us Today</a>
              </Button>
            </div>
          </div>

          {/* Hero Image/Stats */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#005596] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#005596] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Events Hosted</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#005596] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#005596] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Years</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-sm text-[#005AFF] font-medium mb-2">March 15, 2024</div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Workshop Registration Open</h3>
              <p className="text-gray-600 text-sm">
                Join our upcoming workshop on Machine Learning fundamentals and practical applications.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-sm text-[#005AFF] font-medium mb-2">March 10, 2024</div>
              <h3 className="font-semibold text-gray-900 mb-2">New Project Showcase</h3>
              <p className="text-gray-600 text-sm">
                Check out our latest IoT project that won the regional competition.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-sm text-[#005AFF] font-medium mb-2">March 5, 2024</div>
              <h3 className="font-semibold text-gray-900 mb-2">Industry Speaker Series</h3>
              <p className="text-gray-600 text-sm">
                Tech leaders from major companies will share insights on career development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
