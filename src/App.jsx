import "./App.css";
import BrowseCategory from "./component/BrowseCategory";
import DiscoverMore from "./component/DIscoverMore";
import FooterSce from "./component/FooterSec";
import Header from "./component/Header";
import HeroSec from "./component/HeroSec";
import HowITWorks from "./component/HowITWorks";
import NftHighlights from "./component/NftHighlights";
import TrendingCol from "./component/TrendingCol";
import TopCreators from "./component/TopCreators";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./page/HomePage";
import Marketplace from "./page/Marketplace";
import Rankings from "./page/Rankings";
import Connect from "./page/connect";
import About from "./component/about";
function App() {
  return (
    <Router>
      <div className="bg-[#2b2b2b]">
        <About/>
        {/* <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/Rankings" element={<Rankings />} />
        </Routes>
        <FooterSce /> */}
      </div>
    </Router>
  );
}

export default App;
