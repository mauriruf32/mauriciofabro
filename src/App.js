import React from 'react';

import NavBar from "./Components/NavBar/Header"
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Projects from "./Views/Proyects/Proyects";
import Contact from './Views/ContactInfo/Contact';
import Skills from './Components/Skills/Skills';
import Certifications from './Views/Certifications/Certifications';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Certifications/>
      <Contact />
    </div>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// import About from './Views/About/About';
// import Contact from './Views/ContactInfo/Contact';
// import Home from './Views/Home/Home';
// import Proyects from "./Views/Proyects/Proyects";

// import "./App.css"


// function App() {
//   return (
//     <Router>
//       <div>
//         <nav className="containerApp">
//           Mauricio Fabro
//           <ul>
//             <Link to="/">Inicio</Link>
//             <li><Link to="/contact">Contacto</Link></li>
//             <li><Link to="/proyects">Projectos</Link></li>
//             <li><Link to="/about">Sobre Mi</Link></li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/proyects" element={<Proyects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
