import NewChapterHeader from "./Header.tsx";
import WIEHero from "./HeroSection.tsx";
import WIEAbout from "./Aboout.tsx";
import WIEMembershipBenefits from "./MembershipBenifits.tsx";
import WIEAwards from "./Awards.tsx";
import WIEEventsTimeline from "./Events.tsx";
import CommitteeDisplay from "./CommitteMembers.tsx";
import WIEFooter from "./Footer.tsx";

const WiePage = () => {
    return (
        <div>
            <NewChapterHeader/>
            <WIEHero/>
            <WIEAbout/>
            <CommitteeDisplay/>
            <WIEAwards/>
            <WIEEventsTimeline/>
            <WIEMembershipBenefits/>
            <WIEFooter/>

        </div>
    );
};

export default WiePage;