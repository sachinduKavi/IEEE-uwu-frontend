import NewChapterHeader from "./Header.tsx";
import WIEHero from "./HeroSection.tsx";
import WIEAbout from "./Aboout.tsx";
import WIEMembershipBenefits from "./MembershipBenifits.tsx";

const WiePage = () => {
    return (
        <div>
            <NewChapterHeader/>
            <WIEHero/>
            <WIEAbout/>
            <WIEMembershipBenefits/>
        </div>
    );
};

export default WiePage;