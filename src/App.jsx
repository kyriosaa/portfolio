import "./App.css";
import { Box, Typography } from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./Background";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Hardware from "./pages/hardware";
import Software from "./pages/software";
import Contact from "./pages/contact";
import Wipeout from "./projects/software/wipeout";
import Snackstore from "./projects/software/snackstore";
import ItdlBiography from "./projects/software/itdlbiography";
import Sevenbinary from "./projects/hardware/7binary";
import { useEffect } from "react";
import GameConsole from "./projects/hardware/game-console";

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
    <Box class="border">
      <Box class="border-white">
        <Router>
          <Background />
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hardware" element={<Hardware />} />
            <Route path="/software" element={<Software />} />
            <Route path="/contact" element={<Contact />} />

            {/* Software Project Routes */}
            <Route path="/wipeout" element={<Wipeout />} />
            <Route path="/snackstore" element={<Snackstore />} />
            <Route path="/itdlbiography" element={<ItdlBiography />} />

            {/* Hardware Project Routes */}
            <Route path="/game-console" element={<GameConsole />} />
            <Route path="/7binary" element={<Sevenbinary />} />
          </Routes>
        </Router>
        <Box>
          <Typography class="credit">
            Website created and designed by Purit Hongjirakul
          </Typography>
          <Typography class="mobile-warning">
            Best viewed on a desktop
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
