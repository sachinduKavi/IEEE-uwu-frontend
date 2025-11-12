import CSchapterPage from '../../components/CSchapter/CSchapterPage';
import { Helmet } from 'react-helmet';

const CSchapter = () => {
    return (
        <div>
            <Helmet>
                <title>IEEE Student Branch | Computer Society</title>
                <meta name="description" content="Be part of the official induction and orientation program of the IEEE Computer Society Student Chapter at Uva Wellassa University. Explore how IEEE CS empowers students in computing, AI, software engineering, and technology innovation through leadership, collaboration, and global exposure." />
                <meta name="keywords" content="IEEE Computer Society, IEEE CS UWU, Uva Wellassa University IEEE, computer science club Sri Lanka, IEEE membership, technology events UWU, programming community, UWU student branch, IEEE Sri Lanka Section, software engineering, AI and computing, professional development, volunteering in IEEE CS, tech leadership UWU" />
                <meta property="og:title" content="IEEE Computer Society | Student Chapter UWU" />
                <meta property="og:description" content="Join the IEEE Computer Society Chapter at Uva Wellassa University — a community for innovators in computing, AI, and software engineering. Discover opportunities for learning, leadership, and global networking through IEEE CS." />
                <meta property="og:image" content="https://www.ieeeuwu.org/images/ieeecs-chapter-banner.jpg" />
                <meta property="og:url" content="https://www.ieeeuwu.org/cs" />
            </Helmet>
            <CSchapterPage/>
        </div>
    );
};

export default CSchapter;