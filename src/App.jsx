import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Desktop from "./Desktop";
import Electronics from "./pages/electronics";

function App() {
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </Router>
  );
}

export default App;
