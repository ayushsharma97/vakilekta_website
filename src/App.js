import './App.css';
import Headers from './Components/Headers';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Privacypolicy from './Components/Privacypolicy';
import Aboutus from './Components/Aboutus';

function App() {
  return (
    <Router>
      <Headers />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/about-us" element={<Aboutus />} />
        {/* <Route path="/support" element={<Support />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
