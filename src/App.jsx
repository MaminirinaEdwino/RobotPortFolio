import "./App.css";
import Contacts from "./components/contacts";
import AboutMe from "./components/information";
import LandingPage from "./components/landingPage";
import NavBar from "./components/navBar";
import Projects from "./components/projets";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </>
  );
}

export default App;
