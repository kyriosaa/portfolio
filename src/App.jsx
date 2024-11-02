import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Background from "./Background";
import Projects from "./pages/projects";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  return (
    <Box class="app-layout-box">
      <Router>
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
