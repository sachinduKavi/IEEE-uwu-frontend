import { useState } from "react"
import Header from "./Header"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import TeamSection from "./TeamSection"
import GallerySection from "./GallerySection"
import Footer from "./Footer"
import Lightbox from "./Lightbox"
import GameSection from "./GameSection.tsx";
import QuizAccessPanel from "./QuizAccessPanel.tsx";

export default function IEEEOpenDay() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <div className="min-h-screen w-screen bg-white">
            <Header />
            <HeroSection />
            <AboutSection />
            <TeamSection />
            <GallerySection />
            <Lightbox selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            <GameSection/>
            <QuizAccessPanel/>
            <Footer />
        </div>
    )
}