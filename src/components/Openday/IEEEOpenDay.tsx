import { useState } from "react"
import Header from "./Header"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import TeamSection from "./TeamSection"
import GallerySection from "./GallerySection"
import Footer from "./Footer"
import Lightbox from "./Lightbox"

import InteractiveTechPanel from "./InteractiveTechPanel.tsx";

export default function IEEEOpenDay() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <div className="min-h-screen bg-white bg-gradient-to-br from-blue-50 to-indigo-100">
            <Header />
            <HeroSection />
            <AboutSection />
            <TeamSection />
            <GallerySection />
            <Lightbox selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            <InteractiveTechPanel/>
            <Footer />
        </div>
    )
}