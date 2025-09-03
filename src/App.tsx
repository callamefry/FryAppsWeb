import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ProfessionalExperience from './ProfessionalExperience';

const TopBar: React.FC = () => {
  const location = useLocation();
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <Link to="/">
          <span className="icon">🌟</span>
        </Link>
      </div>
      <div className="top-bar-right">
        {location.pathname === '/professional-experience' ? (
          <Link to="/">
            <button className="top-bar-btn">About Us</button>
          </Link>
        ) : (
          <Link to="/professional-experience">
            <button className="top-bar-btn">Professional Experience</button>
          </Link>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <TopBar />
    {/* Title bar with header */}
    <div className="title-bar">
      <h1>Fry Apps Ltd</h1>
    </div>
    <Routes>
      <Route path="/" element={
        <div className="main-layout">
          <div className="main-left">
            <div className="app-container">
              <p>I am a versatile and creative Unity developer, designer, and maintanence contractor with over a decade of hands-on experience in building games, apps and websites. Currently operating as the Director and Lead Developer of Fry Apps Ltd, I develop and publish original software while also taking on freelance and contract projects that span game development, full-stack web and mobile applications, and long term maintanence of those projects. I have a meticulous eye for detail and strong artistic background, picking up new skills quickly and problem solving are areas that I thrive in and enjoy a lot. 
              </p>
              <p>My background includes almost ten years of professional development experience, including a full-time role at Unit11 Apps (Robb Research), where I contributed to a wide range of educational games and applications. Since 2021, I’ve been running my own independent development studio, handling everything from code architecture and backend systems to animation, UI/UX, and publishing.
              </p>
              <p>I am used to dealing with complex cross-platform projects such as Gooseberry Planet's safeguarding educational product, consiting of a Unity app and React website, deployed on WebGL, iOS, Android, and PC. This system integrated real-time database interaction using RESTful APIs and SQL, with AWS-based cloud infrastructure and carefully managed data security protocols to protect the sensitive user data of over 200 schools.
              </p>
              <p>I’ve designed and developed multiple games from concept to delivery, both as part of a team and independently. These projects have allowed me to take on a wide range of roles—level designer, game logic programmer, artist and model designer, producer, animator, and sound designer—helping me become a confident and well-rounded developer. In many cases, I’ve acted as a solo dev, covering all areas of development, which I’ve found both challenging and deeply rewarding.
              I’m an observant and compassionate person, which helps me communicate effectively within teams and take on leadership roles when needed. I continue to develop projects in my spare time and am currently working on a game I hope to release on Steam in the near future.
              </p>
            </div>
          </div>
          <div className="main-divider"></div>
          <div className="main-right">
            <h2>Skills:</h2>
            <p>
              Over the past ten years, I’ve built and shipped more than 30 games and applications, the majority as a solo developer. I’ve developed a strong foundation in both front-end and back-end development, animation, and design theory. Here's a breakdown of my core skills:
            </p>
            <ul>
              <li><strong>🧠 Programming & Development</strong>
                <ul>
                  <li>Languages & Frameworks: C#, .NET, SQL, Node.js, JavaScript, JSON</li>
                  <li>Game Engines: Unity (2D/3D), Unreal Engine</li>
                  <li>Web: React, RESTful APIs, HTML/CSS</li>
                </ul>
              </li>
              <li><strong>☁️ Cloud & DevOps</strong>
                <ul>
                  <li>Platforms: AWS EC2, AWS RDS</li>
                  <li>Security: SSH Configurations, Security Groups</li>
                </ul>
              </li>
              <li><strong>🎨 Design & Art</strong>
                <ul>
                  <li>Tools: Adobe Photoshop (graphic design & hand drawn), Illustrator, Drawing Tablet</li>
                  <li>Animation: 2D/3D character rigging, keyframe animation, sprite animation</li>
                  <li>UX/UI: Custom app icons, asset design, responsive UI elements</li>
                </ul>
              </li>
              <li><strong>🔊 Audio & Media</strong>
                <ul>
                  <li>Audio Engineering: Audacity (sound design, mixing)</li>
                  <li>Music & SFX: Basic composition and implementation in games</li>
                </ul>
              </li>
              <li><strong>🤝 Other Experience</strong>
                <ul>
                  <li>Over 6 years in customer service</li>
                  <li>Team leadership & project management</li>
                  <li>Strong written & verbal communication</li>
                </ul>
              </li>
            </ul>
            <h3>Education:</h3>
            <ul>
              <li>September 2012 - June 2015 Manchester Metropolitan University,<br />
                BSc (Hons) Computer Games Technology - (2:1).</li>
              <li>September 2011 - June 2012 University of Manchester,<br />
                Physics Foundation Year.</li>
            </ul>
          </div>
        </div>
      } />
      <Route path="/professional-experience" element={<ProfessionalExperience />} />
    </Routes>
  </Router>
);

export default App;