import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/website" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
