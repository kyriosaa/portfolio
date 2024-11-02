import { useState, useEffect } from "react";
import { Box, Typography, AppBar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import SoftwareProjectsList from "../components/SoftwareProjectsList";

const Software = () => {
  const [animate, setAnimate] = useState(false);
  const [fadeInProjects, setFadeInProjects] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setFadeInProjects(true);
    }, 1000); // Delay to match the duration of the slide-to-top animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <AppBar class="appbar">
        <Typography class="name" component="div">
          Purit Hongjirakul
        </Typography>
        <Typography class="title" component="div">
          Engineer & Developer
        </Typography>
        <Button
          component={Link}
          to="/"
          color="inherit"
          disableRipple
          sx={{
            textTransform: "capitalize",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          disableRipple
          sx={{
            textTransform: "capitalize",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          —
        </Button>
        <Button
          component={Link}
          to="/contact"
          color="inherit"
          disableRipple
          sx={{
            textTransform: "capitalize",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          Contact
        </Button>
        <Typography class="credit">
          Website created and designed by Purit Hongjirakul
        </Typography>
      </AppBar>

      <Box class="routes-layout-box">
        <Box class="content-alignment">
          <Box class={`page-content ${animate ? "slide-to-top" : ""}`}>
            <IconButton
              class="content-link"
              disableRipple
              component={Link}
              to="/projects"
            >
              <MdArrowBack />
            </IconButton>
            <Typography class="page-content">Software</Typography>
            <br />
            <Box
              class={`scrollable-container ${
                fadeInProjects ? "fade-in fade-in-visible" : ""
              }`}
            >
              <SoftwareProjectsList />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Software;
