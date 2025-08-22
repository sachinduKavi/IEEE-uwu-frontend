import NewChapterHeader from "./Header.tsx";
import WIEHero from "./HeroSection.tsx";
import WIEAbout from "./Aboout.tsx";
import WIEMembershipBenefits from "./MembershipBenifits.tsx";
import WIEAwards from "./Awards.tsx";

const WiePage = () => {
    return (
        <div>
            <NewChapterHeader/>
            <WIEHero/>
            <WIEAbout/>
            <WIEMembershipBenefits/>
            <WIEAwards/>
        </div>
    );
};

export default WiePage;