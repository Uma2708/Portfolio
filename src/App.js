import Header from "./components/Header";
import Banner from "./components/Banner";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutMe from "./components/About";
import '@fortawesome/fontawesome-free/css/all.css';
import CertificateList from "./components/Certificates";

function App() {
  return (
    <div>
    <Header />
    <Banner />
    <AboutMe/>
    <Education/>
    <CertificateList/>
    <Projects />
    <Contact/>
    <Footer />
    </div>
  );
}

export default App;
