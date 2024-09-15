import "./Home.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TabCard from "../components/TabCard";
import { BlogTab } from "../components/BlogTab";
const Home = () => {
  return (
    <div id="content">
      <div className="pane pane-light name-and-icons">
        <h1 className="display">Patrick&nbsp;LeDew</h1>
        <div className="icons">
          <a
            href="https://www.github.com/patrickledew"
            title="Github"
            target="_blank"
            rel="noopener"
          >
            <FaGithub size={60} />
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-ledew"
            title="LinkedIn"
            target="_blank"
            rel="noopener"
          >
            <FaLinkedin size={60} />
          </a>
        </div>
      </div>
      <TabCard
        tabs={[
          {
            title: "About Me",
            content: <AboutMeTab />,
          },
          {
            title: "Experience",
            content: <ExperienceTab />,
          },
          {
            title: "Blog",
            content: <BlogTab />,
          },
        ]}
      />
    </div>
  );
};

const AboutMeTab = () => (
  <div className="about-me-tab">
    <h3>About Me</h3>
    <p>
      Hi, I'm Ricky LeDew, a passionate software developer with a knack for
      turning ideas into reality through code. With around two years of
      professional experience, I've transitioned from an intern doing frontend
      development with React to a full-stack C# developer. My journey into the
      world of programming began at the age of 12, and I've been captivated by
      the endless possibilities of technology ever since.
    </p>
  </div>
);

const ExperienceTab = () => (
  <div className="experience-tab">
    <h3>Professional Background</h3>
    <p>
      My professional experience spans across two significant roles. During
      college I started my career at Ventra Health, a healthcare RCM company,
      where I worked as a frontend developer intern. There, I developed internal
      React applications to help employees process medical records for billing
      and insurance purposes. Currently, I work at NLP Logix, an AI solutions
      and contract software development company, as a Software Engineer I. At
      NLP Logix, I work on a website used by millions of parents and guardians
      across Florida and West Virginia to apply for K-12 scholarships, working
      with a variety of modern technologies to improve user experience and
      functionality.
    </p>

    <h4>Ventra Health</h4>
    <p>
      My first programming job was at Ventra Health, a large healthcare RCM
      company, where I worked as a frontend developer intern. My work involved
      using NodeJS, TypeScript, and Material UI to develop internal React
      applications used to process medical records. During my time at Ventra, I:
      <ul>
        <li>
          Drastically improved the UI of several applications by updating colors
          and styles across hundreds of components.
        </li>
        <li>
          Built several important features single-handedly, streamlining user
          management and document processing.
        </li>
        <li>
          Migrated a critical outdated ASP.NET application to React, making the
          UI user-friendly and aesthetically pleasing.
        </li>
      </ul>
    </p>

    <h4>NLP Logix</h4>
    <p>
      In February 2024, I joined NLP Logix as a Software Engineer I. Here, I
      work on a website used by millions of parents and guardians across Florida
      and West Virginia to apply for K-12 scholarships. My role involves writing
      C# and Blazor code and working with Microsoft Azure, CosmosDB, Azure
      Functions, and Azure Service Bus. At NLP Logix, I have:
      <ul>
        <li>
          Helped overhaul the website's UI to be more mobile-friendly and
          visually appealing.
        </li>
        <li>Fixed numerous bugs on a rapid development schedule.</li>
        <li>
          Bootstrapped a new UI to help our client automate their document
          processing workflows.
        </li>
      </ul>
    </p>
  </div>
);

export default Home;
