import IEEEOpenDay from "../../components/Openday/IEEEOpenDay.tsx";

const OpenDay = () => {
    return (
        <div>
            <Helmet>
                <title>IEEE Student Branch | Open Day</title>
                <meta name="description" content="Join us for the official welcome and induction of new members into the Student Branch, which is designed to offer participants a comprehensive introduction to the Institute of Electrical and Electronics Engineers (IEEE), including its global structure, available opportunities, insights into the professional and personal development avenues offered, and the transformative impact of volunteerism." />
                <meta name="keywords" content="IEEE Open Day, IEEE UWU, Uva Wellassa University IEEE, student induction, engineering club Sri Lanka, IEEE membership, technology events UWU, student orientation, UWU student branch, IEEE Sri Lanka Section, professional development, volunteering in IEEE, tech leadership UWU" />
                <meta property="og:title" content="IEEE Student Branch | Open Day" />
                <meta property="og:description" content="Join us for the IEEE UWU Open Day – an inspiring introduction to the world of IEEE. Discover opportunities in tech, leadership, professional development, and global networking designed to empower future innovators at Uva Wellassa University." />
                <meta property="og:image" content="https://www.ieeeuwu.org/your-contact-us-image.jpg" />
                <meta property="og:url" content="https://www.ieeeuwu.org/openDay" />
            </Helmet>
            <IEEEOpenDay/>
        </div>
    );
};

export default OpenDay;