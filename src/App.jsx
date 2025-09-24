import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={`${darkMode ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white" : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black"} min-h-screen font-sans transition-all duration-500`}>
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 sticky top-0 z-50 bg-black/40 backdrop-blur-md shadow-lg">
          <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-2xl font-bold tracking-wide">
            Vaddi Asha
          </motion.h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-teal-400 transition">About</a>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
            <a href="#certifications" className="hover:text-teal-400 transition">Certifications</a>
            <a href="#extracurricular" className="hover:text-teal-400 transition">Hobbies</a>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-3 py-1 rounded-full bg-teal-500 hover:bg-teal-400 text-sm">
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center justify-center h-screen text-center relative overflow-hidden">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse">
              Hi, I'm Vaddi Asha
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 text-lg max-w-2xl">
            Final-year B.Tech CSE student passionate about AI, ML, and Full Stack Web Development.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-6 space-x-4">
            <a href="#projects" className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full shadow-lg hover:opacity-90 transition">View Projects</a>
            <a href="/resume.pdf" className="px-6 py-2 border border-teal-400 rounded-full hover:bg-teal-500/20 transition">Download Resume</a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="p-12 bg-gray-800/50 rounded-2xl shadow-xl m-6">
          <motion.h3 initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-4">
            About Me
          </motion.h3>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-300 leading-relaxed max-w-4xl">
            A Final-year B.Tech student with strong foundations in Artificial Intelligence, Machine Learning, and Full Stack
            Web Development. Skilled in Python, Java, Web technologies, and database management with hands-on project experience.
            Passionate about building intelligent solutions, developing scalable applications, and continuously learning emerging technologies.
          </motion.p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-12 bg-gray-800/50">
          <motion.h3 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-semibold mb-6">
            Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[{
              title: "Online Quiz Platform",
              desc: "Web-Based Learning Assessment System with Firebase backend, authentication, and score tracking.",
              stack: "HTML, CSS, JavaScript, Firebase"
            }, {
              title: "Text-Based Language Translator",
              desc: "AI-powered tool for multilingual translation with Googletrans API.",
              stack: "Python, Googletrans, Tkinter"
            }].map((proj, i) => (
              <motion.div whileHover={{ scale: 1.05 }} key={i} className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-teal-500/40 transition">
                <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
                <p className="text-gray-400 mb-2">{proj.desc}</p>
                <span className="text-sm text-teal-400">{proj.stack}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="p-12">
          <motion.h3 initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-6">
            Skills
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {["Python", "Java", "JavaScript", "React.js", "SQL", "C++", "MySQL", "MongoDB", "AWS", "TensorFlow", "Tailwind CSS", "OpenCV", "Agile/Scrum", "OOP", "DSA"]
              .map((skill) => (
                <motion.span whileHover={{ scale: 1.1, backgroundColor: "#14b8a6", color: "white" }} key={skill} className="px-4 py-2 bg-gray-700 rounded-lg text-center cursor-pointer shadow-md">
                  {skill}
                </motion.span>
              ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="p-12 bg-gray-900/50">
          <motion.h3 initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-6">
            Certifications & Achievements
          </motion.h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[{
              title: "Python Essentials 1 & 2, C Programming Essentials",
              org: "Cisco NetAcad"
            }, {
              title: "CCNA: Introduction to Networks, Switching & Routing, Enterprise Networking",
              org: "Cisco NetAcad"
            }, {
              title: "Data Engineering & Machine Learning Foundations",
              org: "AWS"
            }, {
              title: "Google AI-ML, Gen AI, Python Full Stack Developer, Android Developer",
              org: "AICTE, Eduskills"
            }].map((cert, i) => (
              <motion.div whileHover={{ scale: 1.02 }} key={i} className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h4 className="font-bold text-lg text-teal-400">{cert.title}</h4>
                <p className="text-gray-400">{cert.org}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Extra Curricular Section */}
        <section id="extracurricular" className="p-12 bg-gray-800/40">
          <motion.h3 initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-6">
            Hobbies & Extra Curriculars
          </motion.h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[{
              hobby: "Public Speaking & Debates",
              desc: "Actively participated in debates, presentations, and anchoring events."
            }, {
              hobby: "Volunteering",
              desc: "Involved in NGOs, blood donation camps, and teaching underprivileged students."
            }, {
              hobby: "Hackathons & Coding Challenges",
              desc: "Regularly participated in hackathons and coding contests to sharpen problem-solving skills."
            }, {
              hobby: "Creative Writing",
              desc: "Enjoy writing blogs and technical content for sharing knowledge."
            }, {
              hobby: "Fitness & Sports",
              desc: "Play badminton and follow a regular fitness routine to stay active."
            }].map((extra, i) => (
              <motion.div whileHover={{ scale: 1.05 }} key={i} className="p-6 bg-gray-900 rounded-xl shadow-md hover:shadow-teal-500/30 transition">
                <h4 className="text-xl font-bold mb-2 text-teal-400">{extra.hobby}</h4>
                <p className="text-gray-400">{extra.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="p-12 text-center">
          <motion.h3 initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-6">
            Contact
          </motion.h3>
          <p className="text-gray-300">Let’s connect and build something great!</p>
          <div className="mt-6 flex justify-center space-x-6">
            <motion.a whileHover={{ scale: 1.2 }} href="mailto:ashavaddi6303@gmail.com" className="hover:text-teal-400">📧 Email</motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/AshaVaddi" target="_blank" rel="noreferrer" className="hover:text-teal-400">💻 GitHub</motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/vaddi-asha-72766a259" target="_blank" rel="noreferrer" className="hover:text-teal-400">🔗 LinkedIn</motion.a>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-6 bg-black/30 text-center text-gray-400">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>© {new Date().getFullYear()} Vaddi Asha. All rights reserved.</motion.p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
