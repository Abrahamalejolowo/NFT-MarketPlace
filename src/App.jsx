import "./App.css";
import FooterSce from "./component/FooterSec";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Marketplace from "./page/Marketplace";
import Rankings from "./page/Rankings";
import Connect from "./page/Connect";
import ScrollToTop from "./component/ScrollToTop";
import Signup from "./page/Signup";
import LoginCon from "./page/Login";
import About from "./component/About"
import Connectwallet from "./component/Connectwallet";

function App() {
  return (
    <Router>
      <div className="bg-[#2b2b2b]">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="**" element={<Connectwallet />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<LoginCon />} />
          <Route/>
        </Routes>
        <FooterSce />
      </div>
    </Router>
  );
}

export default App;
