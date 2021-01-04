// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main SECTION
const main = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  name: "Ritwik Rohitashwa",
  message: " Building tech to elevate people.. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ritwik2994",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ritwik-rohitashwa-921155160/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/ritwik210",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("./assets/img/ritwik_img.png"),
  imageSize: 375,
  message:
    "Hi all, I'm Ritwik Rohitashwa. I’m a BTech graduate in Computer Science Engineering. I'm a passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  //resume: require("./asstes/resume.pdf"),
   resume: "https://drive.google.com/file/d/1uZD4qyZyy79cVpZHnIiX2SyWqe6_Shmd/view",
};

// ACADEMICS SECTION
const academic = {
  show: true,
  heading: "Academic History",
  imageLink: require("./assets/img/ggsestc_logo.png"),
  imageSize: 150,
  message:
    "Hi all, I'm Ritwik Rohitashwa. I’m a BTech graduate Computer Science Engineering. I'm a passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
};

// PROJECTS SECTION
const projects = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ritwik2994", 
  reposLength: 6,
  specificRepos: [],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "PHP", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "Machine Learning", value: 60},
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Communication", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const contact = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Software Development, Python, ML, AI, Deep Learning, React and Cloud Development.",
  email: "rithvik2994@hotmail.com",
};


export { navBar, main, about, academic, projects, skills, contact };
