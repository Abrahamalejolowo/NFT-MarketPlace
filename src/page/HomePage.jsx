import React from "react";
import TrendingCol from "../component/TrendingCol";
import TopCreators from "../component/TopCreators";
import BrowseCategory from "../component/BrowseCategory";
import NftHighlights from "../component/NftHighlights";
import DIscoverMore from "../component/DIscoverMore";
import HowITWorks from "../component/HowITWorks";
import HeroSec from "../component/HeroSec";

function HomePage() {
  return (
    <div >
      <HeroSec />
      <TrendingCol />
      <TopCreators />
      <BrowseCategory />
      <NftHighlights />
      <DIscoverMore />
      <HowITWorks />
    </div>
  );
}

export default HomePage;
