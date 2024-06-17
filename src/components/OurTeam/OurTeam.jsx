import Navbar from "../Navbar/Navbar";
import OurTeamIntro from './OurTeamIntro';
import Providers from "./Providers";
import BecomeProvider from "../About/BecomeProvider";
import Team from "./Team";
import ContactUs from './ContactUs';
import Footer from "../Footer/Footer";

const OurTeam = () => {
  return (
    <>
        <Navbar/>
        <OurTeamIntro />
        <Providers itemsPerPage={12}/>
        <BecomeProvider bg="white"/>
        <Team itemsPerPage={8}/>
        <ContactUs />
        <Footer/>
    </>
  );
};
export default OurTeam;
