import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { navBar, main, about, projects, skills, contact, academic, experience, interest} from "./portfolio.js";
import Main from "./components/Main";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import ContactMe from "./components/Contact.jsx";
import Academic from './components/Academic.jsx'
// import Experience from "./components/Experience";
// import Interests from "./components/Interest";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <Main
        gradient={main.gradientColors}
        title={`${main.name}`}
        message={main.message}
        icons={main.icons}
        ref={ref}
      />
      {about.show && (
        <About
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {academic.show && (
        <Academic
          heading={academic.heading}
          message={academic.message}
          link={academic.imageLink}
          imgSize={academic.imageSize}
        />
      )}
      {/* < Experience /> */}
      {projects.show && (
        <Project
          heading={projects.heading}
          username={projects.gitHubUsername}
          length={projects.reposLength}
          specfic={projects.specificRepos}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      {/* < Interest /> */}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      <Footer>
        {contact.show && (
          <ContactMe
            heading={contact.heading}
            message={contact.message}
            email={contact.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
