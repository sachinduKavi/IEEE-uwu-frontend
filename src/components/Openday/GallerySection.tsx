import type {GalleryImage} from "../../types/types";

const galleryImages: GalleryImage[] = [
    { src: "/placeholder.svg?height=300&width=400", caption: "IEEE Workshop 2024" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Student Presentations" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Networking Session" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Technical Exhibition" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Award Ceremony" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Team Building Activities" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Guest Speaker Session" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Innovation Showcase" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Student Projects" },
];

export default function GallerySection({ setSelectedImage }: { setSelectedImage: (src: string | null) => void }) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">Event Gallery</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Take a look at some memorable moments from our previous IEEE events and activities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <div className="aspect-[4/3] relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h4 className="text-lg font-semibold">{image.caption}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}