import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Legacy from "./pages/legacy";
import Media from "./pages/media";
import Collection from "./pages/collection";
import Header from "./components/header";
import FooterWithSocialLinks from "./components/footer";
import ErrorPage from "./pages/404";
import { Help } from "./pages/help";
import { Legal } from "./pages/legal";
import { Terms } from "./pages/terms";
import Necklace from "./pages/necklace";
import Earring from "./pages/earring";
import Pendant from "./pages/pendant";
import Bracelet from "./pages/bracelet";
import Ring from "./pages/ring";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/media" element={<Media />} />
          <Route path="/legacy" element={<Legacy />} />

          <Route path="/help" element={<Help />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/terms" element={<Terms />} />

          <Route path="/necklace" element={<Necklace />} />
          <Route path="/earring" element={<Earring />} />
          <Route path="/pendant" element={<Pendant />} />
          <Route path="/bracelet" element={<Bracelet />} />
          <Route path="/ring" element={<Ring />} />

          {/* Catch-all route for paths not matched by any other route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <div className="">
          <FooterWithSocialLinks />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
