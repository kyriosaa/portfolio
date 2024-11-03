import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeviceDetector from "./DeviceDetector";
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

function App() {
  return (
    <DeviceDetector>
      <Box className="app-layout-box">
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
      </Box>
    </DeviceDetector>
  );
}

export default App;
