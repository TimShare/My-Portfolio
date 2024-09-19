import "./Styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Project from "./Pages/Project";

import ScrollToTop from "./Utils/Scrolltotop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
