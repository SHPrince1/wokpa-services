// import logo from './logo.svg';
import './App.css';
// import NavBar from './components/navbar';
// import WelcomeNavbar from './components/welcome Components/welcome-navbar';
// import Index from './components/welcome Components';

import Home from './components/welcome Components/index';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <WelcomeNavbar /> */}
      {/* <Index /> */}


      <Router>
      {/* <NavBar /> */}
        <Routes>
        <Route path="/" exact element={<Home />} /> 
          {/* <Route path="/skills" exact element={<About />} />
          <Route path="/project" element={<Project />} /> */}
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
