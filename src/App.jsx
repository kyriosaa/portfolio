import { Box, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Box
      sx={{
        border: "7vh solid black",
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          border: "1px solid white",
          width: "calc(100vw - 14vh)",
          height: "calc(100vh - 14vh)",
          boxSizing: "border-box",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            <Route path="/7binary" element={<Sevenbinary />} />
          </Routes>
        </Router>
        <Typography class="credit">
          Website created and designed by Purit Hongjirakul
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
