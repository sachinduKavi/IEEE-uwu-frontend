import Slider from '../../components/Slider';
import UpcomingEventSection from '../../components/UpcomingEventSection';
import AboutUs from "../../components/AboutUs.tsx";
import HeroSection from '../../components/HeroSection.tsx';
import AboutSection from '../../components/AboutSection.tsx';
import Footer from '../../components/Footer.tsx';
import ChaptersSection from '../../components/Chapters.tsx';
import NavBar from '../../components/NavBar.tsx';
import Events from '../../components/Events.tsx';

export default function Home() {
    return (
        <div className='screen'>
            <NavBar />
            <Slider id="home" />
            <Events id="events" />
            <HeroSection id="hero" />
            <AboutSection id="about" />
            <ChaptersSection id="chapters" />
            <AboutUs id="about-us" />
            <UpcomingEventSection id="upcomingevent" />
            <Footer />
        </div>
    )
}