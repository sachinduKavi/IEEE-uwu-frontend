import HeadSection from "./HeadSection.tsx";
import backgroundImage from "../../assets/images/openDayHeader.jpg"
const OpenDayHeader = () => {
    return (
        <div>
            <HeadSection heading={'About Us'}
                         para={'Building Trust, Driving Growth, and Creating Value in the World of Investments.'}
                         image={backgroundImage}/>
        </div>
    );
};

export default OpenDayHeader;