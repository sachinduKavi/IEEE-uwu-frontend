import NewChapterHeader from "./Header.tsx";
import WIEHero from "./HeroSection.tsx";
import WIEAbout from "./Aboout.tsx";
import WIEMembershipBenefits from "./MembershipBenifits.tsx";
import WIEAwards from "./Awards.tsx";
import WIEEventsTimeline from "./Events.tsx";

const WiePage = () => {
    return (
        <div>
            <NewChapterHeader/>
            <WIEHero/>
            <WIEAbout/>
            <WIEMembershipBenefits/>
            <WIEAwards/>
            <WIEEventsTimeline/>
        </div>
    );
};

export default WiePage;