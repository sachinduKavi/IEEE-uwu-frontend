import AboutSection from "./AboutSection";
import Contact from "./Contact";
import Events from "./Events";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Membership from "./Membership";
import NavBar from "./NavBar";
import OurTeam from "./OurTeam";
import Resources from "./Resources";

export default function CSchapterPage() {
    return (
        <div className="min-h-screen bg-white">
            <NavBar/>
            <HeroSection/>
            <AboutSection/>
            <OurTeam/>
            <Membership/>
            <Resources/>
            <Events/>
            <Contact/>
            <Footer/>
        </div>
    )
}