import { useState, useEffect } from "react";
import {
  FaReact,
  FaDatabase,
  FaPython,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function App() {
const [theme, setTheme] = useState("light");

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};

  return (
    <main className="container">
      {/* Home */}
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle dark and light mode"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <header className="home">
        <h1 className="title">Nkashama96</h1>
        <p className="intro">
          <strong>Welcome to our homepage.</strong>
        </p>
      </header>

      {/* About */}
      <section className="about" aria-labelledby="about-title">
        <h2 id="about-title" className="center bold">I'm Tanasup</h2>
        <p className="center bold">Backend developer</p>

        <h3 className="center">What we do</h3>

        <div className="skills">
          <div className="skill-card">
            <FaDatabase aria-hidden="true" />
            <span>SQL</span>
          </div>

          <div className="skill-card">
            <FaPython aria-hidden="true" />
            <span>Python</span>
          </div>

          <div className="skill-card">
            <FaDatabase aria-hidden="true" />
            <span>Oracle PL/SQL</span>
          </div>

          <div className="skill-card">
            <FaReact aria-hidden="true" />
            <span>Oracle Database</span>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="portfolio" aria-labelledby="portfolio-title">
        <h2 id="portfolio-title">Portfolio</h2>

        <div className="projects">
          <figure className="project">
            <div className="thumbnail" />
            <figcaption>Database Management System</figcaption>
          </figure>

          <figure className="project">
            <div className="thumbnail" />
            <figcaption>Backend API with Python</figcaption>
          </figure>

          <figure className="project">
            <div className="thumbnail" />
            <figcaption>Enterprise Oracle Solution</figcaption>
          </figure>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>

        <div className="contact-icons">
          <a
            href="mailto:e.tneice@gmail.com"
            aria-label="Email"
            className="email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://nkashama96.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="github"
          >
            <FaGithub />
          </a>

          <a
            href="https://th.linkedin.com/in/tanasupe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </main>
  );
}


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
