import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./Background";
import Home from "./Home";
import Projects from "./Projects";
import Hardware from "./Hardware";
import Software from "./Software";
import Contact from "./Contact";
import Wipeout from "./Wipeout";
import Snackstore from "./Snackstore";
import ItdlBiography from "./ItdlBiography";
import Sevenbinary from "./Sevenbinary";
import DeviceDetector from "./DeviceDetector";

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
