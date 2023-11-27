import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Work from "../pages/Work";
import About from "../pages/About";
import Contact from "../pages/Contact";

export function Router() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 page */}
        <Route
          path="*"
          element={<h1 className="font-semibold">404 Not found</h1>}
        />
      </Routes>
    </>
  );
}
