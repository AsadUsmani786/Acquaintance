import { ArrowUpRight, Cat } from 'lucide-react';

const projects = [
  {
    number: '01',
    name: 'GitRot',
    stack: 'LangChain · RAG · FastAPI · Llama · ChromaDB',
    description: 'An AI-powered documentation and code analysis platform that understands entire code repositories and helps developers explore them.',
    href: ''
  },
  {
    number: '02',
    name: 'SQL Agent',
    stack: 'LangGraph · Gemini · FastAPI · SQLite · Docker',
    description: 'An agentic SQL assistant that converts natural-language questions into SQL queries and executes them against a SQLite database.',
    href: ''
  }
];

const skillGroups = [
  ['Languages', 'Python, C++, MySQL, HTML, CSS'],
  ['Frameworks', 'TensorFlow, LangChain, LangGraph, FastAPI'],
  ['Libraries', 'NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn'],
  ['Developer Tools', 'Git, GitHub, Excel, Docker, Linux'],
  ['AI / ML', 'Deep Learning, CNN, RNN, Transformers, Generative AI, Agentic AI, LLMs'],
  ['Core CS', 'Data Structures, OOP, DBMS, Operating Systems, Computer Networks']
];

function SectionHeading({ eyebrow, title }) {
  return <div className="section-heading"><span>{eyebrow}</span><h2>{title}</h2></div>;
}

export default function App() {
  return (
    <main className="shell">
      <nav className="nav">
        <a className="wordmark" href="#top">AU<span>.</span></a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>
        <a className="contact-link" href="mailto:YOUR_EMAIL@example.com">Get in touch <ArrowUpRight size={14} /></a>
      </nav>

      <section className="hero" id="top">
        <div className="availability"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
        <p className="hello">Hey, Asad here.</p>
        <h1>Building cool stuff,<br /><span>breaking things occasionally.</span></h1>
        <p className="intro">
          Final-year Computer Science student at <strong>BIT Mesra</strong>, specialising in
          Generative AI and Agentic AI. I enjoy building practical things with code,
          exploring new ideas, and occasionally getting distracted by cats.
        </p>
        <div className="hero-bottom">
          <span className="location">Ranchi, India</span>
         <div className="socials">
  <a href="https://github.com/AsadUsmani786" target="_blank" rel="noreferrer">GH ↗</a>
  <a href="https://www.linkedin.com/in/asad-usmani-/" target="_blank" rel="noreferrer">in ↗</a>
  
</div>
        </div>
        <div className="hero-index">PORTFOLIO / 2026</div>
      </section>

      <section className="content-section" id="experience">
        <SectionHeading eyebrow="01 / EXPERIENCE" title="Where I've worked." />
        <div className="experience-row">
          <div>
            <h3>AI/ML Intern <span className="at">at</span> Axis Points</h3>
            <p className="muted">Fine-tuned Mistral-7B on the MedMCQA dataset using QLoRA.</p>
          </div>
          <span className="date">MAY — JULY 2026</span>
        </div>
      </section>

      <section className="content-section" id="projects">
        <SectionHeading eyebrow="02 / SELECTED WORK" title="Things I've built." />
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <span className="project-arrow"><ArrowUpRight size={18} /></span>
                </div>
                <p className="stack">{project.stack}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section skills-section" id="skills">
        <SectionHeading eyebrow="03 / TOOLKIT" title="Skills & technologies." />
        <div className="skills-grid">
          {skillGroups.map(([label, value]) => (
            <div className="skill" key={label}>
              <h3>{label}</h3>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-note"><Cat size={16} /> Made with curiosity (and cat breaks).</div>
        <span>© 2026 ASAD USMANI</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
