import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>

      {/* Main content */}
      <div style={{ paddingBottom: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Sticky Bottom Navbar */}
      <Navbar />

    </BrowserRouter>
  );
}

export default App;