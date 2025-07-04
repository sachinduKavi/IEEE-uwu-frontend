import Slider from '../../components/Slider'
import UpcomingEventSection from '../../components/UpcomingEventSection'
import AboutUs from "../../components/AboutUs.tsx";
import HeroSection from '../../components/HeroSection.tsx';
import AboutSection from '../../components/AboutSection.tsx';
import Footer from '../../components/Footer.tsx';
import ChaptersSection from '../../components/Chapters.tsx';
import NavBar from '../../components/NavBar.tsx';
import OpenDaySection from "../../components/OpenDaySection.tsx";
import {Helmet} from 'react-helmet'

export default function Home() {
    return (
        <div className='screen'>
            <Helmet>
                <title>IEEE Student Branch | Uva Wellassa University</title>
                <meta name="description" content="IEEE Uva Wellassa University Student Branch is a passionate group of students dedicated to promoting technology and engineering. Affiliated with IEEE, the world's largest technical organization, we strive to advance innovation for the benefit of humanity." />
                <meta name="keywords" content="IEEE UWU, IEEE Student Branch, Uva Wellassa University, IEEE Sri Lanka, Technology Community, Student Engineering Club, Future Innovators, Tech Events UWU, Engineering Students Sri Lanka, UWU Clubs, IEEE Activities UWU, Student Development, Innovation and Technology, UWU IEEE Projects, Professional Development for Students" />
                <meta property="og:title" content="IEEE Student Branch | Uva Wellassa University" />
                <meta property="og:description" content="IEEE Student Branch of Uva Wellassa University is a vibrant community of tech enthusiasts, innovators, and future leaders. We aim to inspire students to learn, lead, and make a difference through technology and collaboration." />
                <meta property="og:image" content="https://www.ieeeuwu.org//your-homepage-image.jpg" />
                <meta property="og:url" content="https://www.ieeeuwu.org/" />
            </Helmet>
            <NavBar/>
            <Slider id="home"/>
            <OpenDaySection/>
            <HeroSection id="hero"/>
            <AboutSection id="about"/>
            <ChaptersSection id="chapters"/>
            <AboutUs id="about-us"/>
            <UpcomingEventSection id="upcoming-event"/>
            <Footer/>
        </div>
    )
}
