import './App.css';
import Nav from './Nav.js';
import Contact from './Contact.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Header">
        <div className="title">
          <h1 className="name-title">Megan</h1><h1 className="name-title-last">Smith</h1></div>
        <p className="name-description">Hello, I am the Web Developer perfect for your team.</p>
        <a href="#Contact" className="Main-Button">
          Let's Talk
          </a>
      </div>
      <div id="Explanation">
        <div className="resume-div">
          <div className="resume"></div>
          <a className="download-resume" download="megan-smith.pdf" href="megan-smith.pdf">Download My Resume</a>
        </div>
        <div>
          <h2 className="about-header">About Me</h2>
          <div className="Line"></div>
          <p className="Paragraph-block">I see coding as an endless opportunity to <b>create, experiment, and grow</b>.</p>
          <p className="Paragraph-block"> My goal is to use my skills to improve the world and create solutions to difficult challenges.</p>
          <p className="Paragraph-block">I'm ready to solve problems, learn, and grow with a team.</p>
        </div>
      </div>
      <div className="skills">
        <div className="header-skills">
          <div className="header-skills-1"></div>
          <h2 className="skills-title">Creative</h2>
          <div className="skills-line"></div>
          <p className="skills-paragraph">I am driven to improve and ready to let my creativity and enthusiasm for problem solving grow into innovation.</p>
        </div>
        <div className="header-skills">
          <div className="header-skills-2"></div>
          <h2 className="skills-title">Driven</h2>
          <div className="skills-line"></div>
          <p className="skills-paragraph">I have worked hard to self-teach from teachers, research, and practice. This shows in my past positive work experience and my ability win and complete work contracts.</p>
        </div>
        <div className="header-skills">
          <div className="header-skills-3"></div>
          <h2 className="skills-title">Steady</h2>
          <div className="skills-line"></div>
          <p className="skills-paragraph">I can code with javascript, react, HTML, CSS/SASS, and am unafraid to learn more. I will focus on the future in adding deeper skills in Node.js, Express, C, and Python.</p>
        </div>
      </div>
      <div id="Projects">
        <div className="Project-Explanation">
          <h2>Projects</h2>
          <div className="project-line"></div>
          <p className="Project-Block">Project demonstration of concepts and processes. Hover over the project images below to see a short preview demonstration</p>
        </div>
        <div className="Project-0-Group">
          <div className="Project-0"></div>
          <div className="Project-Text">
            <h2>Oh! So Sweet - Bakery Website</h2>
            <p><b>Key Features:</b> Multiple animations, order form handling, styling and mobile design</p>
            <p><b>Concept:</b> Create a fully functioning website for bakery business</p>
            <a href="https://smith-megan.github.io/bakery/" className="Live-Demo">Live Demo</a>
            <a href="https://github.com/smith-megan/bakery" className="Github-Repo">Github Repository</a>
          </div>
        </div>
        <div className="Project-1-Group">
          <div className="Project-1"></div>
          <div className="Project-Text">
            <h2>Harvard Art API</h2>
            <p><b>Key Features:</b> Drag and drop functionality. Passing child classes to parent divs and planning for more reusable components</p>
            <p><b>Concept:</b> Sort a random assortment of shapes into their respective collumns</p>
            <a href="https://smith-megan.github.io/Artistry/" className="Live-Demo">Live Demo</a>
            <a href="https://github.com/smith-megan/Artistry" className="Github-Repo">Github Repository</a>
          </div>
        </div>
        <div className="Project-2-Group">
          <div className="Project-2"></div>
          <div className="Project-Text">
            <h2>Shape Sort</h2>
            <p><b>Key Features:</b> Drag and drop functionality and adding classes based on user events</p>
            <p><b>Concept:</b> Sort a random assortment of shapes into their respective collumns</p>
            <a href="https://smith-megan.github.io/shapesort/" className="Live-Demo">Live Demo</a>
            <a href="https://github.com/smith-megan/shapesort" className="Github-Repo">Github Repository</a>
          </div>
        </div>
        <div className="Project-3-Group">
          <div className="Project-3"></div>
          <div className="Project-Text">
            <h2>MoneyStacks</h2>
            <p><b>Key Features:</b> React Project based around state and passing data to and from components</p>
            <p><b>Concept:</b> A visual way to track progress toward financial goals</p>
            <a href="https://smith-megan.github.io/moneystacks/" className="Live-Demo">Live Demo</a>
            <a href="https://github.com/smith-megan/moneystacks" className="Github-Repo">Github Repository</a>
          </div>
        </div>
        <div className="Project-4-Group">
          <div className="Project-4"></div>
          <div className="Project-Text">
            <h2>Page Turn</h2>
            <p><b>Key Features:</b> Jquery and Turn.js library integration</p>
            <p><b>Concept:</b> Quickly integrate existing libraries together for a brochure or book page.</p>
            <a href="https://smith-megan.github.io/book-page-turn/index.html" className="Live-Demo">Live Demo</a>
            <a href="https://github.com/smith-megan/book-page-turn/blob/main/index.html" className="Github-Repo">Github Repository</a>
          </div>
        </div>
      </div >
      <Contact />
    </div >
  );
}

export default App;
