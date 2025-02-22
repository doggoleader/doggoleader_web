import './App.css';
import {Route, Routes} from "react-router-dom";
import Index from "./pages/index/Index";
import Gallery from "./pages/gallery/Gallery";
import Header from "./components/header/Header";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
          <Route index element={<Index/>} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="portfolio" element={<Portfolio/>} />
      </Routes>
    </div>
  );
}

export default App;
